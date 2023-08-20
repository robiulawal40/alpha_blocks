/**
 * WordPress Dependencies
 */
import { __ } from "@wordpress/i18n";
import { Panel, PanelBody, RangeControl } from "@wordpress/components";
import { InspectorControls, HeightControl, PanelColorSettings } from "@wordpress/block-editor";
/**
 * Custom Imports
 */
import ColorSettings from "./components/ColorSettings";

import { ColorPalette } from '@wordpress/components';
import { useState } from '@wordpress/element';




function CustomInspectorControls(props) {
	const {
		setAttributes,
		attributes: { size, iconRotation },
	} = props;

	const [ color, setColor ] = useState ( '#f00' )
	const [ bg_color, setBackgroundColor ] = useState ( '#f00' )
	const colors = [
			{ name: 'red', color: '#f00' },
			{ name: 'white', color: '#fff' },
			{ name: 'blue', color: '#00f' },
	];

	const onChangeIconColor = (color)=>{
		setColor(color);
	}
	const onChangeBgIconColor = (bg_color)=>{
		setBackgroundColor(bg_color);
	}

	return (
		<>
			<InspectorControls>
				<Panel header="Icon Size Setting">
				<PanelBody>
					<HeightControl
						value={size}
						label={__("Icon Size", "alpb")}
						onChange={(newSize) => setAttributes({ size: newSize })}
					/>
					<RangeControl
						max={180}
						min={-180}
						allowReset
						resetFallbackValue={0}
						value={iconRotation}
						// defaultValue={0}
						label={__("Rotation", "alpb")}
						onChange={(newSize) => setAttributes({ iconRotation: newSize })}
					/>
				</PanelBody>
				</Panel>



			<PanelColorSettings 
				label="Icon Color Settings"
				colorSettings={
					[
						{
							label:__("Icon Color", "alpb"),
							value:color,
							onChange:onChangeIconColor
						},
						{
							label:__("Icon Background Color", "alpb"),
							value:bg_color,
							onChange:onChangeBgIconColor
						}
					]
				}
				
				disableCustomColors={false}
			/>



			</InspectorControls>
			<InspectorControls group="color">
				<ColorSettings />
			</InspectorControls>
		</>
	);
}
export default CustomInspectorControls;
