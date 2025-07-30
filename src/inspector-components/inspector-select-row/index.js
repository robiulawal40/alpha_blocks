import {__} from '@wordpress/i18n'
import { useState, useEffect } from '@wordpress/element'
import {
  SelectControl
} from "@wordpress/components";

const InspectorSelectRow = props => {
  const { label, value, options, onChange=()=>{} } = props;
  const [selectedValue, setSelectedValue] = useState(value);

  useEffect(()=>{
    onChange(selectedValue);
  },[selectedValue])
  
  return (
    <>
    <div className="flex items-center justify-between">
      <div>{ label?? __( 'Border Style', 'alpha' ) }</div>
      <div>
      <SelectControl
        onChange={ (value)=>{ onChange(value)} }
        className="border-style"
        value={value}
        options={options}
        __next40pxDefaultSize
			
      />
      </div>
      </div>
    </>
  );
}

export default InspectorSelectRow;