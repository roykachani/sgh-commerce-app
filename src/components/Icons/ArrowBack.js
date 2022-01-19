import * as React from 'react';

const ArrowBack = (props, className) => (
	<svg
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		width={46}
		height={48}
		viewBox="0 0 24 24"
		{...props}
	>
		<path
			fill="#e0ff00"
			d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
		/>
	</svg>
);

export default ArrowBack;
