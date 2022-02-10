import React, { useCallback, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../context/Products';
import ProductCards from '../productCards/productCards';
import { getRandoms } from '../../utils/randomProducts';
import './styles.css';

export default function ProductsSale() {
	const { state, getAllProducts } = useContext(ProductsContext);
	const conditiontype = { offer: 'offer', newIn: 'new in' };
	const [randomProducts] = getRandoms();

	const getProducts = useCallback(async () => {
		await getAllProducts();
	}, [getAllProducts]);

	useEffect(() => {
		if (!state.products) getProducts();
	}, [getProducts, state]);

	const { products } = state;

	const randoms = (condition, length = products.data.length) => {
		if (state?.products) {
			const result = randomProducts(products, condition, length);
			return result;
		}
	};

	return (
		<>
			<div className="hr"></div>
			<div className="container_product_cards">
				<h2 className="text_center">
					<span className="products_cards_title">New in</span>
				</h2>
				<div className="cnt_cards">
					<div className="box_product_cards">
						{state?.products && (
							<div className="products_cards_box">
								{randoms(conditiontype.newIn, 3).map((p) => (
									<ProductCards key={p._id} {...p} />
								))}
							</div>
						)}
					</div>
				</div>
				<div className="cnt_more_products">
					<div className="btn_box">
						<Link to="/products" className="btn_secondary btn_sale_box">
							Ver mas
						</Link>
					</div>
				</div>
			</div>
			<div className="container_access_link">
				<div className="box_access_link">
					<div className="banners_access_link">
						<Link className="access_link" to="/products/jeans">
							<div className="access_link_img1 img_link_box">
								<h3 className="banner_link_title">Jeans</h3>
							</div>
						</Link>
						<Link className="access_link" to="/products/camisas">
							<div className="access_link_img2 img_link_box">
								<h3 className="banner_link_title">Camisas</h3>
							</div>
						</Link>
						<Link className="access_link" to="/products/accesorios">
							<div className="access_link_img3 img_link_box">
								<h3 className="banner_link_title">Accesorios</h3>
							</div>
						</Link>
					</div>
				</div>
			</div>
			<div className="container_product_cards">
				<h2 className="text_center">
					<span className="products_cards_title">Sale</span>
				</h2>
				<div className="cnt_cards">
					<div className="box_product_cards">
						{state?.products && (
							<div className="products_cards_box">
								{randoms(conditiontype.offer, 4).map((p) => (
									<ProductCards key={p._id} {...p} />
								))}
							</div>
						)}
					</div>
				</div>
				<div className="cnt_more_products">
					<div className="btn_box">
						<Link to="/products" className="btn_secondary btn_sale_box">
							Ver mas
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
