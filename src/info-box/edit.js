/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, 
    RichText,
    AlignmentToolbar,
    BlockControls ,
    ColorPalette,
    InspectorControls,
    PlainText,
    InnerBlocks,
    useInnerBlocksProps,
    List
} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
import { Button } from '@wordpress/components';

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

    const MY_TEMPLATE = [
        [ 'core/list', {},[ ['core/list-item', { placeholder:"Enter Info Item", content:"List Item One" }], ['core/list-item', { placeholder:"Enter Info Item" }] ] ]
    ];
    const ALLOWED_BLOCKS = [ 'core/list', 'core/list-item' ];
    const innerBlocksProps = useInnerBlocksProps();

    console.log("useBlockProps", {...useBlockProps()});
    console.log("innerBlocksProps", innerBlocksProps);
	return (
		<div { ...useBlockProps() }>

                <InspectorControls key="setting">
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
                                <div className="relative bg-white p-5 rounded-md h-full w-full">
                                    <span><img className="bg-gray-200 p-2 mb-5 rounded-full ml-auto mr-auto " src="https://i.ibb.co/HFC1hqn/people-1.png" alt="home-1" /></span>
                                    <RichText
                                        className={attributes.titleClass}
                                        style={ { textAlign: attributes.alignment } }
                                        tagName="h1"
                                        onChange={ onChangeTitle }
                                        value={ attributes.title }
                                    />  
                                    <div className="my-5">
                              
                                        {/* <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <p className="text-md text-gray-900 dark:text-gray-100 pl-4">First time, what do I do next?</p>
                                        </div> */}

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
    
                                            
                                            {
                                            //  isSelected ?  
                                            //   <InnerBlocks 
                                            //     template={MY_TEMPLATE}
                                            //     allowedBlocks={ALLOWED_BLOCKS}
                                            //     onChange={ newData =>{ console.log("InnerBlocks data: ", newData) } }
                                            //     />    
                                            //     :""
                                            }                                
                                    </div>
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
                            </div>
                        </div>
                    </div>	
		</div>
	);
}
