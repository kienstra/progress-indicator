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

const { apiVersion, name, category, icon, attributes } = block;

/**
 * @typedef {Object} Attributes The block attributes.
 * @property {number} numberOfSteps The total number of steps in the indicator.
 * @property {number} currentStep   The step that the indicator is on.
 */

registerBlockType( name, {
	apiVersion,
	title: __( 'Progress Indicator', 'progress-indicator' ),
	description: __(
		'A block that lets you easily display a progress indicator on your WordPress posts or pages.',
		'progress-indicator'
	),
	keywords: [
		__( 'progress', 'progress-indicator' ),
		__( 'steps', 'progress-indicator' ),
	],
	category,
	icon,
	attributes,
	edit: Edit,
	save: Save,
} );
