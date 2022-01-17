/**
 * WordPress dependencies
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { ColorPalette, TextControl, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import ProgressIndicator from './progress-indicator';

const Edit = ( {
	attributes,
	setAttributes,
} ) => {
	const blockProps = useBlockProps();
	const { colors } = useSelect( ( select ) => select( 'core/block-editor' ).getSettings() );

	return <div { ...blockProps }>
		<ProgressIndicator attributes={ attributes } />
		<InspectorControls>
			<PanelBody>
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
					label="Here is a label"
					colors={ colors }
					value={ attributes.lightColor }
					onChange={ ( newValue ) => setAttributes( { lightColor: newValue } ) }
				/>
				<ColorPalette
					colors={ colors }
					value={ attributes.darkColor }
					onChange={ ( newValue ) => setAttributes( { darkColor: newValue } ) }
				/>
			</PanelBody>
		</InspectorControls>
	</div>;
};

export default Edit;
