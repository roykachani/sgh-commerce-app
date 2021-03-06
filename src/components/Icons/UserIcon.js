const UserIcon = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		width={26}
		height={24}
		viewBox="0 0 32 32"
		{...props}
	>
		<path d="M16 8a5 5 0 1 0 5 5 5 5 0 0 0-5-5z" fill="#22bbae" />
		<path
			d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926 12 12 0 1 1 15.985 0z"
			fill="#22bbae"
		/>
	</svg>
);

export default UserIcon;
