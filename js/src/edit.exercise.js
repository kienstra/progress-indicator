/**
 * External dependencies
 */
import * as React from 'react';

/**
 * WordPress dependencies
 */
// @ts-ignore The declaration file is outdated.
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
// Also import a component from '@wordpress/components' to choose a color, and another component to choose a number: https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * The component for the editor.
 *
 * @param {{
 *  attributes: import('./index').Attributes,
 *  setAttributes: Function
 * }} props
 * @return {React.ReactElement} The component.
 */
export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	const { colors } = useSelect(
		// Add an anonymous function here as an argument to useSelect().
		// The function should accept select as a parameter.
		// Then, it should get the data store with:
		// select( 'core/block-editor' )
		// Call .getSettings() on that data store, and return that.
	);

	return <div { ...blockProps }>
		<p>{ __( 'This is a placeholder for the Progress Indicator block', 'progress-indicator' ) }</p>
		<InspectorControls>
			{ /*
				Add 2 <PanelBody> components here, and give each of them a title prop that's translated with __().

				Inside the 1st <PanelBody>
					Add the component to choose colors that you imported above from '@wordpress/components'. That will be for attributes.color.
				Inside the 2nd <PanelBody>
					Add 2 components to choose numbers that you imported above from '@wordpress/components'. Those will be for attribute.currentStep and attributes.numberOfSteps

				The value prop of those components should be the attribute for it.
				For example, the value of the color component should be attributes.color.
				The onChange prop should be like:

				onChange={ ( newValue ) =>
					setAttributes( { color: newValue } )
				}

				The setAttributes() call should have an object with its property being the attribute name.
				For example, if the attribute name is color, it would be setAttributes( { color: newValue } )
			*/ }
		</InspectorControls>
	</div>;
}
