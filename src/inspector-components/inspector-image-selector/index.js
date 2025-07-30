import {__} from '@wordpress/i18n'
import { useState, useEffect } from '@wordpress/element'
import {
  Placeholder,
  Button,
  Dashicon,
  Modal
} from "@wordpress/components";

import { more } from '@wordpress/icons';

import { isEmpty } from "lodash";

import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import ImageLoad from './image-load';
const InspectorImageSelector = props => {

  const {
    className,
    imageId
  } = props;

  const [currentImageID, setCurrentImageID] = useState(imageId);

  const removeIcon = (e) => {
    e.stopPropagation();
    setCurrentImageID("");
  }

  const get = (e) => {
    e.stopPropagation();
    setCurrentImageID("");
  }

  useEffect(() => {

  }, []);
  
  return (
    <>
      <MediaUploadCheck>
			<MediaUpload
				onSelect={ ( media ) =>{
					console.log( 'selected media', media );
					setCurrentImageID( media?.id );
        }
				}
				allowedTypes={ ['image'] }
				value={ currentImageID }
				render={ ( { open } ) => (
          <Placeholder className="border-gray-300 border shadow-none hover:cursor-pointer relative group overflow-hidden" onClick={ open }>      
          <div className="float-right top-0">
            <div className="absolute float-right size-5 top-1.5 right-1.5 rounded-full flex justify-center items-center bg-gray-300" onClick={(e)=>removeIcon(e)} >
              <Dashicon icon="no-alt" className="text-white text-base leading-[20px]"></Dashicon>
            </div>
          </div>
          {currentImageID && <ImageLoad attachmentId={currentImageID} />}

           { !currentImageID && <div className="pb-3 flex justify-center items-center" >
              <Dashicon  icon="plus" className="iconblock_icon *:size-8"></Dashicon> 
            </div> }
          <div className="group-hover:translate-y-0 translate-y-full transition-transform duration-300 absolute change-icon-text bg-gray-300 text-center  bottom-0 left-0 right-0"><p>{__("Change Image","alpha")}</p></div>
          </Placeholder>
				) }
			/>
		</MediaUploadCheck> 
    </>
  );
}

export default InspectorImageSelector;