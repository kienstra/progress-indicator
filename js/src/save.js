/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import ProgressIndicator from './progress-indicator';

const Save = ( {
	attributes,
} ) => {
	return <div { ...useBlockProps.save() }>
		<ProgressIndicator attributes={ attributes } />
	</div>;
};

export default Save;
