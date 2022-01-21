import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCards = (products) => {
	const p = products;

	const [state, setState] = useState('hidden');

	useEffect(() => {
		setTimeout(() => setState('visible'), 200);
	}, []);

	return (
		<div className={`card_item ${state}`}>
			<div className="card">
				<div className="card_img">
					<img src={p.photos[0]} alt={p.title} className="picture" />
				</div>
				<div className="card_body">
					<div className="card_title">{p.title}</div>
					<div className="card_price">{p.price}</div>
					<div className="card_btns">
						<Link to={`/product/${p._id}`}>
							<button className="btn_secondary btn_card btn_card_secondary">
								ver producto
							</button>
						</Link>
						<button className="btn_primary btn_card btn_card_primary">
							agregar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCards;

//para product
//	{p.photos.map((photo, index) => (
// <img src={photo} alt={p.title} key={index} />
// ))}
