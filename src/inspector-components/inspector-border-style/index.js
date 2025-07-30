import {__} from '@wordpress/i18n'
import { useState, useEffect } from '@wordpress/element'
import {
  SelectControl
} from "@wordpress/components";

const InspectorBorderStyle = props => {
  const { label, value, onChange=()=>{} } = props;
  const [borderStyle, setBorderStyle] = useState(value);

  useEffect(()=>{
    onChange(borderStyle);
  },[borderStyle]);
  
  return (
    <>
      <SelectControl
        label={ label?? __( 'Border Style', 'alpha' ) }
        onChange={ (value)=>{ setBorderStyle(value)} }
        className="border-style"
        value={borderStyle}
        options={[
          {
            label: __( 'None' ),
            value: 'none',
          },
          {
            label: __( 'Solid' ),
            value: 'solid',
          },
          {
            label: __( 'Dashed' ),
            value: 'dashed',
          },
          {
            label: __( 'Dotted' ),
            value: 'dotted',
          },
          {
            label: __( 'Double' ),
            value: 'double',
          },
          {
            label: __( 'Groove' ),
            value: 'groove',
          },
          {
            label: __( 'Ridge' ),
            value: 'ridge',
          },
          {
            label: __( 'Inset' ),
            value: 'inset',
          },
          {
            label: __( 'Outset' ),
            value: 'outset',
          }
        ]}
        __next40pxDefaultSize
			
      />
    </>
  );
}

export default InspectorBorderStyle;