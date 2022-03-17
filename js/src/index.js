/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import block from '../../block.json';
import edit from './edit';
import save from './save';

/**
 * @typedef {{
 *  color: string,
 *  currentStep: number,
 *  numberOfSteps: number
 * }} Attributes
 */

// @ts-ignore The declaration file is probably wrong.
registerBlockType( block.name, {
	edit,
	save,
} );
