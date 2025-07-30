
function AlphaBackground(attributes, keyName, defaultValue="#fff"){
  if( keyName in attributes && attributes[keyName].type ){
    let background = attributes[keyName].type === "color"?attributes[keyName]["color"]:attributes[keyName]["gradient"];
    return background;
  }
  return defaultValue;
}

function AlphaBackgroundCSS(attributes, keyName, defaultValue="#fff"){
  let alphaValue = AlphaBackground(attributes, keyName, defaultValue="#fff");
  let colorImage="";
  if( keyName in attributes && attributes[keyName].type ){
    if(attributes[keyName].type == "gradient"){
      colorImage = {"backgroundImage":alphaValue};
    }else{
      colorImage = {"backgroundColor":alphaValue};
    }
  }
  return colorImage;
}
function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function AlphaFourDCss(attributes, keyName, attrName="padding", cssLeft=[]){
  let fourCss={};
  let [ leftOne =`${attrName}-top`, leftTwo =`${attrName}-right`, leftThree =`${attrName}-bottom`, leftFour =`${attrName}-left`] = cssLeft;


  if(keyName in attributes  ){
    
    if('desktop' in attributes[keyName] ){
      fourCss["initial"] = { 
        [`${leftOne}`]:`${attributes[keyName]?.desktop?.borderTop}` + attributes[keyName]?.desktop?.unit,
        [`${leftTwo}`]:`${attributes[keyName]?.desktop?.borderRight}` + attributes[keyName]?.desktop?.unit,
        [`${leftThree}`]:`${attributes[keyName]?.desktop?.borderBottom}` + attributes[keyName]?.desktop?.unit,
        [`${leftFour}`]:`${attributes[keyName]?.desktop?.borderLeft}` + attributes[keyName]?.desktop?.unit,
      };
     
    }
    if('laptop' in attributes[keyName] ){
      fourCss["md"] = { 
        [`${leftOne}`]:`${attributes[keyName]?.laptop?.borderTop}` + attributes[keyName]?.laptop?.unit,
        [`${leftTwo}`]:`${attributes[keyName]?.laptop?.borderRight}` + attributes[keyName]?.laptop?.unit,
        [`${leftThree}`]:`${attributes[keyName]?.laptop?.borderBottom}` + attributes[keyName]?.laptop?.unit,
        [`${leftFour}`]:`${attributes[keyName]?.laptop?.borderLeft}` + attributes[keyName]?.laptop?.unit,
      };
    }
    if('mobile' in attributes[keyName] ){
      fourCss["sm"] = { 
        [`${leftOne}`]:`${attributes[keyName]?.mobile?.borderTop}` + attributes[keyName]?.mobile?.unit,
        [`${leftTwo}`]:`${attributes[keyName]?.mobile?.borderRight}` + attributes[keyName]?.mobile?.unit,
        [`${leftThree}`]:`${attributes[keyName]?.mobile?.borderBottom}` + attributes[keyName]?.mobile?.unit,
        [`${leftFour}`]:`${attributes[keyName]?.mobile?.borderLeft}` + attributes[keyName]?.mobile?.unit,
      };
    }
  }
  return fourCss;
}

function AlphaOneDControl(attributes, keyName, attrName="b"){
  let oneD={};

  if(keyName in attributes  ){
    if('desktop' in attributes[keyName] ){
      oneD = { 
        ...oneD,
        [`--lg-${attrName}`]:`${attributes[keyName]?.desktop?.val}` + attributes[keyName]?.desktop?.unit,
      };
    }
    if('laptop' in attributes[keyName] ){
      oneD = { 
        ...oneD,
        [`--md-${attrName}`]:`${attributes[keyName]?.laptop?.val}` + attributes[keyName]?.laptop?.unit,
      };
    }
    if('mobile' in attributes[keyName] ){
      oneD = { 
        ...oneD,
        [`--sm-${attrName}`]:`${attributes[keyName]?.mobile?.val}` + attributes[keyName]?.mobile?.unit,
      };
    }
  }
  return oneD;
}

