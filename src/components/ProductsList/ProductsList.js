import { useEffect, useContext, useCallback, useState } from 'react';
import { ProductsContext } from '../../context/Products';

import ProductCards from '../productCards/productCards';
import AsideCategories from '../AsideCategories/AsideCategories';

const ProductsList = () => {
	const { state, getAllProducts } = useContext(ProductsContext);

	const [modalId, setModalId] = useState(null); //handler unique modal
	const showModal = (id) => {
		setModalId(id);
	};

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
					<div className="product_card_box empty">Cargando...</div>
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
				<div className="cnt_products">
					<aside className="category_aside">
						<AsideCategories />
					</aside>
					<div className="products_cards_box product_section">
						{products.data.map((p, index) => (
							<ProductCards
								key={index}
								modalId={modalId}
								showModal={showModal}
								{...p}
							/>
						))}
					</div>
				</div>
			</section>
		);
	}
};

export default ProductsList;
