/**
 * WordPress dependencies
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { ColorPalette, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import ProgressIndicator from './progress-indicator';

const Edit = ( {
	attributes,
	setAttributes,
} ) => {
	const { colors } = useSelect( ( select ) => select( 'core/block-editor' ).getSettings() );
	return <div { ...useBlockProps() }>
		<ProgressIndicator attributes={ attributes } />
		<InspectorControls>
			<TextControl
				label={ __( 'Number of Steps', 'progress-indicator' ) }
				type="number"
				value={ attributes.numberOfSteps }
				onChange={ ( newValue ) => {
					setAttributes( { numberOfSteps: Number( newValue ) } );
				} }
				max={ 10 }
			/>
			<TextControl
				label={ __( 'Current Step', 'progress-indicator' ) }
				type="number"
				value={ attributes.currentStep }
				onChange={ ( newValue ) => {
					setAttributes( { currentStep: Number( newValue ) } );
				} }
				max={ attributes.numberOfSteps }
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
