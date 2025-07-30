
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
// import './editor.scss';
import Inspector from './inspector';
import { attributesToJSON } from '../functions';
import { useRef, useEffect, useState } from '@wordpress/element'
import {Button} from '@wordpress/components'
import { useSelect } from '@wordpress/data';
import HeroWrapper from '../html/src/hero/HeroWrapper';

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

const blockProps = useBlockProps();
const contentRef = useRef(null);


useEffect(()=>{
	if(contentRef.current && Alpine){	
		if( typeof Alpine?.$data(contentRef.current)?.updateAttributes === 'function'){
			Alpine?.$data(contentRef.current)?.updateAttributes(attributes);			
		}else{	
		}
	}
}, [attributes]);

	return (
		<div  { ...useBlockProps({ className:"alpha-blocks" }) }  >		
		
			{isSelected && <Inspector {...props} />}

			<div className="alpha-accordions-wrapper">						
				<HeroWrapper />
			</div>
		</div>
	);
}