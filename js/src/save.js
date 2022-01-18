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
 * @param {Object}                       props            The component props.
 * @param {import('./index').Attributes} props.attributes The block attributes.
 * @return {Function} The component.
 */
export default ( {
	attributes,
} ) => {
	const blockProps = useBlockProps();

	return <div { ...blockProps }>
		<ProgressIndicator attributes={ attributes } />
	</div>;
}
