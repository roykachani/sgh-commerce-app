import * as React from 'react';

const SecureIcon = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		width="1em"
		height="1em"
		viewBox="0 0 20 20"
		{...props}
	>
		<path
			fill="#121212"
			d="M16.07 8H15V5s0-5-5-5-5 5-5 5v3H3.93A1.93 1.93 0 0 0 2 9.93v8.15A1.93 1.93 0 0 0 3.93 20h12.14A1.93 1.93 0 0 0 18 18.07V9.93A1.93 1.93 0 0 0 16.07 8zM7 5.5C7 4 7 2 10 2s3 2 3 3.5V8H7zM10 16a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"
		/>
	</svg>
);

export default SecureIcon;