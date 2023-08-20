
import { __ } from "@wordpress/i18n";
import { registerBlockType } from '@wordpress/blocks';
import './style.css';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';
import { blockIcon } from "./icons/block-icon";

registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save:Save,
} );
