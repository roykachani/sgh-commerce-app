import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ModalContext } from '../../context/Modal';

import { currencyFormat } from '../../utils/currencyConvert';
import AddCartBtn from '../buttons/AddCartBtn';
import CartSizesBtn from '../buttons/CartSizesBtn';
import './styles.css';

const ProductCards = ({
	_id,
	title,
	photos,
	price,
	sizes,
	modalId,
	showModal,
	classSale,
	SKU,
}) => {
	const [classState, setclassState] = useState('hidden');
	const { state } = useContext(ModalContext);

	const [selectSizeState, setSelectSizeState] = useState(false); //handler size select
	const [idSize, setIdSize] = useState(null); // size id

	let sizeKey;
	let sizeStockValue;
	let idModal = _id;

	/* manejo de sizes*/
	const handlerSize = (e) => {
		setIdSize(e.target.id);
		setSelectSizeState(true);
	};

	useEffect(() => {
		setTimeout(() => setclassState('visible'), 200);
	}, []);

	const newPrice = () => {
		return currencyFormat(price);
	};

	return (
		<div className={`card_item ${classState}`}>
			<div className="card">
				<div className="card_img">
					<Link to={`/products/${_id}/${title}`} className="link_card">
						<img src={photos[0]} alt={title} className="picture" />
					</Link>
				</div>
				<div
					id={idModal}
					className={
						!!state.modalSizes & (modalId == idModal)
							? 'size_cnt_list sizes_open'
							: 'size_cnt_list'
					}
				>
					<div className="box_stock">
						{sizes.map((s, index) => {
							sizeKey = s.size;
							sizeStockValue = s.stock;
							return (
								<div
									id={index}
									onClick={handlerSize}
									key={Math.random()}
									className={[
										`${sizeStockValue > 0 ? 'stock' : 'disabled_size'}`,
										`${
											// eslint-disable-next-line eqeqeq
											!!selectSizeState &
											(idSize == index) &
											(sizeStockValue > 0)
												? 'selected_size'
												: ''
										}`,
									].join(' ')}
								>
									{sizeKey}
								</div>
							);
						})}
					</div>
					<div className="btn_cnt_product">
						<AddCartBtn
							_id={_id}
							idSize={idSize}
							price={price}
							title={title}
							sizes={sizes}
							photos={photos}
							SKU={SKU}
						/>
					</div>
				</div>
				<div className="card_body">
					<div className="card_text_box">
						<Link to={`/product/${_id}`} className="link_card link_card_title">
							<p className="card_text card_title">{title.toUpperCase()}</p>
						</Link>
						<p className="card_text card_price">{newPrice()}</p>
					</div>
					<div className="card_btns">
						<Link to={`/products/${_id}/${title}`}>
							<button className="btn_secondary btn_card btn_card_secondary">
								ver producto
							</button>
						</Link>
						{!classSale && (
							<CartSizesBtn id={_id} modalId={modalId} showModal={showModal} />
						)}
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
