/**
 * External dependencies
 */
import { render } from '@testing-library/react';

/**
 * WordPress
 */
import '@wordpress/block-editor';
import '@wordpress/components';

/**
 * Internal dependencies
 */
import Edit from './edit';

// Mocks the <InspectorControls> component only, so that the other components in this package behave as usual.
jest.mock( '@wordpress/block-editor', () => {
	return {
		...jest.requireActual( '@wordpress/block-editor' ),
		InspectorControls: ( { children } ) => children,
		useBlockProps: jest.fn(),
	};
} );

jest.mock( '@wordpress/components', () => {
	return {
		...jest.requireActual( '@wordpress/components' ),
		ColorPalette: () => <div></div>,
	};
} );

describe( 'Edit', () => {
	it( 'renders Edit component', () => {
		render( <Edit attributes={ {} } /> );
		screen.getByText( 'Number of Steps' )
	} );
} );
