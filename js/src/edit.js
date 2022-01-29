/**
 * External dependencies
 */
import * as React from 'react';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * The component for the editor.
 *
 * @return {React.ReactElement} The component.
 */
export default function Edit() {
	return <span>
		{ __( 'This is a placeholder for the Progress Indicator block', 'progress-indicator' ) }
	</span>;
}
