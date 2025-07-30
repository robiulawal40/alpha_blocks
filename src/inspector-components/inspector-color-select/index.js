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
  ColorPalette,
  ColorPicker,
  ColorIndicator,
  Popover
} from "@wordpress/components";
import InspectorResponsiveLabel from '../inspector-responsive-label';
import InspectorSelectButton from '../inspector-select-button';
import { PanelColorSettings, __experimentalColorGradientControl as ColorGradientControl } from '@wordpress/block-editor';

const InspectorColorSelect = props => {
  const { label, value={ type:'color', gradient:"linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)"}, onChange, colorOnly } = props;
  const [openColorPalette, setOpenColorPalette] = useState(false);
  const [ popoverAnchor, setPopoverAnchor ] = useState();

  // const [ color, setColor ] = useState( '#f00' );
  // const [ gradient, setGradient ] = useState("linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)");

  const reSet = ()=>{
    if('function' === typeof onChange){
      onChange({...value, ...props?.defaultAttributes});
    }
  }

  const ourGradients=[
    {
      name: 'Vivid cyan blue to vivid purple',
      gradient:
        'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
      slug: 'vivid-cyan-blue-to-vivid-purple',
    },
    {
      name: 'Light green cyan to vivid green cyan',
      gradient:
        'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
      slug: 'light-green-cyan-to-vivid-green-cyan',
    },
    {
      name: 'Luminous vivid amber to luminous vivid orange',
      gradient:
        'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
      slug: 'luminous-vivid-amber-to-luminous-vivid-orange',
    },
  ];

   const ourColors= [
      { name: 'red', color: '#f00' },
      { name: 'white', color: '#fff' },
      { name: 'blue', color: '#00f' },
    ];

 
  
  return (
    <>
    <div className="flex justify-between items-start">
      <BaseControl
      className="flex items-center mb-1 text-sm/6"
          label={label??"Default"}
          >
      </BaseControl>
      <div className="flex items-center gap-2">
      
      {<Dashicon className="text-gray-400 cursor-pointer transition-colors transition-duration-[300] hover:text-[--wp--preset--color--vivid-cyan-blue]" size="15" icon="image-rotate" onClick={reSet}></Dashicon>}
      
      <ColorIndicator  ref={ setPopoverAnchor } className="cursor-pointer w-12 rounded-md" onClick={()=>setOpenColorPalette(cp=>!cp)} colorValue={ value.type=="color"?value?.color:value?.gradient??"linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)" } /> 
      
      {openColorPalette &&  
       <Popover className="shadow-md alpha-popover"  anchor={ popoverAnchor } onFocusOutside={()=>setOpenColorPalette(false)}> 
       {/* <ColorPicker
        color={color}
        onChange={setColor}
        enableAlpha
        defaultValue="#000"
      /> */}

        <ColorGradientControl
					colorValue={ value?.color }
					gradientValue={ value?.gradient }
					colors={[...ourColors,...wp.data.select( "core/editor" ).getEditorSettings().colors]}
					gradients={ colorOnly?[]: [...ourGradients,...wp.data.select( "core/editor" ).getEditorSettings().gradients]}					
					onColorChange={ (newColor) => {
            if(newColor && 'function' === typeof onChange){
              onChange({...value, color: newColor, type: 'color'});
            }
          } }
					onGradientChange={ (newGradient) => {
            if(newGradient && 'function' === typeof onChange){
              onChange({...value,  gradient: newGradient, type: 'gradient'});
            }
          } }
          disableCustomGradients={colorOnly}
				/>
      </Popover>
      }



{/* { openColorPalette &&  
       <Popover className="shadow-md"  anchor={ popoverAnchor } onFocusOutside={()=>setOpenColorPalette(false)}> 
        <ColorPalette
          colors={[
            { name: 'red', color: '#f00' },
            { name: 'white', color: '#fff' },
            { name: 'blue', color: '#00f' },
          ]}
          value={ color }
          onChange={ ( color ) => setColor( color ) }
          clearable={true}
          asButtons={true}
        />
      </Popover>
      } */}
      </div>
    </div>    
    </>
  );
}

export default InspectorColorSelect;