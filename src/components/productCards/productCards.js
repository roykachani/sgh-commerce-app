import React from 'react';

const ProductCards = ({ products }) => {
	return (
		<div className="cards_box">
			{products.map((p) => {
				<div className="card_item">
					<div className="card_img">{p.photo}</div>
					<div className="card_body">
						<div className="card_title">{p.title}</div>
						<div className="card_price">{p.price}</div>
						<div className="card_btns"></div>
					</div>
				</div>;
			})}
		</div>
	);
};

export default ProductCards;
