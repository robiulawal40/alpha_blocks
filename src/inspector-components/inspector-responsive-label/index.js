import {__} from '@wordpress/i18n'
import { useState, useEffect, useRef } from '@wordpress/element'
import {
  Placeholder,
  Button,
  Dashicon,
  Modal,
  CustomSelectControl
} from "@wordpress/components";

import classnames from 'classnames'

const InspectorResponsiveLabel = props => {

const { checked,  label, onReset, unites, defaultUnit, value, currentUnit, setCurrentUnit, currentMedia, setCurrentMedia } = props
  
  const [hideUnusedMedia, setHideUnusedMedia] = useState(true);
  // const [currentUnit, setCurrentUnit] = useState("px");

  const setMedia = (media)=>{
    setCurrentMedia(media);

    if("desktop" == media){
      setHideUnusedMedia(unit => !unit);
    }else{
      setHideUnusedMedia(false);
    }
  }

  const reSet = ()=>{
    if(onReset){
      onReset();
      setHideUnusedMedia(true);
      if(defaultUnit){
        setCurrentUnit(defaultUnit);
      }
    }
  }
  // const reSetUnit = (unit)=>{
  //   setCurrentUnit(unit);
  // }


  // useEffect(() => {
  //   if(defaultUnit){
  //     setCurrentUnit(defaultUnit);
  //   }
  // }, []);
  
  return (
    <>
      <div className="flex justify-between mb-2">
        <div className="flex justify-start items-center gap-1">
          <span className="mr-2">{label}</span>
          <Dashicon className={ classnames("cursor-pointer", { "text-gray-400": currentMedia !== "desktop" }, { "text-[--wp--preset--color--vivid-cyan-blue]": currentMedia === "desktop" })} onClick={()=>setMedia("desktop")} size="15" icon="desktop"></Dashicon>

          <Dashicon  className={ 
            classnames("cursor-pointer", 
              { "hidden": hideUnusedMedia },
              { "text-gray-400": currentMedia !== "tablet" },
              { "text-[--wp--preset--color--vivid-cyan-blue]": currentMedia === "tablet" }
            )
            } onClick={()=>setMedia("tablet")} size="15" icon="tablet"></Dashicon>

          <Dashicon  className={ classnames("cursor-pointer", 
            { "hidden": hideUnusedMedia },
            { "text-gray-400": currentMedia !== "mobile" }, 
            { "text-[--wp--preset--color--vivid-cyan-blue]": currentMedia === "mobile" })} onClick={()=>setMedia("mobile")} size="15" icon="smartphone"></Dashicon>
        </div>
        <div className="flex justify-end float-right items-center ml-2 text-sm">
         { onReset && <Dashicon className="text-gray-400 cursor-pointer transition-colors transition-duration-[300] hover:text-[--wp--preset--color--vivid-cyan-blue]" size="15" icon="image-rotate" onClick={reSet}></Dashicon> }
         <div className='flex items-center justify-center ml-2 text-sm'>

          <CustomSelectControl
            className="unit-select"
            options={ unites?.map((tx)=>({key:tx, name:tx, style:{}})) }
            onChange={ ( { selectedItem } ) => { setCurrentUnit(selectedItem?.key )}}
            // value={value?.[currentMedia]?.unit}
            value={currentUnit}
          />
         </div>
        </div>        
      </div>
    </>
  );
}

export default InspectorResponsiveLabel;