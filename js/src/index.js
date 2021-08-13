/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { apiVersion, name, category, icon, attributes } from './block.json';
import Edit from './edit';
import Save from './save';

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
