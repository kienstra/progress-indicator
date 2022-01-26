/**
 * External dependencies
 */
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

/**
 * Internal dependencies
 */
import ProgressIndicator from './progress-indicator';

test( 'ProgressIndicator with current step of 2/5', () => {
	render(
		<ProgressIndicator
			attributes={ {
				numberOfSteps: 5,
				currentStep: 2,
			} }
		/>
	);

	it.each( [ 2, 3, 4, 5 ], ( number ) => {
		expect( screen.getByText( number ) ).toBeInTheDocument();
	} );

	expect( screen.getAllByRole( 'img' ).length ).toEqual( 1 );
} );

test( 'ProgressIndicator with current step of 5/5', () => {
	render(
		<ProgressIndicator
			attributes={ {
				numberOfSteps: 5,
				currentStep: 5,
			} }
		/>
	);

	expect( screen.queryByText( 4 ) ).not.toBeInTheDocument();
	expect( screen.getByText( 5 ) ).toBeInTheDocument();
	expect( screen.getAllByRole( 'img' ).length ).toEqual( 4 );
} );
