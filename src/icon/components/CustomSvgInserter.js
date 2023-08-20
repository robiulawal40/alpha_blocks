/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
	Button,
	Modal,
	Notice,
	RangeControl,
	TextareaControl,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import { isValidSVG } from "../utils";

/**
 * Internal dependencies
 */

export default function CustomInserterModal(props) {
	const {
		isCustomInserterOpen,
		setCustomInserterOpen,
		attributes,
		setAttributes,
	} = props;
	const [iconSize, setIconSize] = useState(100);
	const [customIcon, setCustomIcon] = useState(attributes.svgIcon ?? "");

	const isSVG = isValidSVG(customIcon);
	function insertCustomIcon() {
		if (isSVG) {
			setAttributes({
				icon: {},
				svgIcon: customIcon,
			});
			setCustomInserterOpen(false);
		}
	}

	return (
		<Modal
			className="alpb_custom_svg_inserter__modal"
			title={__("Custom Icon", "alpb")}
			onRequestClose={() => setCustomInserterOpen(false)}
			isFullScreen
		>
			<div className="alpb_custom_svg_inserter">
				<div className="alpb_custom_svg_inserter__content">
					<TextareaControl
						label={__("Custom icon", "alpb")}
						hideLabelFromVision={true}
						value={customIcon}
						onChange={(newValue) => {
							setCustomIcon(newValue);
						}}
						placeholder={__(
							"Paste the SVG code for your custom icon.",
							"alpb"
						)}
					/>
				</div>
				<div className="alpb_custom_svg_inserter__sidebar">
					<div className="icon-preview">
						<div className={classnames("icon-preview__window")}>
							{isSVG && (
								<div
									style={{ width: iconSize + "px", height: iconSize + "px" }}
									dangerouslySetInnerHTML={{ __html: customIcon }}
								></div>
							)}
						</div>
						<div className="alpb_icon_controls">
							<div className="alpb_icon_controls__size">
								<span>{__("Preview size", "alpb")}</span>
								<RangeControl
									min={24}
									max={400}
									initialPosition={100}
									withInputField={false}
									onChange={(value) => setIconSize(value)}
								/>
							</div>
						</div>
						{customIcon && !isSVG && (
							<Notice status="error" isDismissible={false}>
								{__(
									"The icon you inserted is not a valid SVG format or contains non-SVG elements.",
									"alpb"
								)}
							</Notice>
						)}
					</div>
					<div className="icon-insert-buttons">
						<Button
							label={__("Clear custom icon", "alpb")}
							isSecondary
							disabled={!customIcon}
							onClick={() => setCustomIcon("")}
						>
							{__("Clear", "alpb")}
						</Button>
						<Button
							label={__("Insert custom icon", "alpb")}
							isPrimary
							disabled={!customIcon || !isSVG}
							onClick={insertCustomIcon}
						>
							{__("Insert custom icon", "alpb")}
						</Button>
					</div>
				</div>
			</div>
		</Modal>
	);
}
