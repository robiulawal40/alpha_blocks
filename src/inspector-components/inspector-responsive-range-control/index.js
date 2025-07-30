import {__} from '@wordpress/i18n'
import { useState, useEffect, useRef } from '@wordpress/element'
import {
  Placeholder,
  Button,
  Dashicon,
  Modal,
  TabPanel,
  TabList,
  Tab,
  PanelRow,
  PanelColumn,
  RangeControl 
} from "@wordpress/components";
import InspectorResponsiveLabel from '../inspector-responsive-label';


const InspectorResponsiveRangeControl = props => {
  const { label, value, onChange=()=>{}, min=0, max=100 } = props;
  const [ rowsGap, setRowsGap ] = useState( 2 );
  const [currentMedia, setCurrentMedia] = useState("desktop");
  const [currentValue, setCurrentValue] = useState(value?.desktop?.val);
  const [currentUnit, setCurrentUnit] = useState("px");

  const makeUnitObj = (unit)=>({key:unit?.key??unit, name:unit?.name??unit});
  const getUnit = (unit) => (unit?.key??unit);

  const reSet = ()=>{
    if('function' === typeof onChange){
      // console.log("range control", value,props?.defaultAttributes, {...value, ...props?.defaultAttributes} );
      let currentValue = {...value, ...props?.defaultAttributes};
      setCurrentMedia("desktop");
      setCurrentUnit(()=>({key:"px", value:"px"}));
      setCurrentValue(currentValue?.desktop?.val);
      onChange({...props?.defaultAttributes});
    }
  }

  useEffect(() => {
      onChange({...value, [currentMedia]:{...value?.[currentMedia],val:currentValue, unit: getUnit(currentUnit)} })
  }, [currentValue,currentUnit]);

  useEffect(() => {
    if( currentMedia in value ){
      // console.log("_currentUnit:, value?.[currentMedia] ", _currentUnit, value?.[currentMedia]);
      
      let _currentUnit = value?.[currentMedia]?.unit;
      setCurrentUnit(makeUnitObj(_currentUnit));
      setCurrentValue(value?.[currentMedia]?.val);

      onChange({...value, [currentMedia]:{...value?.[currentMedia],val: value?.[currentMedia]?.val, unit:getUnit(currentUnit)} })

    }else{
      onChange({...value, [currentMedia]:{...value?.[currentMedia],val:currentValue, unit: getUnit(currentUnit)} })
    }
}, [currentMedia]);
  
  return (
          <div>    
            <InspectorResponsiveLabel label={label??"Default Label"} value={ value } currentMedia={currentMedia} setCurrentMedia={setCurrentMedia} currentUnit={currentUnit} setCurrentUnit={setCurrentUnit}  onReset={()=>reSet()} unites={["px", "em", "%"]} defaultUnit="px"/>
                <RangeControl
                                        
                initialPosition={ min }
                label=""
                value={ currentValue}
                onChange={ ( val ) =>setCurrentValue(val) }
                min={ min }
                max={ max }
              />
          </div>                 
  );
}

export default InspectorResponsiveRangeControl;