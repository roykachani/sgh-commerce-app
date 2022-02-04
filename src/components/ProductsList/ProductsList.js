import { useReducer, useEffect } from 'react';
import { FETCHING, FETCH_SUCCESS } from '../../reducers/actions/common';

import { productsReducer, inicialState } from '../../reducers/products';
import ProductCards from '../productCards/productCards';
import { useFetch } from './../../hooks/useFetch';

const ProductsList = () => {
	const [state, dispatch] = useReducer(productsReducer, inicialState);

	const [getData] = useFetch();

	const getProducts = async () => {
		try {
			dispatch({ type: FETCHING });
			const result = await getData(
				`${process.env.REACT_APP_BACK_FETCH_PRODUCTS}`
			);
			// console.log(result.status, 'getproducts');

			if (!!result & (result.status === (404 | 500))) {
				dispatch({ type: FETCHING, payload: result });
				//redirect
				throw Error();
			}
			console.log(result, 'succes getproducts');
			dispatch({ type: FETCH_SUCCESS, payload: result });
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		getProducts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (state.loading === true)
		return (
			<section className="products_container">
				<div className="text_center">
					<h1 className="products_cards_title">PRODUCTOS</h1>
					<div className="product_card_box empty"></div>
				</div>
			</section>
		);
	else if (!!state) {
		console.log(state.products.data, 'datita');
		const { products } = state;
		return (
			<section className="products_container">
				<div className="text_center">
					<h1 className="products_cards_title">PRODUCTOS</h1>
				</div>
				<div className="products_cards_box">
					{products.data.map((p) => (
						<ProductCards key={p._id} {...p} />
					))}
				</div>
			</section>
		);
	}
};

export default ProductsList;
