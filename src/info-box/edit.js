
import { __ } from '@wordpress/i18n';

import { useBlockProps, 
    RichText,
    AlignmentToolbar,
    BlockControls ,
    ColorPalette,
    InspectorControls,
    PlainText,
    InnerBlocks,
    useInnerBlocksProps,
    List,
    __experimentalLinkControl as LinkControl,    
} from '@wordpress/block-editor';

import { useState } from '@wordpress/element';

import './editor.scss';

import { Button, CheckboxControl, Modal, PanelBody, Popover, RadioControl, SelectControl, SlotFillProvider, TextControl, ToggleControl } from '@wordpress/components';

import { createBlock } from '@wordpress/blocks'
import classnames from 'classnames';

import { useSelect, useDispatch, withSelect, withDispatch, AsyncModeProvider } from '@wordpress/data'
import { compose } from '@wordpress/compose'

export default function Edit({ attributes, setAttributes, isSelected, hasChild }) {

    // const { attributes, setAttributes } = props;
    const {contents } = attributes;

    const onChangeContent = ( newContent ) => {
        setAttributes( { content: newContent } );
    };
    const onChangeTitle = ( newTitle ) => {
        setAttributes( { title: newTitle } );
    };

    const onChangeAlignment = ( newAlignment ) => {
        setAttributes( {
            alignment: newAlignment === undefined ? 'none' : newAlignment,
        } );
    };

    const onChangeBGColor = ( hexColor ) => {
        setAttributes( { bg_color: hexColor } );
    };

    const onChangeTextColor = ( hexColor ) => {
        setAttributes( { text_color: hexColor } );
    };

    const onChangeContents = ( value ) => {
		setAttributes( { contents: value } );
        console.log("New richtest Value: ", value);
	};

    // const [ isOpen, setOpen ] = useState( false );
    // const openModal = () => setOpen( true );
    // const closeModal = () => setOpen( false );

    const [ isOpenLinkInspector, setLinkInspector ] = useState( false );
    const openLinkInspector = () => setLinkInspector( true );
    const closeLinkInspector = () => setLinkInspector( false );
    const toggleLinkInspector = () => {
		setLinkInspector( ( state ) => ! state );
	};

    const MY_TEMPLATE = [
        [ 'alpb/icon', {"icon":{"iconName":"route","type":"font-awesome"}} ]
    ];
    const ALLOWED_BLOCKS = [ 'alpb/icon'];
    const innerBlocksProps = useInnerBlocksProps();

    let editorData =  useSelect( select => {    
        return select("core/block-editor") || select("core/editor");
    }, [] );

    let editorDispatch = useDispatch("core/editor");

    console.log("editorDispatch: ", editorDispatch);
    console.log("editorData: ", editorData);
    console.log("getSelectedBlock ", editorData.getSelectedBlock());

    const addNewBlock = ()=>{
        const block = createBlock('alpb/info-box', {
            title:"The new Info box Content"
          });

        console.log("block", block);
        console.log("getSelectedBlock", editorData.getSelectedBlock());
        console.log("getBlockParents", editorData.getBlockParents( editorData.getSelectedBlock()) ) ;
        console.log("getBlockInsertionPoint", editorData.getBlockInsertionPoint());

        const afterInsert = editorDispatch.insertBlock(
                block
            );
        console.log("afterInsert", afterInsert);
        // editorDispatch.removeBlock( editorData.getSelectedBlockClientId() );
    }

    // console.log("useBlockProps", {...useBlockProps()});
    // console.log("innerBlocksProps", innerBlocksProps);


    const TestContent = ( { blockId, onClick } )=>{
        return (<div onClick={onClick} > The Content for test {blockId} </div>);
    }

    const TestContentDispatch = withDispatch( (dispatch, ownProps)=>{
        return {
            onClick:()=>{
                console.log("dispatch: ", dispatch("core"))
            }
        }
    } );

    const TestContentSelect = withSelect( (select, ownProps)=>{
        const { getSelectedBlockClientId } = select("core/editor")
        return {
            blockId:getSelectedBlockClientId()
        }
    } );

    const TestContentCompose = compose([TestContentSelect, TestContentDispatch])(TestContent);

	return (
		<div { ...useBlockProps() }>

                <InspectorControls key="setting">
                <PanelBody title={ __( 'Settings' ) } initialOpen={false} >
                    <div id="gutenpride-controls">
                        <fieldset>
                            <legend className="blocks-base-control__label">
                                { __( 'Background color', 'gutenpride' ) }
                            </legend>
                            <ColorPalette 
                                value={ attributes.bg_color }
                                onChange={ onChangeBGColor }
                            />
                        </fieldset>
                        <fieldset>
                            <legend className="blocks-base-control__label">
                                { __( 'Text color', 'gutenpride' ) }
                            </legend>
                            <ColorPalette 
                                  value={ attributes.text_color }
                                onChange={ onChangeTextColor }
                            />
                        </fieldset>
                    </div>
                </PanelBody>
                </InspectorControls>

                {
                    <BlockControls>
                        <AlignmentToolbar
                            value={ attributes.alignment }
                            onChange={ onChangeAlignment }
                        />
                    </BlockControls>
                }
                    <div className="bg-gray-100">
                        <div className="container mx-auto text-black ">
                            <div role="article" className="bg-gray-100">
                                <TestContentCompose blockId={"The-id"}></TestContentCompose>
                                <div className="relative bg-white p-5 rounded-md h-full w-full">
                                    <span>
                                    <InnerBlocks template={MY_TEMPLATE} allowedBlocks={ALLOWED_BLOCKS} templateLock={true} />
                                    </span>
                                    <RichText
                                        className={attributes.titleClass}
                                        style={ { textAlign: attributes.alignment } }
                                        tagName="h1"
                                        onChange={ onChangeTitle }
                                        value={ attributes.title }
                                    />  
                                    <div className="my-5">
                              
                                        <RichText
                                            tagName="div"
                                            multiline="div"
                                            className="text-content flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full"
                                            placeholder={ __(
                                                'Write the contents…',
                                                'gutenberg-examples'
                                            ) }
                                            value={ contents }
                                            onChange={ onChangeContents }
                                        />
    
                                                                     
                                    </div>

                                    <div className='link-wrapper' onClick={toggleLinkInspector}>
                                        <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#text">
                                            <p>Show All</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                    <line x1="15" y1="16" x2="19" y2="12" />
                                                    <line x1="15" y1="8" x2="19" y2="12" />
                                                </svg>
                                            </div>
                                        </a>                                        
                                    </div>                                                                     
                                    { isOpenLinkInspector &&        
                                    <InspectorControls key="linkInspector">
                                            <PanelBody title={ __( 'Link Settings' ) } initialOpen={isOpenLinkInspector} >
                                                <TextControl
                                                        label="Text Field"
                                                        help="Additional help text"
                                                        value={ "Default data" }
                                                        onChange={ val => console.log({ text:val }) }
                                                />
                                            </PanelBody>
                                    </InspectorControls>
                                    }                                   
                                </div>                                
                                <div className='py-2'>
                                    <button type="button"  className="components-button block-editor-inserter__toggle has-icon" aria-label="Add block"
                                    onClick={addNewBlock}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"></path></svg>
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>	
		</div>
	);
}
