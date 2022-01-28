/**
 * External dependencies
 */
import * as React from 'react';

/**
 * WordPress dependencies
 */
// @ts-ignore The declaration file is outdated.
// 🚧 Import useBlockProps from '@wordpress/block-editor'
// See if it needs to have brackets or not, like import { useBlockProps }

/**
 * Internal dependencies
 */
// 🚧 Import ProgressIndicator

/**
 * The component to save the markup.
 *
 * @param {{attributes: import('./index').Attributes}} props
 * @return {React.ReactElement} The component.
 */
export default function Save( { attributes } ) {
	// 🚧 Store a const here
	// Its value should be useBlockProps.save()

	return <div { /* 🚧 Spread the const you stored above, using the ... operator before the const name */ }>
		{ /* 🚧 Render ProgressIndicator, and pass it the prop it expects */ }
	</div>;
}
