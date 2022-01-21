export const useFetch = () => {
	const getData = async (endPoint, options) => {
		try {
			console.log('getdata endpoint', endPoint);
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}${endPoint}`,
				options
			);
			const data = await response.json();
			console.log(data, 'datafetch ');
			return data;
		} catch (error) {}
	};
	return [getData];
};
