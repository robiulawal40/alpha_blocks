import {__} from '@wordpress/i18n'
import { useState, useEffect } from '@wordpress/element'
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
  RangeControl,
  __experimentalBoxControl as BoxControl,
  __experimentalDimensionControl as DimensionControl
} from "@wordpress/components";
import InspectorResponsiveLabel from '../inspector-responsive-label';
import InspectorResponsiveRangeControl from '../inspector-responsive-range-control';
import InspectorSelectButton from '../inspector-select-button';
import InspectorColorSelect from '../inspector-color-select';
import InspectorBorderStyle from '../inspector-border-style';
import InspectorFourDimension from '../inspector-four-dimension';
// import {
// 	DimensionControl
// } from '@wordpress/block-editor';

const InspectorPanelBodyTabs = props => {
  const { checked, options, children, tabs, tabsRender } = props
  const [ rowsGap, setRowsGap ] = useState( 2 );
  const [ dimension, setDimension ] = useState( 2 );


  useEffect(() => {

  }, []);
  
  return (
    <>
      <TabPanel
            className="alpha-tab-panel border border-gray-200 shadow-sm"
            activeClass="active-tab-panel "
            onSelect={ ()=>{/*console.log("Selected")*/} }
            tabs={tabs}
        >
          
            {
              tab=>tabsRender(tab)
              // console.log("children", typeof children, children)
            // children
            // ( tab ) => <div className="min-h-10 p-3 *:my-5">
            //   { console.log("children: ", children) }
            //   {tab.name === "normal" && 
            //       (<>
            //         <InspectorColorSelect label={__("Background", "alpha")}/>                    

            //         <InspectorResponsiveRangeControl label={__("Rows Gap", "alpha")}/>

            //         <InspectorBorderStyle/>
                    
            //         <InspectorFourDimension label={__("Border Width", "alpha")}/>

            //         <InspectorFourDimension label={__("Border Radius", "alpha")}/>

            //         <InspectorColorSelect label={__("Border Color", "alpha")}/>
            //       </>
            //       ) 
            //   }
            //   {tab.name === "hover" && 
            //       (<>    
            //         <InspectorColorSelect label={__("Background", "alpha")}/>                    

            //         <InspectorResponsiveRangeControl label={__("Rows Gap", "alpha")}/>

            //         <InspectorBorderStyle/>

            //         <InspectorFourDimension label={__("Border Width", "alpha")}/>

            //         <InspectorFourDimension label={__("Border Radius", "alpha")}/>

            //         <InspectorColorSelect label={__("Border Color", "alpha")}/>
            //       </>) 
            //   }
            //   </div> 
            }
    </TabPanel>
    </>
  );
}

export default InspectorPanelBodyTabs;