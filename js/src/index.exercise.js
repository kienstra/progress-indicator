/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import block from '../../block.json';
// 🚧 Import the Edit component.
// Import the Save component.

/**
 * @typedef {Object} Attributes The block attributes.
 * @property {string} color         The color of the indicators.
 * @property {number} currentStep   The step that the indicator is on.
 * @property {number} numberOfSteps The total number of steps in the indicator.
 */

// @ts-ignore The declaration file is probably wrong.
registerBlockType( block.name, {
	// 🚧 For property 'edit', pass the Edit component imported above.
	// For property 'save', pass the Save component imported above.
} );
