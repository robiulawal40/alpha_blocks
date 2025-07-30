
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
// import './editor.scss';
import Inspector from './inspector';
import Accordion from './Accordion';
import { attributesToJSON } from '../functions';
import { useRef, useEffect, useState } from '@wordpress/element'
import {Button} from '@wordpress/components'
import { useSelect } from '@wordpress/data';
import HeroWrapper from '../html/src/hero/HeroWrapper';
import Accordion2 from '../html/src/accordion/Accordion';
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
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

	const style = {
		'--accordion-padding-y': '20px',
		'--accordion-padding-x': '20px',
		'--accordion-space-y':'0px',
};
const blockProps = useBlockProps( { style: style } );
const contentRef = useRef(null);


useEffect(()=>{
	if(contentRef.current && Alpine){	
		if( typeof Alpine?.$data(contentRef.current)?.updateAttributes === 'function'){
			Alpine?.$data(contentRef.current)?.updateAttributes(attributes);			
		}else{	
		}
	}
}, [attributes]);

	// const isSelectedOrChildSelected = useSelect((select) => {
	// 		const { isBlockSelected, hasSelectedInnerBlock } =
	// 				select('core/block-editor');
	// 		return (
	// 				isBlockSelected(clientId) ||
	// 				hasSelectedInnerBlock(clientId, true) 
	// 		);
	// }, [clientId]);

	return (
		<div  { ...useBlockProps({ className:"alpha-blocks" }) }  >		
		
			{isSelected && <Inspector {...props} />}

			<div className="alpha-accordions-wrapper">						
				<Accordion2 attributes={attributes} setAttributes={setAttributes} style={blockProps?.style} wrapperId = {blockProps?.id} contentRef={contentRef} clientId={clientId}/>
			</div>
			{/* {attributesToJSON(attributes)} */}
		</div>
	);
}