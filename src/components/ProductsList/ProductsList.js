import { useEffect, useContext, useCallback } from 'react';
import { ProductsContext } from '../../context/Products';

import ProductCards from '../productCards/productCards';

const ProductsList = () => {
	const { state, getAllProducts } = useContext(ProductsContext);

	const getProducts = useCallback(async () => {
		await getAllProducts();
	}, [getAllProducts]);

	useEffect(() => {
		if (!state.products) getProducts();
	}, [getProducts, state]);

	if (state.loading === true)
		return (
			<section className="products_container">
				<div className="text_center">
					<h1 className="products_cards_title">PRODUCTOS</h1>
					<div className="product_card_box empty"></div>
				</div>
			</section>
		);

	if (state.products.status === (404 | 500))
		return (
			<section className="products_container">
				<div className="text_center">
					<h1 className="products_cards_title">PRODUCTOS</h1>
					<div className="product_card_box empty">upps! Algo salio mal..</div>
				</div>
			</section>
		);
	else if (!!state) {
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
