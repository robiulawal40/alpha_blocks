

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

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


const blockProps = useBlockProps.save( {  id:'alpha-block-45'});

	return (
		<div  { ...blockProps }  >		
					Hero Section is Here
		</div>
	);
}