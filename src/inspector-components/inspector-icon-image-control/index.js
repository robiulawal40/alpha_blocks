import InspectorIconSelector from "../inspector-icon-selector";
import InspectorImageSelector from "../inspector-image-selector";
import { useState, useEffect } from '@wordpress/element'
import InspectorSelectButton from "../inspector-select-button";
import {
  BaseControl
} from "@wordpress/components";

const InspectorIconImageControl = props =>{

  const { label, value } = props;
  const [selectedOption, setSelectedOption] = useState(value);

  return <BaseControl>
      <InspectorSelectButton value={selectedOption} options={[{label:"Icon", value:"icon"}, {label:"Image", value:"image"}]} updateOption={(currentValue)=>setSelectedOption(currentValue)} />
     { selectedOption ==="icon"  && <InspectorIconSelector></InspectorIconSelector> }
     { selectedOption ==="image"  && <InspectorImageSelector></InspectorImageSelector> }
  </BaseControl>;
}

export default InspectorIconImageControl;
