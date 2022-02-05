import React from 'react';
import { Link } from 'react-router-dom';
import ProductCards from '../productCards/productCards';

import './styles.css';

export default function ProductsSale() {
	return (
		<>
			<div className="hr"></div>
			<div className="container_product_cards">
				<h2 className="text_center">
					<span className="products_cards_title">New in</span>
				</h2>
				<div className="cnt_cards">
					<div className="box_product_cards">{/* <ProductCards /> */}</div>
				</div>
				<div className="cnt_more_products">
					<div className="btn_box">
						<Link to="/products" className="btn_secondary btn_sale_box">
							Ver mas
						</Link>
					</div>
				</div>
			</div>
			<div className="container_product_cards">
				<h2 className="text_center">
					<span className="products_cards_title">Sale</span>
				</h2>
				<div className="cnt_cards">
					<div className="box_product_cards">{/* <ProductCards /> */}</div>
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
