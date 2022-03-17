export const usePost = () => {
	const postData = async (endPoint, object, config) => {
		try {
			// console.log(object);
			if (!config) {
				const response = await fetch(
					`${process.env.REACT_APP_BACKEND_URL}${endPoint}`,
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},

						body: JSON.stringify(object),
					}
				);
				const data = await response.json();
				// console.log(data, 'datapost');
				return data;
			} else {
				const { Authorization } = config;
				const response = await fetch(
					`${process.env.REACT_APP_BACKEND_URL}${endPoint}`,
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							Authorization: Authorization,
						},

						body: JSON.stringify(object),
					}
				);
				const data = await response.json();
				// console.log(data, 'datapost');
				return data;
			}
		} catch (error) {
			console.log(error, 'error post');
		}
	};
	// console.log(state);

	return [postData];
};
