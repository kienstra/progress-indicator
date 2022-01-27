/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import block from '../../block.json';
// Import the Edit component.
// Import the Save component.

/**
 * @typedef {Object} Attributes The block attributes.
 * @property {string} color         The color of the indicators.
 * @property {number} currentStep   The step that the indicator is on.
 * @property {number} numberOfSteps The total number of steps in the indicator.
 */

// The second argument of registerBlockType() looks very similar to block.json,
// which is imported above as block.
// @ts-ignore The declaration file is probably wrong.
registerBlockType( block.name, {
	// For the apiVersion, pass block.apiVersion.
	// For the title, pass the same value as block.title, but translate it using __().
	// For the description, pass the same description as block.description, but translate it using __().
	// Pass the same attributes, category, icon, and keywords as in block.
	example: {
		/** @type {Attributes} */
		attributes: {
			// Set any value for each of the 3 attributes, as long as it matches the type of the attribute.
			// This is what the preview will look like.
		},
	},
	// For edit, pass the Edit component imported above.
	// For save, pass the Save component imported above.
} );
