/**
 * External dependencies
 */
import * as React from 'react';

/**
 * WordPress dependencies
 */
// @ts-ignore The declaration file is outdated.
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import ProgressIndicator from './progress-indicator';

/**
 * The component to save the markup.
 *
 * @param {{attributes: import('./index').Attributes}} props
 * @return {React.ReactElement} The component.
 */
export default function Save( { attributes } ) {
	const blockProps = useBlockProps.save();

	return <div { ...blockProps }>
		<ProgressIndicator attributes={ attributes } />
	</div>;
}
