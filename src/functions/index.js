const sortObject = (unsorted)=>{
  const sorted = Object.fromEntries(
    Object.entries(unsorted).sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
  );
  return sorted;
}

const attributesToJSON = (_attributes)=>{
  // console.log("attributesToJSON", _attributes);
  const attributes = sortObject(_attributes);
  let attJSON = {};
  for( const attKey in attributes ){
    // console.log("attKey: ", attKey);
    attJSON[attKey] = {
      "type": typeof attributes[attKey],
      "default":attributes[attKey]
    }
  }
  // console.log("attJSON:", attJSON);
  
  return <div>
    <br />
    <button onClick={ ()=>{ navigator.clipboard.writeText(JSON.stringify(attJSON, "", 2) ).then(() => alert('Copied!')) }} className="border border-gray-300 text-gray-700 px-8 py-2 rounded hover:bg-gray-100">Copy</button>
    <pre>{ 
    JSON.stringify(attJSON, "", 2) 
    }</pre></div>;
}

const getFontsName = (fonts={})=>{
  return Object.keys(fonts).map((v)=>({label:v, value:v}));
}

const getFontStyle = (fonts={}, font="")=>{
  if( fonts?.[font]?.v ){
    return Object.keys(fonts[font]["v"])?.map(val=>({value:val, label:val}));
  }
  return [{value:"default", label:"default"}];
}

const getFontWeight = (fonts={}, font="", style=false)=>{
  if( fonts?.[font]?.v ){
  if(!style){
    style = Object.keys(fonts[font]['v'])[0];
  }
  return fonts[font]['v']?.[style]?.map(val=>({value:val, label:val}))??[];
  }
  return [{value:"normal", label:"normal"}];
}
export {attributesToJSON, getFontsName, getFontStyle, getFontWeight};