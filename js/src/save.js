/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import ProgressIndicator from './progress-indicator';

export default ( {
	attributes,
} ) => {
	return <div { ...useBlockProps.save() }>
		<ProgressIndicator attributes={ attributes } />
	</div>;
};
