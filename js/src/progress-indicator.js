/**
 * External dependencies
 */
import * as React from 'react';
import tinycolor from 'tinycolor2';

/**
 * The progress indicator component.
 *
 * @param {{attributes: import('./index').Attributes}} props
 * @return {React.ReactElement} The component.
 */
export default function ProgressIndicator( { attributes } ) {
	return <div className="pi-progress-indicator">
		{ /* Step Lines  */ }
		<div className="pi-progress-indicator__lines">
			{ [ ...Array( attributes.numberOfSteps - 1 ) ].map( ( value, index ) => {
				const isLineComplete = ( attributes.currentStep > index + 1 );

				return <div
					style={ {
						backgroundColor: isLineComplete ? attributes.color : '#d1d5db',

					} }
					key={ index }
					className={ isLineComplete
						? 'pi-progress-indicator__line pi-progress-indicator__complete-line'
						: 'pi-progress-indicator__line'
					}
				/>;
			} ) }
		</div>
		{ /* Step Circles */ }
		{ [ ...Array( attributes.numberOfSteps ) ].map( ( value, index ) => {
			const stepNumber = index + 1;
			let stepClasses = 'pi-progress-indicator__step';
			let style = {};

			if ( attributes.currentStep === stepNumber ) {
				stepClasses += ' pi-progress-indicator__current-step';
				style = {
					color: attributes.color,
					border: `2px solid ${ attributes.color }`,
					boxShadow: `#ffffff 0 0 0 0, ${ tinycolor( attributes.color ).lighten( 43 ).toString() } 0 0 0 4px, #000000 0 0 0 0`,
				};
			} else if ( attributes.currentStep > stepNumber ) {
				stepClasses += ' pi-progress-indicator__complete-step';
				style = {
					backgroundColor: attributes.color,
					color: '#ecfdf5',
					border: `2px solid ${ attributes.color }`,
				};
			}

			return <div key={ index } style={ style } className={ stepClasses }>
				{ attributes.currentStep > stepNumber
					? <svg role="img" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
					</svg>
					: stepNumber
				}
			</div>;
		} ) }
	</div>;
}
