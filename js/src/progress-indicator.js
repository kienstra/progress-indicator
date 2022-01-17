const ProgressIndicator = ( {
	attributes,
} ) => {
	return <div className="gcb-progress-indicator">
		{ /* Step Lines  */ }
		<div className="gcb-progress-indicator__lines">
			{ [ ...Array( attributes.numberOfSteps - 1 ) ].map( ( value, index ) =>
				<div
					key={ index }
					className={ index + 1 < attributes.currentStep
						? 'gcb-progress-indicator__line gcb-progress-indicator__complete-line'
						: 'gcb-progress-indicator__line'
					} />
			) }
		</div>
		{ /* Step Circles */ }
		{ [ ...Array( attributes.numberOfSteps ) ].map( ( value, index ) => {
			let stepClasses = 'gcb-progress-indicator__step';
			const step = index + 1;
			if ( step === attributes.currentStep ) {
				stepClasses += ' gcb-progress-indicator__current-step';
			} else if ( step < attributes.currentStep ) {
				stepClasses += ' gcb-progress-indicator__complete-step';
			}
			return <div
				key={ index }
				className={ stepClasses }
				style={ { backgroundColor: attributes.color } }
			>
				{ step < attributes.currentStep
					? <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 stroke-current text-green-50" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
					</svg>
					: step
				}
			</div>;
		} ) }
	</div>;
};

export default ProgressIndicator;
