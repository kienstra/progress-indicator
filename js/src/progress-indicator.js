/**
 * External dependencies
 */
import * as React from 'react';

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
			{ [ ...Array( attributes.numberOfSteps - 1 ) ].map( ( value, index ) =>
				<div
					key={ index }
					className={ attributes.currentStep > index + 1
						? 'pi-progress-indicator__line pi-progress-indicator__complete-line'
						: 'pi-progress-indicator__line'
					}
				/>,
			) }
		</div>
		{ /* Step Circles */ }
		{ [ ...Array( attributes.numberOfSteps ) ].map( ( value, index ) => {
			const stepNumber = index + 1;
			let stepClasses = 'pi-progress-indicator__step';

			if ( attributes.currentStep === stepNumber ) {
				stepClasses += ' pi-progress-indicator__current-step';
			} else if ( attributes.currentStep > stepNumber ) {
				stepClasses += ' pi-progress-indicator__complete-step';
			}

			return <div key={ index } className={ stepClasses }>
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
