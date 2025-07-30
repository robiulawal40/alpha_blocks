import {__} from '@wordpress/i18n'
import { useState, useEffect } from '@wordpress/element'
import {
  Placeholder,
  Button,
  Dashicon,
  Modal,
  BaseControl
} from "@wordpress/components";


const InspectorPresetsSelector = props => {
const { defaultValue, options, label, value, onChange=()=>{} } = props

  // const [currentPreset, setCurrentPreset] = useState("");
  // useEffect(() => {
  //   setCurrentPreset(checked);
  // }, []);
  
  return (
    <>
      <BaseControl
            label={label??__("Preset", "alpha")}
            id="alpha-accordion-type"
          >
          <div className="grid grid-cols-2 gap-4">
            { options?.map((item, index)=><div>
              <input className="peer hidden" type="radio" value={item.value} id={item.value} checked={value === item.value} onChange={(event) =>onChange(event.target.value)} />
              <label className="border-2 flex justify-center items-center border-[#f0f0f1]  peer-checked:border-[#00608f] rounded-md shadow-sm " for={item.value}>{ item.image?<img src={item.image} className="max-w-full max-h-[400px] min-w-10 min-h-10" />:<p className="max-w-full max-h-[400px] min-w-10 min-h-10">{item.title}</p>} </label>
            </div>)}
          </div>
      </BaseControl>
    </>
  );
}

export default InspectorPresetsSelector;