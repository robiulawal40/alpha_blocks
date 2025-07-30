
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useBlockProps, RichText, store as blockEditorStore } from '@wordpress/block-editor';

import AccordionItem from './AccordionItem/AccordionItem';
import { attributesToJSON } from '../functions';
import { InspectorTabs } from '../inspector-components';
import { useRef, useEffect, useState } from '@wordpress/element'
import {Button} from '@wordpress/components'
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
		isHovered,
		onReplace,
		mergeBlocks,
		clientId,
		context,
	} = props;

const blockProps = useBlockProps();

    const parentAttributes = useSelect((select) => {
        const editor = select(blockEditorStore);
        const parentId = editor.getBlockHierarchyRootClientId(clientId);
        if (!parentId) return null;

        const parentBlock = editor.getBlock(parentId);

        return parentBlock?.attributes || null;
    }, [clientId]);

		useEffect(() => {
        if (parentAttributes ) {
            setAttributes({...attributes, activeIconName:parentAttributes?.activeIcon?.iconName??"", inactiveIconName: parentAttributes?.inactiveIcon?.iconName??"", itemTitleTag:parentAttributes?.questionTag??"span" });
        }
    }, [parentAttributes]);

	return (
		<div { ...useBlockProps({ className:"alpha-accordion-item" }) } x-bind="accordionItem">						
				<AccordionItem attributes={attributes} setAttributes={setAttributes} activeIconName={attributes?.activeIconName??"chevron-down"} inactiveIconName={attributes?.inactiveIconName??"chevron-up"}/>
		</div>

	);
}