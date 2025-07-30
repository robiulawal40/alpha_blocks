import React from 'react'
import { AlphaBackgroundCSS, AlphaBorderStyleCSS, AlphaFourDControl, AlphaFourDCss, AlphaOneDControl, AlphaOneDCss, CssBackground, CssBorderWidthValue, CssPropOneD, CssTypography, CssZIndex, GenerateCSSFourD, GenerateStyle } from "../functions/Css";

function Style({attributes}) {


   let CssObj = {
  [".alpha-accordions-2"]:[
    CssBackground(attributes?.containerNormalBackground),
    AlphaBorderStyleCSS(attributes, "containerNormalBorderStyle"),
    CssZIndex(attributes?.zIndex),
    AlphaFourDCss(attributes, "spacingPadding", "padding"),
    AlphaFourDCss(attributes, "containerNormalBorderWidth", "border"),
    AlphaFourDCss(attributes, "spacingMargin", "margin"),
    AlphaFourDCss(attributes, "containerNormalBorderRadius", "border-radius", ["border-top-left-radius","border-top-right-radius", "border-bottom-right-radius",    "border-bottom-left-radius" ]),
    // AlphaOneDCss(attributes, "containerNormalRowsGap", "--lg-gap"),
    CssPropOneD(attributes, "hideOnDesktop"),
    CssPropOneD(attributes, "hideOnTablet"),
    CssPropOneD(attributes, "hideOnMobile"),
    CssPropOneD(attributes, "animation"),
  ],
  [".alpha-accordions-2 .alpha-accordion-item"]:[
    AlphaOneDCss(attributes, "containerNormalRowsGap", "margin-bottom"),
  ],
  [".alpha-accordions-2 .alpha-accordion-item:last-child, .alpha-accordions-2 .block-editor-block-list__layout > .wp-block-alphablock-accordion-item:last-child,.alpha-accordions-2 .block-editor-block-list__layout > .wp-block-alphablock-accordion-item:nth-last-child(2)"]:[
   {"initial":{"margin-bottom":"0px", "border-bottom":"1px solid"}},
  ],
  [".alpha-accordions-2 .alpha-accordion-head"]:[
    CssTypography(attributes?.questionTypography),
    AlphaFourDCss(attributes, "questionPadding", "padding"),
    CssPropOneD(attributes, "iconAlignment", v=>(v=="right"?"row":"row-reverse"))
  ],
  [".alpha-accordions-2 .alpha-accordion-content"]:[
    CssTypography(attributes?.answerTypography),
    AlphaFourDCss(attributes, "answerPadding", "padding")
  ],
  [".alpha-accordions-2 .alpha-icon"]:[
    AlphaFourDCss(attributes, "iconRadius", "border-radius", ["border-top-left-radius","border-top-right-radius", "border-bottom-right-radius",    "border-bottom-left-radius" ]),
    AlphaFourDCss(attributes, "iconBorderWidth", "border-width"),
  ]
 };
 console.log("CssObj: ", CssObj);

  return GenerateStyle(CssObj)
}

/* From Laptop Version */

export default Style