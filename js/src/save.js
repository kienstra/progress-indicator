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
 * The component to save the markup.
 *
 * @return {React.ReactElement} The component.
 */
export default function Save() {
	const blockProps = useBlockProps.save();

	return <div { ...blockProps } />;
}
