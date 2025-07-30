
import AccordionItem from "./AccordionItem";
import ItemAppender from "../ItemAppender";
import { RichText, InnerBlocks  } from '@wordpress/block-editor';
import Style from "./Style";

export default function Accordion({attributes, setAttributes, style, wrapperId, contentRef, clientId}) {

  let innerTemplate =[[ 'alphablock/accordion-item', {}], [ 'alphablock/accordion-item', {}]]

  return (
    <>
      <Style attributes={attributes} wrapperId={wrapperId} />
      <div
      x-data="accordions"
      className={`alpha-accordions-2 gap-control-[40px]`}
      id="alpha-accordions-2"
      ref={contentRef}
      data-attributes={JSON.stringify(attributes)}
    >
      {attributes?.isHTML && attributes?.accordionsContent?.map((content, index)=>(<AccordionItem key={index} index={index} accordionItem={content?.accordionItem} accordionContent={content?.accordionContent} attributes={attributes} setAttributes={setAttributes} />))}   

    <InnerBlocks
       allowedBlocks={['alphablock/accordion-item']}
       template={innerTemplate}
       renderAppender={ () =>
            <ItemAppender
                isDefault
                isLarge
                buttonText="Add Block"
                allowedBlock="alphablock/accordion-item"
                clientId={ clientId }
            /> }
    />

    </div>    
   </>
  );
}