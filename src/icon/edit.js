/**
 * WordPress Dependencies
 */
import { isEmpty } from "lodash";
import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import { Modal } from "@wordpress/components";
import './editor.scss';
/**
 * Custom Imports
 */
import { ultimateIcons } from "./icons";
import { getStyles } from "./get-styles";
import CustomInspectorControls from "./inspector";
import CustomBlockControls from "./block-controls";
import Placeholder from "./components/Placeholder";
import IconsLibrary from "./components/icon-library";
import CustomInserterModal from "./components/CustomSvgInserter";
import { useBlockProps } from '@wordpress/block-editor';

function Edit(props) {
	const [isLibraryOpen, setLibraryOpen] = useState(false);
	const [isCustomInserterOpen, setCustomInserterOpen] = useState(false);
	const {
		className,
		setAttributes,
		attributes: { icon, svgIcon },
	} = props;
	const hasIcon = !isEmpty(icon);
	const hasSVGIcon = !isEmpty(svgIcon);

	const finalIcon = hasIcon
		? ultimateIcons
				.find((obj) => obj.type === icon?.type)
				?.icons?.find((ic) => ic.name === icon.iconName)?.icon ?? ""
		: svgIcon;

	const blockStyles = getStyles(props.attributes);

	const customInserterProps = {
		attributes: props.attributes,
		setAttributes,
		isCustomInserterOpen,
		setCustomInserterOpen,
	};

	// console.log("blockStyles: ", blockStyles);

	return (
		<div {...useBlockProps()}  style={blockStyles}  >
			{!hasIcon && !hasSVGIcon && (
				<Placeholder
					setCustomInserterOpen={setCustomInserterOpen}
					setLibraryOpen={setLibraryOpen}
				/>
			)}
			{hasSVGIcon && !hasIcon && (
				<div
					className="alpb_icon"
					dangerouslySetInnerHTML={{ __html: finalIcon }}
				></div>
			)}
			{hasIcon && <div className="alpb_icon" onClick={() => setLibraryOpen(true)} >{finalIcon}</div>}
			{isLibraryOpen && (
				<Modal
					isFullScreen
					className="alpb_icons_library_modal"
					title={__("Icons", "alpb")}
					onRequestClose={() => setLibraryOpen(false)}
				>
					<IconsLibrary
						value={finalIcon?.name}
						onSelect={(newIcon) => {
							setAttributes({ icon: newIcon, svgIcon: "" });
							setLibraryOpen(false);
						}}
					/>
				</Modal>
			)}
			{isCustomInserterOpen && <CustomInserterModal {...customInserterProps} />}
			{(hasIcon || hasSVGIcon) && (
				<CustomBlockControls
					onReset={() =>
						setAttributes({
							icon: {},
							svgIcon: "",
						})
					}
					onLibraryOpen={() => setLibraryOpen(true)}
					onCustomInserterOpen={() => setCustomInserterOpen(true)}
				/>
			)}
			<CustomInspectorControls {...props} />
		</div>
	);
}
export default Edit;
