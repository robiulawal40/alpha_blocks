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
    InspectorControls
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

export default function Edit({ attributes, setAttributes }) {

    const onChangeContent = ( newContent ) => {
        setAttributes( { content: newContent } );
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
                <RichText
                    className={ attributes.className }
                    style={ { textAlign: attributes.alignment } }
                    tagName="p"
                    onChange={ onChangeContent }
                    value={ attributes.content }
                />            

        <div class="bg-gray-100">
            <div class="container mx-auto text-black ">
                <div role="article" class="bg-gray-100 py-12 md:px-8">
                    <div class="px-6 xl:px-0">
                        <div class="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8">
                            <div role="cell" class="bg-gray-100">
                                <div class="relative bg-white p-5 rounded-md relative h-full w-full">
                                    <span><img class="bg-gray-200 p-2 mb-5 rounded-full ml-auto mr-auto " src="https://i.ibb.co/HFC1hqn/people-1.png" alt="home-1" /></span>
                                    <h1 class="pb-4 text-2xl font-semibold text-center">Title One 1</h1>
                                    <div class="my-5">
                                        <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <p class="text-md text-gray-900 dark:text-gray-100 pl-4">First time, what do I do next?</p>
                                        </div>
                                        <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <p class="text-md text-gray-900 dark:text-gray-100 pl-4">Changing you profile picture and other information</p>
                                        </div>
                                        <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <p class="text-md text-gray-900 dark:text-gray-100 pl-4">I didnt get a confirmation email, what should I do next</p>
                                        </div>
                                    </div>
                                    <a class="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="javascript:void(0)">
                                        <p>Show All</p>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4338CA" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <line x1="15" y1="16" x2="19" y2="12" />
                                                <line x1="15" y1="8" x2="19" y2="12" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div role="cell" class="bg-gray-100">
                                <div class="relative bg-white p-5 rounded-md relative h-full w-full">
                                    <span><img class="bg-gray-200 p-2 mb-5 rounded-full ml-auto mr-auto" src="https://i.ibb.co/QX80fYm/lock-closed-1.png" alt="home-1" /></span>
                                    <h1 class="pb-4 text-2xl font-semibold text-center">Privacy and Cookies</h1>
                                    <div class="my-5">
                                        <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full ">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <p class="text-md text-gray-900 dark:text-gray-100 pl-4">First time, what do I do next?</p>
                                        </div>
                                        <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <p class="text-md text-gray-900 dark:text-gray-100 pl-4">Changing you profile picture and other information</p>
                                        </div>
                                        <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <p class="text-md text-gray-900 dark:text-gray-100 pl-4">I didnt get a confirmation email, what should I do next</p>
                                        </div>
                                        <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <p class="text-md text-gray-900 dark:text-gray-100 pl-4">What is the refund policy if I have to cancel during the month</p>
                                        </div>
                                    </div>
                                    <a class="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="javascript:void(0)">
                                        <p>Show All</p>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4338CA" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <line x1="15" y1="16" x2="19" y2="12" />
                                                <line x1="15" y1="8" x2="19" y2="12" />
                                            </svg>
                                    </div>
                                    </a>
                                </div>
                            </div>
                            <div role="cell" class="bg-gray-100">
                                <div class="relative bg-white p-5 rounded-md relative h-full w-full">
                                    <span><img class="bg-gray-200 p-2 mb-5 rounded-full ml-auto mr-auto" src="https://i.ibb.co/QX80fYm/lock-closed-1.png" alt="home-1" /></span>
                                    <h1 class="pb-4 text-2xl font-semibold text-center">Privacy and Cookies</h1>
                                    <div class="my-5">
                                        <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <p class="text-md text-gray-900 dark:text-gray-100 pl-4">First time, what do I do next?</p>
                                        </div>
                                        <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <p class="text-md text-gray-900 dark:text-gray-100 pl-4">Changing you profile picture and other information</p>
                                        </div>
                                        <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <p class="text-md text-gray-900 dark:text-gray-100 pl-4">I didnt get a confirmation email, what should I do next</p>
                                        </div>
                                        <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <p class="text-md text-gray-900 dark:text-gray-100 pl-4">What is the refund policy if I have to cancel during the month</p>
                                        </div>
                                    </div>
                                    <a class="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="javascript:void(0)">
                                        <p>Show All</p>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4338CA" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
            </div>
        </div>
	
		</div>
	);
}
