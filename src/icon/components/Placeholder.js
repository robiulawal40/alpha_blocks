/**
 * WordPress Dependencies
 */
import { __ } from "@wordpress/i18n";
import { Placeholder as WPPlaceHolder, Button } from "@wordpress/components";
import { useSelect, useDispatch } from "@wordpress/data";
import { useBlockEditContext } from "@wordpress/block-editor";

/**
 * Custom import
 */
import { blockIcon } from "../icons/block-icon";
function Placeholder(props) {
	const { setLibraryOpen, setCustomInserterOpen } = props;
	return (
		<WPPlaceHolder
			icon={blockIcon}
			className="alpb_icon_placeholder"
			label={__("Icon", "alpb")}
			instructions={__(
				"Choose an icon from the library or insert custom svg",
				"alpb"
			)}
		>
			<div className="alpb_placeholder_inner_wrapper">
				<Button variant="primary" onClick={() => setLibraryOpen(true)}>
					{__("Icon Library", "alpb")}
				</Button>
				<Button variant="tertiary" onClick={() => setCustomInserterOpen(true)}>
					{__("Insert Custom SVG", "alpb")}
				</Button>
			</div>
		</WPPlaceHolder>
	);
}

export default Placeholder;
