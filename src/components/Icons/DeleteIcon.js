import * as React from 'react';

const DeleteIcon = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		width={24}
		height={24}
		viewBox="0 0 16 16"
		{...props}
	>
		<path
			fill="#bd1111"
			d="M6.5 7v4a.5.5 0 0 0 1 0V7a.5.5 0 0 0-1 0ZM9 6.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5ZM10 4h3a.5.5 0 0 1 0 1h-.553l-.752 6.776A2.5 2.5 0 0 1 9.21 14H6.79a2.5 2.5 0 0 1-2.485-2.224L3.552 5H3a.5.5 0 0 1 0-1h3a2 2 0 1 1 4 0ZM8 3a1 1 0 0 0-1 1h2a1 1 0 0 0-1-1ZM4.559 5l.74 6.666A1.5 1.5 0 0 0 6.79 13h2.42a1.5 1.5 0 0 0 1.49-1.334L11.442 5H4.56Z"
		/>
	</svg>
);

export default DeleteIcon;
