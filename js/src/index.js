/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import block from '../../block.json';
import Edit from './edit';
import Save from './save';

/**
 * @typedef {Object} Attributes The block attributes.
 * @property {string} color         The color of the indicators.
 * @property {number} currentStep   The step that the indicator is on.
 * @property {number} numberOfSteps The total number of steps in the indicator.
 */

// @ts-ignore The declaration file is probably wrong.
registerBlockType( block.name, {
	edit: Edit,
	save: Save,
} );
