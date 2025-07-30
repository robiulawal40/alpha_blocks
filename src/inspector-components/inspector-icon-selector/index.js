import {__} from '@wordpress/i18n'
import { useState, useEffect } from '@wordpress/element'
import {
  Placeholder,
  Button,
  Dashicon,
  Modal
} from "@wordpress/components";

import { more } from '@wordpress/icons';
import IconsLibrary from './icon-library'
import { ultimateIcons } from "./icons";
import { isEmpty } from "lodash";

const InspectorIconSelector = props => {

  const [isLibraryOpen, setLibraryOpen] = useState(false);
  const [currentIcon, setCurrentIcon] = useState({});

  const {
    svgIcon,
    value,
    defaultIconName="",
    onChange=()=>{}
  } = props;

  // console.log("onChange:", typeof onChange);
  // if("function" !== typeof onChange){
  //   var onChange =()=>{};
  // }

  const hasIcon = !isEmpty(value);

  const hasSVGIcon = !isEmpty(svgIcon);

  const finalIcon = hasIcon
    ? ultimateIcons
        .find((obj) => obj.type === value?.type)
        ?.icons?.find((ic) => ic.name === value.iconName)?.icon ?? ""
    : "";

  const openModal = (e) => {
    setLibraryOpen(true);
  }

  const removeIcon = (e) => {
    e.stopPropagation();
    // setCurrentIcon({});
    onChange({});
  }

  const iconNameToSVG = iconName => ultimateIcons.map(types => types.icons)?.flat()?.find((ic) => ic.name === iconName)?.icon ?? "";

  useEffect(() => {
    // setCurrentIcon({iconSVG: iconNameToSVG(defaultIconName)});
    onChange({iconName: value?.iconName??defaultIconName});
  }, []);
  
  return (
    <>
    <Placeholder className="border-gray-300 border shadow-none hover:cursor-pointer relative group overflow-hidden" onClick={(e)=>openModal(e)}>      
      <div className="float-right top-0">
        <div className="absolute float-right size-5 top-1.5 right-1.5 rounded-full flex justify-center items-center bg-gray-300" onClick={(e)=>removeIcon(e)} >
          <Dashicon icon="no-alt" className="text-white text-base leading-[20px]"></Dashicon>
        </div>
      </div>

      <div className="pb-3 flex justify-center items-center">
       { value?.iconName && <div className="iconblock_icon *:size-8" >{ iconNameToSVG(value?.iconName) /* value?.iconSVG */ }</div> }
       { !value?.iconName && <Dashicon  icon="plus" className="iconblock_icon *:size-8"></Dashicon> }
      </div>

      <div className="group-hover:translate-y-0 translate-y-full transition-transform duration-300 absolute change-icon-text bg-gray-300 text-center  bottom-0 left-0 right-0"><p>{__("Change Icon","alpha")}</p></div>
    </Placeholder>

    {isLibraryOpen && (
				<Modal
					isFullScreen
					className="iconblock_icons_library_modal"
					title={__("Icons", "alpha")}
					onRequestClose={() => setLibraryOpen(false)}
				>
					<IconsLibrary
						value={value?.iconName}
						onSelect={(newIcon) => {
							// setCurrentIcon({ ...newIcon, iconSVG: iconNameToSVG(newIcon?.iconName)});
              onChange({ ...newIcon}); /* iconSVG: iconNameToSVG(newIcon?.iconName) */
							setLibraryOpen(false);
						}}
					/>
				</Modal>
			)}
    </>
  );
}

export default InspectorIconSelector;