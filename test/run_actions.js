const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const { actions } = require('./actions.json');
const { includes } = require('../../automatish/puppeteer/modules/Errors');


class Steps{
    constructor(){
        this.browser = null;
        this.page    = null;
        this.data    = {};
        this.info = [];
    }
    async step_lunch_chrome() {

        this.actions = [...actions];

        if(fs.existsSync( path.resolve("./test/ws_endpoint.txt") )){

            console.log("Running From Existing");

            let browserWSEndpoint = fs.readFileSync( path.resolve("./test/ws_endpoint.txt"), { encoding:"utf-8" });
            this.browser = await puppeteer.connect({ 
                browserWSEndpoint: browserWSEndpoint,
                defaultViewport:{
                    width: 1200,
                    height: 1000
                }
             });

            let Pages = await this.browser.pages();

            

            for( let i=0; i < Pages.length; i++  ){

                let currentUrl     = Pages[i].url();
                // let FilteredAction = actions.filter((value) => new URL(currentUrl).href == new URL(value.url).href );

                this.actions = this.actions.map( (value)=>{ 
                    if(new URL(currentUrl).href == new URL(value.url).href){
                        value["page"] = Pages[i];
                    }
                    return value;
                });

                // if( FilteredAction.length ){
                //     this.runAction(Pages[i], FilteredAction[0]);
                // }

                // console.log("currentUrl: ",  new URL( currentUrl ).href);
                // console.log("actions", actions.filter((value) => new URL(currentUrl).href == new URL(value.url).href ) );

                // Pages[i].close();
            }
            // this.page = await this.browser.newPage();
            // console.log("Ws Endpoint", browserWSEndpoint);
        }else{

        this.browser = await puppeteer.launch({
            // executablePath:  path.resolve(process.env.PUPPETEER_EXECUTABLE_PATH),
            executablePath:  path.resolve('C:/Program Files/Google/Chrome/Application/chrome.exe'),
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
            // headless:  process.env.PUPPETEER_HEADLESS === 'true',
            headless:  false,
            devtools: true,
            userDataDir:"./test/user_data",
        });

        let browserWSEndpoint = this.browser.wsEndpoint();

        // console.log("Browser Ws End Point: ", browserWSEndpoint );
        // exit;

        // this.browser.disconnect();

        // this.browser = await puppeteer.connect({ browserWSEndpoint });

        this.page = await this.browser.newPage();

        // await this.stop_redirection();
        //   this.page.target();
        }
       await this.allActions();
    }

    async allActions(){
        for( let i=0; i < this.actions.length ; i++ ){
            // console.log("actions", this.actions);
           await this.runAction( this.actions[i]);
        }
    }

    async runAction(action){
        if(action?.page && action.page){
            if(action.action == "reload"){
               await action.page.reload();
            }
            if(action.action == "reload_assets"){
                // page.reload();
                // console.log(action);
                await action.page.evaluate(()=>{
                    console.clear();
                    // console.log("from puppert", window);
                });

                // Remove Script Tag
                await action.page.evaluate((id, content) => {
                    var elements = document.querySelectorAll("#"+id);
                    for(var i=0; i< elements.length; i++){
                        // console.log("remoing element: ", elements[i]);
                        // elements[i].parentNode.removeChild(elements[i]);

                        var newScript = document.createElement('script');
                        newScript.type = '';
                        newScript.id = id;
                        newScript.innerHTML = content;

                        elements[i].replaceWith(newScript);
                    }
                  }, action.js?.key, fs.readFileSync( path.resolve( action.js?.path), {encoding:"utf-8"} ) );

                // Add script
                // await action.page.addScriptTag({
                //     path:action.js?.path,
                //     id:action.js?.key
                // });

                // await action.page.addStyleTag({
                //     path:action.css?.path,
                //     id:action.css?.key,
                //     content:"id ='df' "
                // });

                // Remove and add style
                await action.page.evaluate(
                    (id, content)=>{
                    let currentStyle = document.querySelector("#"+id);
                    if(currentStyle){
                        currentStyle.parentNode.removeChild(currentStyle);
                    }else {
                        console.log("currentStyle", currentStyle);
                    }
                    var style = document.createElement('style');
                    style.type = 'text/css';
                    style.id = id;
                    style.innerHTML = content;
                    document.getElementsByTagName('head')[0].appendChild(style);
                  }, action.css?.key, fs.readFileSync( path.resolve( action.css?.path), {encoding:"utf-8"} )
                  );

                let content = await action.page.content();
                await action.page.setContent( content );
                // console.log("Content: ",  );
            }
        }else{
            console.log("new page: ", action);
            let newPage =  await this.browser.newPage();
            // newPage.setDefaultNavigationTimeout(0); 
            // await newPage.waitForNavigation(
            //     {
            //     timeout:30000,
            //     waitUntil:'domcontentloaded'
            // }
            // );
           await newPage.goto(action?.url,{
            waitUntil: 'networkidle2'
          });
        }
    }
}
let _Steps = new Steps();
_Steps.step_lunch_chrome();