
import { useSelect } from '@wordpress/data';
import { useBlockProps, RichText, store as blockEditorStore } from '@wordpress/block-editor';
import AccordionItem from './AccordionItem/AccordionItem';
import Icon from "../Icon";

export default function Save(props) {
		const {
		attributes,
		setAttributes,
		className,
		isSelected,
		onReplace,
		mergeBlocks,
		clientId,
		context,
	} = props;
const blockProps = useBlockProps.save({ className:"alpha-accordion-item" });

	return (
		<div  { ...blockProps }  x-bind="accordionItem" >		
			    <div
            className="alpha-accordion-head"             
            role="button"
            aria-controls="accordion-panel-1"
            x-bind="accordionHead"
          >
						<RichText.Content tagName={attributes?.itemTitleTag??"span"} value={  attributes?.itemTitle??""} />
            <div>
              <Icon name={attributes?.inactiveIconName??"chevron-up"} xBind="closeItem" /> 
              <Icon name={attributes?.activeIconName??"chevron-down"} xBind="openItem" /> 
            </div>
          </div>        
        <div
          className="alpha-accordion-content"
          x-bind="accordionContent"
        >
						<RichText.Content tagName="p" value={  attributes?.itemContent??""} />
        </div>
		</div>
	);
}