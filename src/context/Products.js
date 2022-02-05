import { createContext, useReducer } from 'react';

import { productsReducer, inicialState } from '../reducers/products';
import { useFetch } from '../hooks/useFetch';
import { FETCH_ERROR, FETCH_SUCCESS } from '../reducers/actions/common';

export const ProductsContext = createContext({
	state: [],
	getAllProducts: () => {},
});

const { Provider } = ProductsContext;

export const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(productsReducer, inicialState);

	const [getData] = useFetch();

	const getAllProducts = async () => {
		try {
			const result = await getData(
				`${process.env.REACT_APP_BACK_FETCH_PRODUCTS}`
			);
			console.log(result.status, 'getproducts');

			if (!!result & (result.status === (404 | 500))) {
				dispatch({ type: FETCH_ERROR, payload: result });
				throw Error();
			}
			console.log(result, 'succes getproducts');
			dispatch({ type: FETCH_SUCCESS, payload: result });
		} catch (e) {
			console.log(e);
		}
	};

	return <Provider value={{ state, getAllProducts }}>{children}</Provider>;
};
