import {__} from '@wordpress/i18n'
import { InspectorControls, useBlockEditContext } from '@wordpress/block-editor'
import {
  PanelBody,
  PanelRow,
  BaseControl,
  ButtonGroup,
  Button,
  Dashicon,
  TextControl,
  ToggleControl,
  RangeControl,
  TabPanel,
  PanelTabs,
  Icon,
  Placeholder
} from "@wordpress/components";
import { more } from '@wordpress/icons';
import InspectorIconSelector from '../inspector-icon-selector';
import InspectorImageSelector from '../inspector-image-selector';
import InspectorPresetsSelector from '../inspector-presets-selector';
import InspectorPanelBodyTabs from '../inspector-panel-body-tabs';
import InspectorResponsiveRangeControl from '../inspector-responsive-range-control';
import InspectorColorSelect from '../inspector-color-select';
import InspectorBorderStyle from '../inspector-border-style';
import InspectorFourDimension from '../inspector-four-dimension';
import InspectorTypographyControl from '../inspector-typography-control';
import InspectorSelectRow from '../inspector-select-row';
import InspectorIconImageControl from '../inspector-icon-image-control';
import InspectorSelectButton from '../inspector-select-button';

const InspectorTabs = props => {
  const { name } = useBlockEditContext()
  const { attributes, setAttributes } = props;
  const QUESTION_TAGS = [
    { label: __("H1", "alpha"), value: "h1" },
    { label: __("H2", "alpha"), value: "h2" },
    { label: __("H3", "alpha"), value: "h3" },
    { label: __("H4", "alpha"), value: "h4" },
    { label: __("H5", "alpha"), value: "h5" },
    { label: __("H6", "alpha"), value: "h6" },
    { label: __("Span", "alpha"), value: "span" },
    { label: __("P", "alpha"), value: "p" },
  ];

	return (
		<>
		<InspectorControls>
        <div className="alpha-settings bg-slate-800">
          <TabPanel
            className=""
            activeClass="active-tab"
            tabs={[
                
                {
                    name: "general",
                    title: "General",
                    className: "alpha-tab general",
                    icon:<div className="flex flex-col justify-center items-center"><Icon icon='admin-generic'/>General</div>
                },               
                {
                    name: "styles",
                    title: "Style",
                    className: "alpha-tab styles ",
                    icon:<div className="flex flex-col justify-center items-center"><Icon icon='admin-appearance'/>Style</div>
                },        
                {
                    name: "advance",
                    title: "Advanced",
                    className: "alpha-tab advance ",
                    icon:<div className="flex flex-col justify-center items-center"><Icon icon='admin-tools'/>Advance</div>
                },    
            ]}
            >
                    {(tab) =>(
                    <div className="alpha-tab-content">
                        {tab.name === "general" && (
                        <PanelBody className="px-0 py-0 rounded-none">

                        {/** Start: First Accordion */}
                        <PanelBody title={__('General', 'alpha')} className="!rounded-none !bg-transparent" initialOpen={true}>

                            <PanelRow>
                                <ToggleControl
                                    className="w-full"
                                    label={__('Collapse other items', 'alpha')}
                                    checked={attributes.collapseOtherItems}
                                    onChange={(value) => setAttributes({ collapseOtherItems: value })}
                                />
                            </PanelRow>

                            <PanelRow>
                                <ToggleControl
                                    className="w-full"
                                    label={__('Expand First Item', 'alpha')}
                                    checked={attributes.expandFirstItem}
                                    onChange={(value) => setAttributes({ expandFirstItem: value })}
                                />
                            </PanelRow>

                            <PanelRow>
                                <ToggleControl
                                    className="w-full"
                                    label={__('Enable Toggle', 'alpha')}
                                    checked={attributes.enableToggle}
                                    onChange={(value) => setAttributes({ enableToggle: value })}
                                />
                            </PanelRow>

                            <PanelRow>
                                <ToggleControl
                                    className="w-full"
                                    label={__('Enable Schema Support', 'alpha')}
                                    checked={attributes.enableSchemaSupport}
                                    onChange={(value) => setAttributes({ enableSchemaSupport: value })}
                                />
                            </PanelRow>

                            <PanelRow>
                                <ToggleControl
                                    className="w-full"
                                    label={__('Enable Separator', 'alpha')}
                                    checked={attributes.enableSeparator}
                                    onChange={(value) => setAttributes({ enableSeparator: value })}
                                />
                            </PanelRow>
                            <InspectorSelectButton label={__("Question Tag","alpha")} value={attributes.questionTag} onChange={(value) => setAttributes({ questionTag: value })} options={QUESTION_TAGS}/>

                        </PanelBody>
                        {/** End: First Accordion */}

                        {/** Start: Second Accordion */}
                        <PanelBody title={__('Icon', 'alpha')} className="!rounded-none !bg-transparent"  initialOpen={false}>
                            
                            <BaseControl
                                label={__(
                                    "Inactive Icon",
                                    "alpha"
                                )}
                            >
                                <InspectorIconSelector value={attributes.inactiveIcon} onChange={(value) => setAttributes({ inactiveIcon: value })} defaultIconName="adn"/>
                            </BaseControl>

                            <BaseControl
                                label={__(
                                    "Active Icon",
                                    "alpha"
                                )}
                            >
                                <InspectorIconSelector value={attributes.activeIcon} onChange={(value) => setAttributes({ activeIcon: value })} defaultIconName="allergies"/>
                            </BaseControl>

                                {/* <InspectorIconImageControl value="icon" /> */}

                                <InspectorSelectButton label={__(
                                    "Icon Alignment",
                                    "alpha"
                                )}
                                options={[{value:"left", iconName:"editor-alignleft", label:"editor-alignleft"},{value:"right", iconName:"editor-alignright", label:"editor-alignright"}]}
                                value={attributes.iconAlignment}
                                defaultValue={"editor-alignleft"}
                                iconButton
                                onChange={(value) => setAttributes({ iconAlignment: value })}
                                />

                        </PanelBody>
                        {/** End: Second Accordion */}

                        {/** Start: Third Accordion */}
                        <PanelBody title={__('Presets', 'alpha')} className="!rounded-none !bg-transparent" initialOpen={false}>

                                <InspectorPresetsSelector
                                    label={__('Select Presets', 'alpha')}
                                    value={attributes.presets}
                                    onChange={(value) => setAttributes({ presets: value })}
                                    defaultValue={"two"}
                                    options={[
                                        {
                                        value:"one",
                                        title:"One",
                                        image:"https://placehold.co/200x200/transparent/333"
                                    },
                                        {
                                        value:"two",
                                        title:"Two",
                                        image:"https://placehold.co/200x200/transparent/333"
                                    },
                                        {
                                        value:"three",
                                        title:"Three",
                                        image:"https://placehold.co/200x200/transparent/333"
                                    },
                                    {
                                    value:"four",
                                    title:"Four",
                                    image:"https://placehold.co/200x200/transparent/333"
                                },
                                {
                                value:"five",
                                title:"Four",
                                image:""
                                }
                                ]}
                                />
                        </PanelBody>
                        {/** End: Third Accordion */}


                        </PanelBody>
                        )}
                        
                        {tab.name === "styles" && (
                        <PanelBody className="px-0 py-0 rounded-none">

                        {/** Start: First Container */}
                        <PanelBody title={__('Container', 'alpha')} className="!rounded-none !bg-transparent" initialOpen={true}>
                            <InspectorPanelBodyTabs 
                            tabs={ [
                                    {
                                        name: 'normal',
                                        title: __('Normal', 'alpha'),
                                        className: 'normal py-1 justify-center',
                                    },
                                    {
                                        name: 'hover',
                                        title:  __('Hover', 'alpha'),
                                        className: 'hover py-1 justify-center',
                                    },
                                ] }

                            tabsRender={
                                ( tab ) => <div className="min-h-10 p-3 *:my-5">
                                            {tab.name === "normal" && 
                                                (<>
                                                    <InspectorColorSelect label={__("Background", "alpha")} value={attributes?.containerNormalBackground} onChange={(val)=>setAttributes({containerNormalBackground:val})}/>                    
                        
                                                    <InspectorResponsiveRangeControl label={__("Rows Gap", "alpha")} value={attributes?.containerNormalRowsGap} onChange={(val)=>setAttributes({containerNormalRowsGap:val})}/>
                        
                                                    <InspectorBorderStyle value={attributes?.containerNormalBorderStyle} onChange={(val)=>setAttributes({containerNormalBorderStyle:val})}/>
                                                    
                                                    <InspectorFourDimension label={__("Border Width", "alpha")} value={attributes?.containerNormalBorderWidth} onChange={(val)=>setAttributes({containerNormalBorderWidth:val})} />
                        
                                                    <InspectorFourDimension label={__("Border Radius", "alpha")} value={attributes?.containerNormalBorderRadius} onChange={(val)=>setAttributes({containerNormalBorderRadius:val})} />
                        
                                                    <InspectorColorSelect label={__("Border Color", "alpha")} value={attributes?.containerNormalBorderColor} onChange={(val)=>setAttributes({containerNormalBorderColor:val})}/>
                                                </>
                                                ) 
                                            }
                                            {tab.name === "hover" && 
                                                (<>    
                                                    <InspectorColorSelect label={__("Background", "alpha")} value={attributes?.containerHoverBackground} onChange={(val)=>setAttributes({containerHoverBackground:val})}/>                    
                                            
                                                    <InspectorBorderStyle value={attributes?.containerHoverNormalBorderStyle} onChange={(val)=>setAttributes({containerHoverNormalBorderStyle:val})}/>
                        
                                                    <InspectorFourDimension label={__("Border Width", "alpha")} value={attributes?.containerHoverBorderWidth} onChange={(val)=>setAttributes({containerHoverBorderWidth:val})}/>
                        
                                                    <InspectorColorSelect label={__("Border Color", "alpha")} value={attributes?.containerHoverBorderColor} onChange={(val)=>setAttributes({containerHoverBorderColor:val})}/>
                                                </>) 
                                            }
                                            </div> 
                            }
                                />
                      
                  </PanelBody>
                  {/** End: First Container */}

                  {/** Start: Icon */}
                  <PanelBody title={__('Icon', 'alpha')} className="!rounded-none !bg-transparent" initialOpen={false}>
                    <BaseControl>
                        <InspectorResponsiveRangeControl label={__("Icon Size", "alpha")} value={attributes?.iconSize} onChange={(val)=>setAttributes({iconSize:val})}/>
                    </BaseControl>
                    <BaseControl>
                        <InspectorResponsiveRangeControl label={__("Background Size", "alpha")} value={attributes?.backgroundSize} onChange={(val)=>setAttributes({backgroundSize:val})}/>
                        </BaseControl>
                        <BaseControl>
                        <InspectorResponsiveRangeControl label={__("Gap between Icon and Question", "alpha")} value={attributes?.gapIconQuestion} onChange={(val)=>setAttributes({gapIconQuestion:val})}/>
                        </BaseControl>
                    <BaseControl>
                        <InspectorColorSelect label={__("Color", "alpha")} value={attributes?.iconColor} onChange={(val)=>setAttributes({iconColor:val})}/>
                        </BaseControl>
                    <BaseControl>
                        <InspectorColorSelect label={__("Active Color", "alpha")} value={attributes?.iconActiveColor} onChange={(val)=>setAttributes({iconActiveColor:val})}/>
                        </BaseControl>
                    <BaseControl>
                        <InspectorColorSelect label={__("Background Color", "alpha")} value={attributes?.iconBackgroundColor} onChange={(val)=>setAttributes({iconBackgroundColor:val})}/>
                    </BaseControl>    
                    <BaseControl>
                     <InspectorBorderStyle value={attributes?.iconBorderStyle} onChange={(val)=>setAttributes({iconBorderStyle:val})}/>
                    </BaseControl>      
                    <BaseControl>
                        <InspectorFourDimension label={__("Border Width", "alpha")} value={attributes?.iconBorderWidth} onChange={(val)=>setAttributes({iconBorderWidth:val})}/>
                    </BaseControl>             
                    <BaseControl>
                        <InspectorFourDimension label={__("Radius", "alpha")} value={attributes?.iconRadius} onChange={(val)=>setAttributes({iconRadius:val})}/>
                    </BaseControl>             
                  </PanelBody>
                  {/** End: Icon */}

                  {/** Start: Question */}
                  <PanelBody title={__('Question', 'alpha')} className="!rounded-none !bg-transparent" initialOpen={false}>
                    <BaseControl>
                        <InspectorTypographyControl label={__("Typography", "alpha")} value={attributes?.questionTypography} onChange={(val)=>setAttributes({questionTypography:val})} />
                    </BaseControl>
                    
                    <BaseControl>
                        <InspectorColorSelect label={__("Text Color", "alpha")} value={attributes?.questionTextColor} onChange={(val)=>setAttributes({questionTextColor:val})}/>
                    </BaseControl>

                    <BaseControl>
                        <InspectorColorSelect label={__("Background Color", "alpha")} value={attributes?.questionBackground} onChange={(val)=>setAttributes({questionBackground:val})}/>
                    </BaseControl>

                    <BaseControl>
                        <InspectorFourDimension label={__("Padding", "alpha")} value={attributes?.questionPadding} onChange={(val)=>setAttributes({questionPadding:val})}/>
                    </BaseControl>
                  </PanelBody>
                  {/** End: Question */}

                  {/** Start: Answer */}
                  <PanelBody title={__('Answer', 'alpha')} className="!rounded-none !bg-transparent" initialOpen={false}>

                    <BaseControl>
                        <InspectorColorSelect label={__("Text Color", "alpha")} value={attributes?.answerTextColor} onChange={(val)=>setAttributes({answerTextColor:val})}/>
                    </BaseControl>

                    <BaseControl>
                        <InspectorTypographyControl label={__("Typography", "alpha")} value={attributes?.answerTypography} onChange={(val)=>setAttributes({answerTypography:val})}/>
                    </BaseControl>

                    <BaseControl>
                        <InspectorFourDimension label={__("Padding", "alpha")} value={attributes?.answerPadding} onChange={(val)=>setAttributes({answerPadding:val})}/>
                    </BaseControl>

                  </PanelBody>
                  {/** End: Answer */}

                  {/** Start: Spacing */}
                  <PanelBody title={__('Spacing', 'alpha')} className="!rounded-none !bg-transparent" initialOpen={true}>
                    
                    <BaseControl>
                        <InspectorFourDimension label={__("Padding", "alpha")} value={attributes?.spacingPadding} onChange={(val)=>setAttributes({spacingPadding:val})}/>
                    </BaseControl>

                    <BaseControl>
                        <InspectorFourDimension label={__("Margin", "alpha")} value={attributes?.spacingMargin} onChange={(val)=>setAttributes({spacingMargin:val})}/>
                    </BaseControl>
                  </PanelBody>
                  {/** End: Spacing */}
                  </PanelBody>
                )}

                {tab.name === "advance" && (
                  <PanelBody className="px-0 py-0 rounded-none">

                  {/** Start: First Container */}
                    <PanelBody title={__('Animation', 'alpha')} className="!rounded-none !bg-transparent" initialOpen={false}>
                        <BaseControl>
                            <InspectorSelectRow options={[ {label:"Default", value:"default"}, {label:"times-roman", value:"Times Roman"} ]} label={__("Animation", "alpha")} value={attributes?.animation} onChange={(val)=>setAttributes({animation:val})} />
                        </BaseControl>                     
                    </PanelBody>

                    <PanelBody title={__('Display Condition', 'alpha')} className="!rounded-none !bg-transparent" initialOpen={false}>
                        <BaseControl>
                            <InspectorSelectRow options={[ {label:"Default", value:"default"}, {label:"times-roman", value:"Times Roman"} ]} label={__("Display Condition", "alpha")} value={attributes?.displayCondition} onChange={(val)=>setAttributes({displayCondition:val})}/>
                        </BaseControl>                     
                    </PanelBody>

                    <PanelBody title={__('Responsive Condition', 'alpha')} className="!rounded-none !bg-transparent" initialOpen={true}>
                    <PanelRow>
                          <ToggleControl
                              className="w-full"
                              label={__('Hide on Desktop', 'alpha')}
                              checked={attributes.hideOnDesktop}
                              onChange={(value) => setAttributes({ hideOnDesktop: value })}
                          />
                      </PanelRow>           
                    <PanelRow>
                          <ToggleControl
                              className="w-full"
                              label={__('Hide on Tablet', 'alpha')}
                              checked={attributes.hideOnTablet}
                              onChange={(value) => setAttributes({ hideOnTablet: value })}
                          />
                      </PanelRow>           
                    <PanelRow>
                          <ToggleControl
                              className="w-full"
                              label={__('Hide on Mobile', 'alpha')}
                              checked={attributes.hideOnMobile}
                              onChange={(value) => setAttributes({ hideOnMobile: value })}
                          />
                      </PanelRow>           
                    </PanelBody>

                    <PanelBody title={__('Z-Index', 'alpha')} className="!rounded-none !bg-transparent" initialOpen={true}>
                    <BaseControl>
                        <InspectorResponsiveRangeControl label={__("Z-Index", "alpha")} value={attributes?.zIndex} onChange={(val)=>setAttributes({zIndex:val})}/>
                    </BaseControl>    
                    </PanelBody>

                  </PanelBody>
                )}
              </div>              
            )}
          </TabPanel>
        </div>
	</InspectorControls>
		</>
	)
}

export default InspectorTabs;