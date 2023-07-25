const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
// require('dotenv').config();

async function init(){
let browser = await puppeteer.launch({
    // executablePath:  path.resolve(process.env.PUPPETEER_EXECUTABLE_PATH),
    executablePath:  path.resolve('C:/Program Files/Google/Chrome/Application/chrome.exe'),
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    // headless:  process.env.PUPPETEER_HEADLESS === 'true',
    defaultViewport:{
        width: 1200,
        height: 1000
    },
    headless:  false,
    devtools: true,
    userDataDir:"./test/user_data",
});

let browserWSEndpoint = browser.wsEndpoint();
//  fs.createWriteStream(path.resolve("./ws_endpoint.txt"), browserWSEndpoint )

 fs.writeFile( path.resolve("./test/ws_endpoint.txt"), browserWSEndpoint, err=>{});

 browser.on('disconnected', async () => {
    fs.unlink( path.resolve("./test/ws_endpoint.txt"), err=>{} );
    console.log("File Deleted on Disconnect")
});

 console.log("browserWSEndpoint: ", browserWSEndpoint);

}
init();