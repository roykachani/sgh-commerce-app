import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { currencyFormat } from '../../utils/currencyConvert';
import './styles.css';

const ProductCards = (products) => {
	const p = products;

	const [state, setState] = useState('hidden');

	useEffect(() => {
		setTimeout(() => setState('visible'), 200);
	}, []);

	const newPrice = () => {
		return currencyFormat(p.price);
	};

	if (p?.condition === 'offer') {
		return (
			<div className={`card_item ${state}`}>
				<div className="card">
					<div className="card_img">
						<Link to={`/product/${p._id}`} className="link_card">
							<img src={p.photos[0]} alt={p.title} className="picture" />
						</Link>
					</div>
					<div className="card_body">
						<div className="card_text_box">
							<Link
								to={`/product/${p._id}`}
								className="link_card link_card_title"
							>
								<p className="card_text card_title">{p.title.toUpperCase()}</p>
							</Link>
							<p className="card_text card_price">{newPrice()}</p>
						</div>
						<div className="card_btns">
							<Link to={`/product/${p._id}`}>
								<button className="btn_secondary btn_card btn_card_secondary">
									ver producto
								</button>
							</Link>
							<button className="btn_primary btn_card btn_card_primary">
								agregar +
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
	if (p?.condition === 'new') {
		return (
			<div className={`card_item ${state}`}>
				<div className="card">
					<div className="card_img">
						<Link to={`/product/${p._id}`} className="link_card">
							<img src={p.photos[0]} alt={p.title} className="picture" />
						</Link>
					</div>
					<div className="card_body">
						<div className="card_text_box">
							<Link
								to={`/product/${p._id}`}
								className="link_card link_card_title"
							>
								<p className="card_text card_title">{p.title.toUpperCase()}</p>
							</Link>
							<p className="card_text card_price">{newPrice()}</p>
						</div>
						<div className="card_btns">
							<Link to={`/product/${p._id}`}>
								<button className="btn_secondary btn_card btn_card_secondary">
									ver producto
								</button>
							</Link>
							<button className="btn_primary btn_card btn_card_primary">
								agregar +
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className={`card_item ${state}`}>
			<div className="card">
				<div className="card_img">
					<Link to={`/product/${p._id}`} className="link_card">
						<img src={p.photos[0]} alt={p.title} className="picture" />
					</Link>
				</div>
				<div className="card_body">
					<div className="card_text_box">
						<Link
							to={`/product/${p._id}`}
							className="link_card link_card_title"
						>
							<p className="card_text card_title">{p.title.toUpperCase()}</p>
						</Link>
						<p className="card_text card_price">{newPrice()}</p>
					</div>
					<div className="card_btns">
						<Link to={`/product/${p._id}`}>
							<button className="btn_secondary btn_card btn_card_secondary">
								ver producto
							</button>
						</Link>
						<button className="btn_primary btn_card btn_card_primary">
							agregar +
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
