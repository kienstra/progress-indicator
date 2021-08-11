/**
 * WordPress dependencies
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { ColorPalette, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Internal dependencies
 */
import { name } from './block.json';

const Edit = ( {
	attributes,
	setAttributes,
} ) => {
	const blockProps = useBlockProps();
	const { colors } = useSelect( ( select ) => select( 'core/block-editor' ).getSettings() );
	return <div { ...blockProps }>

		{ /* For next time, reimplement PHP template here in JS */ }
		<ServerSideRender
			attributes={ attributes }
			block={ name }
		/>
		<InspectorControls>
			<TextControl
				label={ __( 'Number of Steps', 'progress-indicator' ) }
				type="number"
				value={ attributes.numberOfSteps }
				onChange={ ( newValue ) => {
					setAttributes( { numberOfSteps: Number( newValue ) } );
				} }
			/>
			<TextControl
				label={ __( 'Current Step', 'progress-indicator' ) }
				type="number"
				value={ attributes.currentStep }
				onChange={ ( newValue ) => {
					setAttributes( { currentStep: Number( newValue ) } );
				} }
			/>
			<ColorPalette
				label={ __( 'Color', 'progress-indicator' ) }
				colors={ colors }
				value={ attributes.color }
				onChange={ ( newValue ) => setAttributes( { color: newValue } ) }
			/>
		</InspectorControls>
	</div>;
};

export default Edit;
