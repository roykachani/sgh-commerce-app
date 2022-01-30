import * as React from 'react';

const BagIcon = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		width={24}
		height={26}
		viewBox="0 0 24 24"
		{...props}
	>
		<g
			fill="none"
			stroke="#987d2c"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18" />
			<path d="M16 10a4 4 0 0 1-8 0" />
		</g>
	</svg>
);

export default BagIcon;
