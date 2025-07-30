import React from 'react'
import { AlphaBackgroundCSS, AlphaBorderStyleCSS,  AlphaFourDCss, AlphaOneDControl, AlphaOneDCss, displayControl, CSS, CssBackground, CssBorder, CssBorderWidthValue, CssPropOneD, CssTypography, CssZIndex,  GenerateStyle } from "../../functions/Css";

function Style({attributes, wrapperId="alpha-accordions-wrapper"}) {


   let CssObj = {
  [`#${wrapperId}`]:[displayControl(attributes?.hideOnDesktop, attributes?.hideOnTablet, attributes?.hideOnMobile)],
  [`#${wrapperId} .alpha-accordions-2`]:[
    CssBackground(attributes?.containerNormalBackground),
    AlphaBorderStyleCSS(attributes, "containerNormalBorderStyle"),
    CssZIndex(attributes?.zIndex),
    AlphaFourDCss(attributes, "spacingPadding", "padding"),
    AlphaFourDCss(attributes, "spacingMargin", "margin"),
    AlphaFourDCss(attributes, "containerNormalBorderRadius", "border-radius", ["border-top-left-radius","border-top-right-radius", "border-bottom-right-radius",    "border-bottom-left-radius" ]),
    CssBorder(attributes?.containerNormalBorder),
    CssPropOneD(attributes, "animation"),    
  ],
  [`#${wrapperId} .alpha-accordions-2:hover`]:[
    attributes?.changeBackgroundBorderOnHover && CssBackground(attributes?.containerHoverBackground),
    attributes?.changeBackgroundBorderOnHover && CssBorder(attributes?.containerHoverBorder)
  ],
  [`#${wrapperId} .alpha-accordions-2 .alpha-accordion-item`]:[
    AlphaOneDCss(attributes, "containerNormalRowsGap", "margin-bottom"),
  ],
  [`#${wrapperId} .alpha-accordions-2 .alpha-accordion-item:last-child, #${wrapperId} .alpha-accordions-2 .block-editor-block-list__layout > .wp-block-alphablock-accordion-item:last-child,#${wrapperId} .alpha-accordions-2 .block-editor-block-list__layout > .wp-block-alphablock-accordion-item:nth-last-child(2)`]:[
   {"initial":{"margin-bottom":"0px", "border-bottom":"1px solid"}},
  ],
  [`#${wrapperId} .alpha-accordions-2 .alpha-accordion-head`]:[
    CssTypography(attributes?.questionTypography),
    AlphaFourDCss(attributes, "questionPadding", "padding"),
    CssPropOneD(attributes, "iconAlignment", v=>(v=="right"?"row":"row-reverse")),
    CSS("color", attributes?.questionTextColor?.color),
    CssBackground(attributes?.questionBackground)
  ],
  [`#${wrapperId} .alpha-accordions-2 .alpha-accordion-content`]:[
    CssTypography(attributes?.answerTypography),
    AlphaFourDCss(attributes, "answerPadding", "padding"),
    CSS("color", attributes?.answerTextColor?.color),
    CssBackground(attributes?.answerBackground)
  ],
  [`#${wrapperId} .alpha-accordions-2 .alpha-icon`]:[
    AlphaFourDCss(attributes, "iconRadius", "border-radius", ["border-top-left-radius","border-top-right-radius", "border-bottom-right-radius",    "border-bottom-left-radius" ]),
    CssBorder(attributes?.iconBorder),
    AlphaOneDCss(attributes, "iconSize", "width" ),
    AlphaOneDCss(attributes, "iconSize", "height" ),
    CssBackground(attributes?.iconBackgroundColor),
    
    AlphaOneDCss(attributes, "iconPadding", "padding"),
    (attributes?.iconAlignment == "right") ? AlphaOneDCss(attributes, "gapIconQuestion", "margin-left" ) : AlphaOneDCss(attributes, "gapIconQuestion", "margin-right" ),
  ],
  [`#${wrapperId} .alpha-accordions-2 .alpha-icon svg`]:[
    CSS("fill", attributes?.iconColor?.color),
  ]
 };
//  console.log("CssObj: ", CssObj);

  return GenerateStyle(CssObj)
}

/* From Laptop Version */

export default Style