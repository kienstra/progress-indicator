/**
 * External dependencies
 */
import * as React from 'react';

/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import ProgressIndicator from './progress-indicator';

/**
 * The component to save the markup.
 *
 * @param {{attributes: import('./').Attributes}} props
 */
export default function Save( { attributes } ) {
	const blockProps = useBlockProps.save();

	return <div { ...blockProps }>
		<ProgressIndicator attributes={ attributes } />
	</div>;
}
