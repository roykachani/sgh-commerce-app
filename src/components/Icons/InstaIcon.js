const InstaIcon = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		width="1.7em"
		height="1.7em"
		viewBox="0 0 24 24"
		{...props}
	>
		<path fill="none" d="M0 0h24v24H0z" />
		<g fill="#606060">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-3 5a3 3 0 1 0 6 0 3 3 0 0 0-6 0z"
			/>
			<path d="M18 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5zm14 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
			/>
		</g>
	</svg>
);

export default InstaIcon;
