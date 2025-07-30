import {__} from '@wordpress/i18n'
import { useState, useEffect } from '@wordpress/element'
import {
  SelectControl,
  BorderControl 
} from "@wordpress/components";

   const ourColors= [
      { name: 'red', color: '#f00' },
      { name: 'white', color: '#fff' },
      { name: 'blue', color: '#00f' },
    ];

const InspectorBorder = props => {
  const { label, value, defaultAttributes, onChange=()=>{} } = props;
  const [border, setBorder] = useState(value??defaultAttributes);

  useEffect(()=>{
    onChange(border);
  },[border]);
  
  return (
    <>
        <BorderControl
            __next40pxDefaultSize
            colors={[...ourColors,...wp.data.select( "core/editor" ).getEditorSettings().colors]}
            label={ __( 'Border' ) }
            onChange={ setBorder }
            value={ border }
            withSlider={true}
            width={"100px"}
        />
    </>
  );
}

export default InspectorBorder;