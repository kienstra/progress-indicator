/**
 * External dependencies
 */
import * as React from 'react';

/**
 * WordPress dependencies
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { ColorPalette, PanelBody, RangeControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import ProgressIndicator from './progress-indicator';

/**
 * The component for the editor.
 *
 * @param {{
 *  attributes: import('./index').Attributes,
 *  setAttributes: Function
 * }} props
 */
export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	const { colors } = useSelect(
		( select ) => select( 'core/block-editor' ).getSettings()
	);

	return <div { ...blockProps }>
		<ProgressIndicator attributes={ attributes } />
		<InspectorControls>
			<PanelBody title={ __( 'Color', 'progress-indicator' ) }>
				<ColorPalette
					colors={ colors }
					value={ attributes.color }
					onChange={ ( newValue ) =>
						setAttributes( { color: newValue } )
					}
				/>
			</PanelBody>
			<PanelBody title={ __( 'Steps', 'progress-indicator' ) }>
				<RangeControl
					label={ __( 'Current Step', 'progress-indicator' ) }
					value={ attributes.currentStep }
					onChange={ ( newValue ) =>
						setAttributes( { currentStep: Number( newValue ) } )
					}
					min={ 1 }
					max={ attributes.numberOfSteps }
				/>
				<RangeControl
					label={ __( 'Number of Steps', 'progress-indicator' ) }
					value={ attributes.numberOfSteps }
					onChange={ ( newValue ) =>
						setAttributes( { numberOfSteps: Number( newValue ) } )
					}
					min={ 1 }
					max={ 10 }
				/>
			</PanelBody>
		</InspectorControls>
	</div>;
}
