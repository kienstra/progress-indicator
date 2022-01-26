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

const { apiVersion, attributes, category, icon, keywords, name } = block;

/**
 * @typedef {Object} Attributes The block attributes.
 * @property {number} numberOfSteps The total number of steps in the indicator.
 * @property {number} currentStep   The step that the indicator is on.
 * @property {string} color         The color of the indicators.
 */

// @ts-ignore The declaration file is probably wrong.
registerBlockType( name, {
	apiVersion,
	title: __( 'Progress Indicator', 'progress-indicator' ),
	description: __(
		'A block that lets you easily display a progress indicator on your WordPress posts or pages.',
		'progress-indicator',
	),
	attributes,
	category,
	icon,
	keywords,
	example: {
		/** @type {Attributes} */
		attributes: {
			numberOfSteps: 5,
			currentStep: 2,
			color: '#10b981',
		},
	},
	edit: Edit,
	save: Save,
} );
