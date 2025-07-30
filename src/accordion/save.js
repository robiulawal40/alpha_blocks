

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import Style from './Accordion/Style';

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

		const style = {
		'--accordion-padding-y': '20px',
		'--accordion-padding-x': '20px',
		'--accordion-space-y':'0px',
};
// const blockProps = useBlockProps.save( {  id:'alpha-block-' + Math.random().toString(36).substring(2, 8), style: style });
const blockProps = useBlockProps.save( {  id:'alpha-block-45', style: style });

console.log("blockProps: ", blockProps);

	return (
		<div  { ...blockProps }  >		
				<div className="alpha-accordions-wrapper">
					<Style attributes={attributes} wrapperId={blockProps?.id}/>
					<div
					x-data="accordions"
					className={`alpha-accordions-2`}
					data-attributes={JSON.stringify(attributes)}
				>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}