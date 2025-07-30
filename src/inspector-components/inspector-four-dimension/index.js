import { PanelBody,  __experimentalNumberControl as NumberControl, Flex, FlexItem, Button, BaseControl } from '@wordpress/components';
import { link, linkOff } from '@wordpress/icons';
import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import InspectorResponsiveLabel from '../inspector-responsive-label';
const InspectorFourDimension = (props) => {
    // Local state for borders
    const { label, value, onChange=()=>{}, min, max } = props;
    const [borderTop, setBorderTop] = useState(value?.desktop?.borderTop);
    const [borderRight, setBorderRight] = useState(value?.desktop?.borderRight);
    const [borderBottom, setBorderBottom] = useState(value?.desktop?.borderBottom);
    const [borderLeft, setBorderLeft] = useState(value?.desktop?.borderLeft);
    const [isLinked, setIsLinked] = useState(true);

    const [currentMedia, setCurrentMedia] = useState("desktop");
    const [currentUnit, setCurrentUnit] = useState({key:"px", name:"px"});

    const makeUnitObj = (unit)=>({key:unit?.key??unit, name:unit?.name??unit});
    const getUnit = (unit) => (unit?.key??unit);

    const reSet = ()=>{
        if('function' === typeof onChange){
          // console.log("range control", value,props?.defaultAttributes, {...value, ...props?.defaultAttributes} );
          let defaultValue = {...props?.defaultAttributes};
          setCurrentMedia("desktop");
          setBorderTop(defaultValue?.["desktop"]?.borderTop);
          setBorderRight(defaultValue?.["desktop"]?.borderRight);
          setBorderBottom(defaultValue?.["desktop"]?.borderBottom);
          setBorderLeft(defaultValue?.["desktop"]?.borderLeft);    
          setCurrentUnit(()=>(makeUnitObj(defaultValue?.["desktop"]?.unit)));
          onChange({...props?.defaultAttributes});
        }
      }

    const updateBorders = (value, side) => {
        if (isLinked) {
            setBorderTop(value);
            setBorderRight(value);
            setBorderBottom(value);
            setBorderLeft(value);
        } else {
            if (side === 'borderTop') setBorderTop(value);
            if (side === 'borderRight') setBorderRight(value);
            if (side === 'borderBottom') setBorderBottom(value);
            if (side === 'borderLeft') setBorderLeft(value);
        }
    };

      useEffect(() => {

        onChange({...value, [currentMedia]:{...value?.[currentMedia],borderTop, borderRight, borderBottom, borderLeft, unit: getUnit(currentUnit)} })
          
      }, [borderTop, borderRight, borderBottom, borderLeft, currentUnit]);

      useEffect(() => {
        if( currentMedia in value ){
            setBorderTop(value?.[currentMedia]?.borderTop);
            setBorderRight(value?.[currentMedia]?.borderRight);
            setBorderBottom(value?.[currentMedia]?.borderBottom);
            setBorderLeft(value?.[currentMedia]?.borderLeft);     
            setCurrentUnit(makeUnitObj(value?.[currentMedia]?.unit));   
        }

        onChange({...value, [currentMedia]:{...value?.[currentMedia],borderTop, borderRight, borderBottom, borderLeft, unit: getUnit(currentUnit)} })

        }, [currentMedia]);

    return (
            <BaseControl 
              // label={__('Border Width', 'your-text-domain')} 
            >
              <InspectorResponsiveLabel label={label??"Default Label"} value={ value } currentMedia={currentMedia} setCurrentMedia={setCurrentMedia} currentUnit={currentUnit} setCurrentUnit={setCurrentUnit} onReset={()=>reSet()} unites={["px", "em", "%"]} defaultUnit="px"/>
                <Flex gap={0} className="overflow-hidden justify-stretch"  align="center">
                    {/* Border Top */}
                    <FlexItem>
                        <NumberControl
                            value={borderTop}
                            onChange={(value) => updateBorders(value, 'borderTop')}
                            min={min??""}
                            max={max??""}                            
                        />
                    </FlexItem>

                    {/* Border Right */}
                    <FlexItem>
                        <NumberControl
                            value={borderRight}
                            onChange={(value) => updateBorders(value, 'borderRight')}
                            min={min??""}
                            max={max??""}                         
                        />
                    </FlexItem>

                    {/* Border Bottom */}
                    <FlexItem>
                        <NumberControl
                            value={borderBottom}
                            onChange={(value) => updateBorders(value, 'borderBottom')}
                            min={min??""}
                            max={max??""}                              
                        />
                    </FlexItem>

                    {/* Border Left */}
                    <FlexItem>
                        <NumberControl
                            value={borderLeft}
                            onChange={(value) => updateBorders(value, 'borderLeft')}
                            min={min??""}
                            max={max??""}                              
                        />
                    </FlexItem>

                    {/* Link/Unlink Button */}
                    <FlexItem className="shrink-0">
                        <Button 
                           className="max-h-[32px] "
                            icon={isLinked ? link : linkOff} 
                            isPressed={isLinked}
                            onClick={() => setIsLinked(!isLinked)}
                            title={isLinked ? __('Unlink Borders', 'your-text-domain') : __('Link Borders', 'your-text-domain')}
                        />
                    </FlexItem>
                </Flex>
                <Flex gap={0} className="overflow-hidden justify-stretch text-center text-[10] text-gray-400"  align="center">
                  <FlexItem className="flex-1">{__("Top", "alpha")}</FlexItem>
                  <FlexItem className="flex-1">{__("Right", "alpha")}</FlexItem>
                  <FlexItem className="flex-1">{__("Bottom", "alpha")}</FlexItem>
                  <FlexItem className="flex-1">{__("Left", "alpha")}</FlexItem>
                  <FlexItem className="flex-1"></FlexItem>
                </Flex>
            </BaseControl>
    );
};

export default InspectorFourDimension;
