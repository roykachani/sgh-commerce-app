import { useEffect, useReducer } from 'react';

import { userReducer, inicialState } from '../reducers/user';

export const useFetch = (url, options) => {
	const getData = async () => {
		console.log('getdata', url);

		const response = await fetch(url, options);
		const { data } = await response.json();

		return data;
	};
};
