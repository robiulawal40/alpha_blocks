import React from "react";

import { ultimateIcons } from "./icons";

function Icon({name="plus", xBind="closeItem", style={width:"50px", height:"50px", border:"1px solid", borderRadius:"5px"} }) {

  const iconNameToSVG = iconName => ultimateIcons.map(types => types.icons)?.flat()?.find((ic) => ic.name === iconName)?.icon ?? "";

  return (<span className="alpha-icon" x-bind={xBind}>
            {iconNameToSVG(name)} 
          </span>);
}

export default Icon;
