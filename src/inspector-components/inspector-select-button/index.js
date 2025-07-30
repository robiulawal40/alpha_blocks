import {__} from '@wordpress/i18n'
import { useState, useEffect } from '@wordpress/element'
import {
  Placeholder,
  ButtonGroup,
      __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
  Button,
  Dashicon,
  Modal,
  TabPanel,
  TabList,
  Tab,
  PanelRow,
  PanelColumn,
  RangeControl,
  BaseControl
} from "@wordpress/components";
import InspectorResponsiveLabel from '../inspector-responsive-label';


const InspectorSelectButton = props => {
  const { label, options, value, onChange, iconButton } = props;
  
  return (
    <BaseControl
    label={label??"Default"}
    id="alpha-accordion-type"
>
    <ToggleGroupControl id="alpha-accordion-type" className="flex w-full gap-0"  
    value={value}
    onChange={(val)=>onChange(val)}
    isBlock
  __nextHasNoMarginBottom={ true }
  __next40pxDefaultSize={ true }>
        {options?.map(
            (item, key) => (
                <ToggleGroupControlOption
                    className="flex-1 text-center justify-center"
                    key={key}
                    // isLarge
                    // isSecondary={
                    //   value !==
                    //     item.value
                    // }
                    // isPrimary={
                    //   value ===
                    //     item.value
                    // }
                    value={item?.value}
                    label={iconButton?<Dashicon icon={item.iconName}></Dashicon>:item.label}
                    // onClick={() =>
                    //   onChange(item.value)
                    // }
                ></ToggleGroupControlOption>
            )
        )}
    </ToggleGroupControl>
  </BaseControl>                 
  );
}

export default InspectorSelectButton;