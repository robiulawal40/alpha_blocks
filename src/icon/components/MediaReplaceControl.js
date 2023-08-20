/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
	MenuGroup,
	MenuItem,
	DropdownMenu,
	ToolbarDropdownMenu,
} from "@wordpress/components";
import { code } from "@wordpress/icons";
import { blockIcon } from "../icons/block-icon";

function IconReplaceControl({ onReset, onLibraryOpen, onCustomInserterOpen }) {
	return (
		<DropdownMenu
			icon=""
			popoverProps={{
				className: "outermost-alpb__replace-popover is-alternate",
			}}
			text={__("Replace", "alpb")}
		>
			{({ onClose }) => (
				<>
					<MenuGroup>
						<MenuItem
							onClick={() => {
								onLibraryOpen();
								onClose(true);
							}}
							icon={blockIcon}
						>
							{__("Open Icon Library", "alpb")}
						</MenuItem>

						<MenuItem
							onClick={() => {
								onCustomInserterOpen();
								onClose(true);
							}}
							icon={code}
						>
							{__("Change Custom SVG", "alpb")}
						</MenuItem>
					</MenuGroup>
					<MenuGroup>
						<MenuItem
							onClick={() => {
								onReset();
								onClose(true);
							}}
						>
							{__("Clear icon", "alpb")}
						</MenuItem>
					</MenuGroup>
				</>
			)}
		</DropdownMenu>
	);
}
export default IconReplaceControl;
