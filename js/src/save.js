/**
 * External dependencies
 */
import * as React from 'react';

/**
 * WordPress dependencies
 */
// @ts-ignore The declaration file is outdated.
import { __ } from '@wordpress/i18n';

/**
 * The component to save the markup.
 *
 * @return {React.ReactElement} The component.
 */
export default function Save() {
	return <span>
		{ __( 'This is a placeholder for the Progress Indicator block', 'progress-indicator' ) }
	</span>;
}
