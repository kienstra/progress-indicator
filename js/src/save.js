/**
 * External dependencies
 */
import * as React from 'react';

/**
 * WordPress dependencies
 */
// @ts-ignore: declaration file is outdated.
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import ProgressIndicator from './progress-indicator';

/**
 * The component to save the markup.
 *
 * @param {Object}                       props            The component props.
 * @param {import('./index').Attributes} props.attributes The block attributes.
 * @return {React.ReactElement} The component.
 */
export default ( {
	attributes,
} ) => {
	const blockProps = useBlockProps.save();

	return <div { ...blockProps }>
		<ProgressIndicator attributes={ attributes } />
	</div>;
};