function AlphaOneDCss(attributes, keyName, attrName="b"){
  let oneCss={};

  if(keyName in attributes  ){
    if('desktop' in attributes[keyName] ){
      oneCss["initial"] = { 
        [`${attrName}`]:`${attributes[keyName]?.desktop?.val}` + attributes[keyName]?.desktop?.unit,
      };
    }
    if('laptop' in attributes[keyName] ){
      oneCss["md"] = { 
        [`${attrName}`]:`${attributes[keyName]?.laptop?.val}` + attributes[keyName]?.laptop?.unit,
      };
    }
    if('mobile' in attributes[keyName] ){
      oneCss["sm"] = { 
        [`${attrName}`]:`${attributes[keyName]?.mobile?.val}` + attributes[keyName]?.mobile?.unit,
      };
    }
  }
  return oneCss;
}

function displayControl(hideOnDesktop=false, hideOnTablet=false, hideOnMobile=false){
  let oneCss={};

    if(hideOnDesktop ){
      oneCss["lg"] = { 
        [`display`]:`none`,
      };
    }
    if(hideOnTablet ){
      oneCss["md"] = { 
        [`display`]:`none`,
      };
    }
    if(hideOnMobile){
      oneCss["sm"] = { 
        [`display`]:`none`,
      };
    }
  return oneCss;
}

function AlphaOptionControl(attributes, keyName, defaultValue=false, prevKeyName=false){
  let optionCSS={};
  // let _kebabKeyName = camelToKebab(keyName);
  let _kebabKeyName = (prevKeyName?camelToKebab(prevKeyName):"")+"-"+ camelToKebab(keyName);
  if(keyName in attributes ){

      optionCSS = { 
        ...optionCSS,
        [`--${_kebabKeyName}`]:`${attributes[keyName]??""}`,
      };
  }else if(defaultValue){
    optionCSS = { [`--${_kebabKeyName}`]:defaultValue};
  }
  return optionCSS;  
}

function AlphaBorderStyleCSS(attributes, keyName, defaultValue=false){
  let CSS={};

  if(keyName in attributes ){

      CSS = { 
        ...CSS,
        [`border-style`]:`${attributes[keyName]??""}`,
      };
  }else if(defaultValue){
    CSS = { [`border-style`]:defaultValue};
  }
  return {["initial"]:CSS}; 
}

function CSS(styleName, value){
  let css={};
  if(styleName && value){
    css = {[styleName]:value}
    return {["initial"]:css};
  }
}


function AlphaTypographyControl(attributes, keyName, defaultValue=false){
  let typography={};
  let _kebabKeyName = camelToKebab(keyName);
  if(keyName in attributes ){
      let fontFamily = AlphaOptionControl(attributes[keyName], "fontFamily");
      typography = { 
        ...typography,
        ...AlphaOptionControl(attributes[keyName], "fontFamily", "", keyName),
        ...AlphaOneDControl(attributes[keyName], "fontSize", "", keyName),
        ...AlphaOptionControl(attributes[keyName], "fontWeight", "", keyName),
        ...AlphaOptionControl(attributes[keyName], "fontStyle", "", keyName),
        ...AlphaOptionControl(attributes[keyName], "fontTransform", "", keyName),
        ...AlphaOptionControl(attributes[keyName], "fontDecoration", "", keyName),
        ...AlphaOptionControl(attributes[keyName], "fontLineHeight", "", keyName),
        ...AlphaOptionControl(attributes[keyName], "fontLetterSpacing", "", keyName),
      }
  }else if(defaultValue){
    typography = {};
  }
  return typography;
}

function CssLengthValue(propDetails, defaultValue = 0){
  if("desktop" in propDetails){
    return `${propDetails?.desktop?.val??defaultValue}${propDetails?.desktop?.unit??"px"}`;
  }
  return `${propDetails?.val??defaultValue}${propDetails?.unit??""}`;
}

function CssBorderWidthValue(propDetails, defaultValue = [0, 0, 0, 0]){
  if("desktop" in propDetails){
    let { borderTop:top=defaultValue[0], borderRight:right=defaultValue[1], borderBottom:bottom=defaultValue[2], borderLeft:left=defaultValue[3], unit="px" } = propDetails.desktop;
    return {
     "borderWidth": `${top}${unit} ${right}${unit} ${bottom}${unit} ${left}${unit}`
    };
  }
}

