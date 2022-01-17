/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import ProgressIndicator from './progress-indicator';

export default ( {
	attributes,
} ) => {
	return <div { ...useBlockProps.save() }>
		<ProgressIndicator attributes={ attributes } />
	</div>;
};
