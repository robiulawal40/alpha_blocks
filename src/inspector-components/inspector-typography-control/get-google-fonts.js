console.log("Google Fonts");
const fs = require('fs');
const path = require('path');

let googleURL = 'https://raw.githubusercontent.com/jonathantneal/google-fonts-complete/refs/heads/master/google-fonts.json';
fetch(googleURL)
.then(response => response.text())
.then(data => {
  let googleFonts = {};
  let fonts = JSON.parse(data);
  for( let fontName in fonts ){
    googleFonts[fontName]={};
    if(fonts[fontName]?.subsets){
      googleFonts[fontName]["subsets"] = fonts[fontName]?.subsets;
    }

      for( let variant in fonts[fontName]["variants"] ){
        let fontWeights = Object.keys(fonts[fontName]?.variants?.[variant]);
        console.log("variant, fontWeights: ", variant, fontWeights);
        if(variant && fontWeights){

          // console.log("formatted Fonts: ", googleFonts);
          googleFonts[fontName]['v']={};
          googleFonts[fontName]['v'][variant] = fontWeights??[];
        }
      }
    // console.log("Font Name:", fontName);
  }
  return googleFonts;
})
.then(formattedData=>{
  console.log("formattedData: ", formattedData);
  fs.writeFileSync("fonts.json", JSON.stringify(formattedData), {encoding:"utf8",  flag: 'w'});
})
  .catch(err=>{
    console.log("Error on Google: ", err)
  })