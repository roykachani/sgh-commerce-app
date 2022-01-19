import * as React from 'react';

const ArrowForward = (props, className) => (
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
			d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"
		/>
	</svg>
);

export default ArrowForward;
