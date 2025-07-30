import {__} from '@wordpress/i18n'
import { useState, useEffect, useRef } from '@wordpress/element'
import {
  Dashicon,
  ComboboxControl
} from "@wordpress/components";

const InspectorSearchSelectRow = props => {
  const { label, onReset, value, options, onChange=()=>{} } = props;
  const [selectedValue, setSelectedValue] = useState(value);
  const [expandOnFocus, setExpandOnFocus] = useState(false);
  const [inputValue, setInputValue] = useState('');


  useEffect(()=>{
    onChange(selectedValue);
  },[selectedValue]);

  const reSet = ()=>{
    if(onReset){
      onReset();
    }
  }
  
  return (
    <>
    <div className="flex items-start gap-2 justify-between flex-col">
      <div className="flex justify-between w-full">
        <div>{ label?? __( 'Border Style', 'alpha' ) }</div>
        <div>{ onReset && <Dashicon className="text-gray-400 cursor-pointer transition-colors transition-duration-[300] hover:text-[--wp--preset--color--vivid-cyan-blue]" size="15" icon="image-rotate" onClick={onReset}></Dashicon> }</div>
      </div>

      <div className="w-full">
        {/* <input type="text" name="false_name" className="w-full hidden" id="" /> */}
      <ComboboxControl
        // label={ label?? __( 'Border Style', 'alpha' ) }
        label=""
        onClick={()=>setExpandOnFocus(true)}
        onChange={ (val)=>{ onChange(val) } }
        className="border-style border w-full border-gray-500"
        value={value}
        options={options}
        __next40pxDefaultSize
			
      expandOnFocus={expandOnFocus}
      />
      </div>
      </div>
    </>
  );
}

export default InspectorSearchSelectRow;