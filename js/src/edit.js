/**
 * WordPress dependencies
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { RangeControl, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import ProgressIndicator from './progress-indicator';

/**
 * The component for the editor.
 *
 * @param {Object}                       props               The component props.
 * @param {import('./index').Attributes} props.attributes    The block attributes.
 * @param {Function}                     props.setAttributes Sets the new attributes.
 * @return {Function} The component.
 */
export default ( {
	attributes,
	setAttributes,
} ) => {
	const blockProps = useBlockProps();

	return <div { ...blockProps }>
		<ProgressIndicator attributes={ attributes } />
		<InspectorControls>
			<PanelBody>
				<RangeControl
					label={ __( 'Number of Steps', 'progress-indicator' ) }
					value={ attributes.numberOfSteps }
					onChange={ ( newValue ) => {
						setAttributes( { numberOfSteps: Number( newValue ) } );
					} }
					min={ 1 }
					max={ 10 }
				/>
				<RangeControl
					label={ __( 'Current Step', 'progress-indicator' ) }
					value={ attributes.currentStep }
					onChange={ ( newValue ) => {
						setAttributes( { currentStep: Number( newValue ) } );
					} }
					min={ 1 }
					max={ attributes.numberOfSteps }
				/>
			</PanelBody>
		</InspectorControls>
	</div>;
};
