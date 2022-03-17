/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import block from '../../block.json';
// 🚧 Import the edit component.
// Import the save component.

/**
 * @typedef {{
 *  color: typeof block.attributes.color.default,
 *  currentStep: typeof block.attributes.currentStep.default,
 *  numberOfSteps: typeof block.attributes.numberOfSteps.default
 * }} Attributes
 */

// @ts-ignore The declaration file is wrong.
registerBlockType( block.name, {
	// 🚧 For property 'edit', pass the edit component imported above.
	// For property 'save', pass the save component imported above.
} );
