import React from "react";
import { RichText, InnerBlocks  } from '@wordpress/block-editor';
import Icon from "../../Icon";



function AccordionItem({activeIconName, inactiveIconName,attributes, isSelected, setAttributes=()=>{}}) {

  console.log("Accordion Item rendered");
  const { isItemTitleSelected} = attributes;


  return <><div
            className="alpha-accordion-head"             
            role="button"
            aria-controls="accordion-panel-1"
            x-bind="accordionHead"            
          >
            <RichText
              tagName={attributes?.itemTitleTag}
              value={ attributes?.itemTitle??"" }
              placeholder={"Write Text Here..."}
              onChange={(value)=>{
                setAttributes({...attributes, itemTitle: value })
              }}
              identifier={"itemTitle"}
              isSelected={isItemTitleSelected}
            />
            <div>
              <Icon name={inactiveIconName??"chevron-down"} xBind="closeItem" /> 
              <Icon name={activeIconName??"chevron-up"} xBind="openItem" /> 
            </div>
          </div>        
        <div
          className="alpha-accordion-content"
          x-bind="accordionContent"
        >
          <RichText
              tagName="p"
              value={ attributes?.itemContent??"" }
              onChange={(value)=>{
               setAttributes({...attributes, itemContent: value })
              }}
              placeholder={"Write Text Here..."}                         
            />
        </div></>;
}

export default AccordionItem;