function CssTypography(propDetails){
  const { fontFamily=false, fontSize={}, fontWeight=false, fontStyle=false, fontTransform=false,fontDecoration=false, fontLineHeight={}, fontLetterSpacing={} } = propDetails;
  

  const typography={
  };

  if( Object.keys(fontSize).length > 0 ){
    typography["font-size"] = CssLengthValue(fontSize, "14px");
  }
  if( fontFamily !== false && fontFamily !== "default" ){
    typography["font-family"] = fontFamily;
  }
  if( fontWeight !== false && fontWeight !== "default" ){
    typography["font-weight"] = fontWeight;
  }
  if( fontStyle !== false && fontStyle !== "default" ){
    typography["font-style"] = fontStyle;
  }
  if( fontTransform !== false && fontTransform !== "default" ){
    typography["font-transform"] = fontTransform;
  }
  if( fontDecoration !== false && fontDecoration !== "default" ){
    typography["text-decoration"] = fontDecoration;
  }
  if( Object.keys(fontLineHeight).length > 0 ){
    typography["line-height"] = CssLengthValue(fontLineHeight, "normal");
  }
  if( Object.keys(fontLetterSpacing).length > 0 ){
    typography["letter-spacing"] = CssLengthValue(fontLetterSpacing, "normal");
  }

  return { initial: typography};
}

function CssBackground(propDetails, defaultValue = ""){
  if(propDetails && ["type"] in propDetails && "gradient" == propDetails.type ){
    return{ initial: {
      "background-image":propDetails?.gradient??""
    }
  }
  }
  if( propDetails?.color ){
  return { initial: {
    "background-color": propDetails?.color
  }}
}
if( defaultValue ){
  return { initial: {
    "background-color": defaultValue
  }}
}
}

function CssZIndex(propDetails, defaultValue=1){
    return {
     initial:{ ["z-index"]:propDetails?.desktop?.val??defaultValue}
    }
}

function CssBorder(propDetails, defaultValue={"color": "#333", "style": "solid", "width": "2px" }){
  let _propDetails = propDetails??defaultValue;
  // console.log("propDetails: ", propDetails);
  return {
     initial:{ ["border"]:`${_propDetails?.width} ${_propDetails?.style} ${_propDetails?.color}`}
  }
}

function CssPropOneD(attributes, keyName, cb=(val)=>val){

  return { initial: {
      [`--${camelToKebab(keyName)}`]: cb(attributes?.[keyName])??0
    }}
}

function cssString(Arr){

  let css = "";
  if( Array.isArray(Arr) && Arr.length){
    let styleObj = Arr.reduce((acc, item)=>({...acc, ...item}), {});
    // console.log("Arr:", styleObj);
    for (const itemKey of Object.keys(styleObj)) {
      if(itemKey){
        css +=itemKey+":"+styleObj?.[itemKey]+";";
      }      
    }
  }
  return css;
}

function GenerateStyle(CssObj){
  let initialCss = "";
  let lgCss = "";
  let mdCss = "";
  let smCss = "";

  for (const selector of Object.keys(CssObj) ) {    
    initialCss +=selector+"{"+cssString(CssObj?.[selector]?.map(item=>item?.initial))+"}";

    let lgValue = cssString(CssObj?.[selector]?.map(item=>item?.lg));
    if(lgValue){
      lgCss +=selector+"{"+lgValue+"}";
    }
    let mdValue = cssString(CssObj?.[selector]?.map(item=>item?.md));
    if(mdValue){
      mdCss +=selector+"{"+mdValue+"}";
    }
    let smValue = cssString(CssObj?.[selector]?.map(item=>item?.sm));
    if(smValue){
      smCss +=selector+"{"+smValue+"}";
    }
  }
let _lgCss = lgCss?`@media (min-width: 769px){${lgCss}}`:"";
let _mdCss = mdCss?`@media (min-width: 641px) and (max-width: 768px ) {${mdCss}}`:"";
let _smCss = smCss?`@media (max-width: 640px){${smCss}}`:"";

let _compliedCss = `${initialCss} ${_lgCss} ${_mdCss} ${_smCss}`;

// console.log("_compliedCss: ", _compliedCss);

  return <style>{_compliedCss}</style>
}



export {AlphaOneDCss, AlphaFourDCss, displayControl, GenerateStyle, CssPropOneD, CssBorderWidthValue, CssZIndex, CssBorder, CssBackground,CssTypography, AlphaBackground, AlphaBackgroundCSS, AlphaOneDControl, AlphaOptionControl, AlphaBorderStyleCSS, AlphaTypographyControl, CSS };