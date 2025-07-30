import React from "react";
import { RichText, InnerBlocks  } from '@wordpress/block-editor';
import Icon from "../../Icon";



function AccordionItem({index, accordionItem="", accordionContent="",attributes, setAttributes=()=>{}}) {

  const updateItem = (index, accordionContent, accordionItemTitle=false, accordionItemContent=false)=>{

      let newAccordionContent = [...accordionContent];

      if(accordionItemTitle){
        newAccordionContent[index].accordionItem=accordionItemTitle??"";
      }

      if(accordionItemContent){
        newAccordionContent[index].accordionContent=accordionItemContent??"";
      }

      return newAccordionContent;
  }

  return <div className="alpha-accordion-item" x-bind="accordionItem">
          <div
            className="alpha-accordion-head"             
            role="button"
            aria-controls="accordion-panel-1"
            x-bind="accordionHead"
          >
            <RichText
              tagName="h3"
              value={ accordionItem }
              placeholder={"Write Accordion Title..."}
              onChange={(value)=>{
                setAttributes({...attributes, accordionsContent:[...updateItem(index, attributes.accordionsContent, value)] })
              }}
              inlineToolbar={ true }
            />
            <div>
              <Icon name={attributes?.inactiveIcon?.iconName??"chevron-down"} xBind="closeItem"/> 
              <Icon name={attributes?.activeIcon?.iconName??"chevron-up"} xBind="openItem" /> 
            </div>
          </div>        
        <div
          className="alpha-accordion-content"
          x-bind="accordionContent"
        >
          <RichText
              tagName="p"
              value={ accordionContent }
              onChange={(value)=>{
                setAttributes({...attributes, accordionContent:[...updateItem(index, attributes.accordionsContent,false, value)] })
              }}
              placeholder={"Write Accordion Content..."}
              inlineToolbar={ true }
            />
        </div>
      </div>;
}

export default AccordionItem;
