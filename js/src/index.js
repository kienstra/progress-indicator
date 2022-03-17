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
 *  color: typeof block.attributes.color.default,
 *  currentStep: typeof block.attributes.currentStep.default,
 *  numberOfSteps: typeof block.attributes.numberOfSteps.default
 * }} Attributes
 */

// @ts-ignore The declaration file is probably wrong.
registerBlockType( block.name, {
	edit,
	save,
} );
