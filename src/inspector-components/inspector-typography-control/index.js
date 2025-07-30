import {__} from '@wordpress/i18n'
import { useState, useEffect } from '@wordpress/element'
import {
  Placeholder,
  ButtonGroup,
  Button,
  Dashicon,
  Modal,
  TabPanel,
  TabList,
  Tab,
  PanelRow,
  PanelColumn,
  RangeControl,
  BaseControl,
  Popover,
  ToggleControl
} from "@wordpress/components";
import InspectorResponsiveLabel from '../inspector-responsive-label';
import InspectorFourDimension from '../inspector-four-dimension';
import InspectorSelectRow from '../inspector-select-row';
import InspectorResponsiveRangeControl from '../inspector-responsive-range-control';
import fonts from './fonts.json'
import { getFontWeight, getFontsName, getFontStyle } from '../../functions';
import InspectorSearchSelectRow from '../inspector-search-select-row';


const InspectorTypographyControl = props => {
  const { label, options, value, onChange=()=>{} } = props;
  const [ popoverAnchor, setPopoverAnchor ] = useState();
  const [ openTypography, setOpenTypography ] = useState(false);
  const [ fontFamily, setFontFamily ] = useState(value?.fontFamily);
  const [ fontSize, setFontSize ] = useState(value?.fontSize);
  const [ fontWeight, setFontWeight ] = useState(value?.fontWeight);
  const [ fontStyle, setFontStyle ] = useState(value?.fontStyle);
  const [ fontTransform, setFontTransform ] = useState(value?.fontTransform);
  const [ fontDecoration, setFontDecoration ] = useState(value?.fontDecoration);
  const [ fontLineHeight, setFontLineHeight ] = useState(value?.fontLineHeight);
  const [ fontLetterSpacing, setFontLetterSpacing ] = useState(value?.fontLetterSpacing);

  // console.log("fonts: ", getFontsName(fonts));

  useEffect(() => {
    onChange({...value, fontFamily, fontSize, fontWeight, fontStyle, fontTransform, fontDecoration, fontLineHeight, fontLetterSpacing});
  }, [fontFamily, fontSize, fontWeight, fontStyle, fontTransform, fontDecoration, fontLineHeight, fontLetterSpacing]);

  const onReset = ()=>{
    // console.log("Reset all typography", props?.defaultAttributes );

    setFontFamily(props?.defaultAttributes?.fontFamily);
    setFontStyle(props?.defaultAttributes?.fontStyle);
    setFontWeight(props?.defaultAttributes?.fontWeight);
    setFontTransform(props?.defaultAttributes?.fontTransform);
    setFontDecoration(props?.defaultAttributes?.fontDecoration);
    // setFontSize(props?.defaultAttributes?.fontSize);
    // setFontLineHeight(props?.defaultAttributes?.fontLineHeight);
    // setFontLetterSpacing(props?.defaultAttributes?.fontLetterSpacing);
  }
  
  return (
    <>
    <BaseControl
      label={label??"Default"}
      className="[&_div]:flex [&_div]:items-center [&_div]:justify-between"
    >
      <Button  onClick={()=>setOpenTypography(ot => !ot)} className="shadow-sm border-gray-200 border rounded-full min-w-8 size-8" icon="edit"></Button>
  </BaseControl>   

  <BaseControl ref={ setPopoverAnchor } className="flex"> 
    <Popover.Slot />
  </BaseControl>

  {openTypography && 
    <Popover placement="bottom-left" className="shadow-md w-full flex justify-center *:w-[95%] *:p-4"  anchor={ popoverAnchor } 
    onFocusOutside={(event)=>{
      const isInsidePopover = event.target.classList.contains('components-custom-select-control__item');
      // console.log("onFocusOutside event, isInsidePopover", event, isInsidePopover); 
      if(isInsidePopover){
        setOpenTypography(true);
      }else{
        setOpenTypography(false);
      }
      }}> 

        <BaseControl>
          <InspectorSearchSelectRow options={[ {label:"Default", value:"default"}, ...getFontsName(fonts) ]} label={__("Font Family", "alpha")} value={fontFamily} onChange={(val)=>setFontFamily(val)} onReset={onReset} />
        </BaseControl>

        <BaseControl>
          <InspectorSelectRow options={[ {label:"Default", value:"default"}, ...getFontStyle(fonts,fontFamily ) ]} label={__("Style", "alpha")} value={value?.fontStyle} onChange={(val)=>setFontStyle(val)} />
        </BaseControl>

        <BaseControl>
          <InspectorSelectRow options={[ {label:"Default", value:"default"}, ...getFontWeight(fonts,fontFamily, fontStyle ) ]} label={__("Weight", "alpha")} value={value?.fontWeight} onChange={(val)=>setFontWeight(val)} />
        </BaseControl>

        <BaseControl>
          <InspectorSelectRow options={[ 
            { label: "inherit", value: "Inherit" },
            { label: "none", value: "None" },
            { label: "capitalize", value: "Capitalize" },
            { label: "uppercase", value: "Uppercase" },
            { label: "lowercase", value: "Lowercase" },
            { label: "initial", value: "Initial" }
            ]} label={__("Transform", "alpha")} value={value?.fontTransform} onChange={(val)=>setFontTransform(val)} />
        </BaseControl>

        <BaseControl>
          <InspectorSelectRow options={[ 
              { label: "inherit", value: "Inherit" },
              { label: "none", value: "None" },
              { label: "underline", value: "Underline" },
              { label: "overline", value: "Overline" },
              { label: "line-through", value: "Line Through" },
              { label: "underline overline", value: "Underline Overline" },
              { label: "underline line-through", value: "Underline Line Through" },
              { label: "overline line-through", value: "Overline Line Through" },
              { label: "underline overline line-through", value: "All" },              
              { label: "initial", value: "Initial" },
              { label: "revert", value: "Revert" },
              { label: "unset", value: "Unset" }
           ]} label={__("Decoration", "alpha")} value={value?.fontDecoration} onChange={(val)=>setFontDecoration(val)} />
        </BaseControl>

        <BaseControl>
          <InspectorResponsiveRangeControl label={__("Font Size", "alpha")} defaultAttributes={props?.defaultAttributes?.fontSize} value={value?.fontSize} onChange={(val)=>setFontSize(val)}/>
        </BaseControl>

        <BaseControl>
          <InspectorResponsiveRangeControl label={__("Line Height", "alpha")} defaultAttributes={props?.defaultAttributes?.fontLineHeight} value={value?.fontLineHeight} onChange={(val)=>setFontLineHeight(val)} />
        </BaseControl>

        <BaseControl>
          <InspectorResponsiveRangeControl label={__("Letter Spacing", "alpha")} defaultAttributes={props?.defaultAttributes?.fontLetterSpacing} value={value?.fontLetterSpacing} onChange={(val)=>setFontLetterSpacing(val)}/>
        </BaseControl>

    </Popover>
    }  
    
  </>            
  );
}

export default InspectorTypographyControl;