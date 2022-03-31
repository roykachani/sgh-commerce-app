export const usePost = () => {
	const postData = async (endPoint, object, config) => {
		try {
			console.log(object, 'object');
			if (!config) {
				const response = await fetch(
					`${process.env.REACT_APP_BACKEND_URL}${endPoint}`,
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							// 'Access-Control-Allow-Origin': 'https://localhost:3000',//mp dev
							'Access-Control-Allow-Origin': 'https://cvn-store.vercel.app', //mp prod
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
							'Access-Control-Allow-Origin': 'http://localhost:3000',
							// 'Access-Control-Allow-Origin': 'https://cvn-store.vercel.app', //mp prod
							Authorization: Authorization,
						},

						body: JSON.stringify(object),
					}
				);
				const data = await response.json();
				console.log(data, 'datapost');
				return data;
			}
		} catch (error) {
			console.log(error, 'error post');
		}
	};
	// console.log(state);

	return [postData];
};
