import { useCheckoutItem } from '../../hooks/useCheckoutItem';
import { currencyFormat } from '../../utils/currencyConvert';
import DeleteIcon from '../Icons/DeleteIcon';

const ItemCart = (product) => {
	const [checkCartItem] = useCheckoutItem();

	// const { removeItem } = useContext(CartContext);

	const { title, photos, price, size, stock, addQuantity, _index, deleteItem } =
		product;
	const newPrice = () => {
		return currencyFormat(price);
	};
	const newSubPrice = () => {
		return currencyFormat(addQuantity * price);
	};

	const agraegateQuantity = () => {
		if (stock >= addQuantity) {
			const item = {
				...product,
				addQuantity: +1,
			};
			checkCartItem(item);
		}
	};
	const subtractQuantity = (e) => {
		const indexId = e.target.id;
		console.log(indexId);
		const item = {
			...product,
			addQuantity: -1,
		};
		checkCartItem(item);
		if (addQuantity === 1) deleteItem(indexId);
	};

	const removeItem = (e) => {
		const indexId = e.target.id;
		deleteItem(indexId);
	};

	return (
		<>
			<div className="item_cart_menu">
				<DeleteIcon
					className="btn_delete_cart"
					id={_index}
					onClick={removeItem}
				/>
				<div className="photo_min">
					<img className="img_min" src={photos[0]} alt={title} />
				</div>
				<div className="box_text_cart">
					<div className="text_cart_item">{title}</div>
					<div className="price_cart_item">{newPrice()} x uni.</div>
				</div>
				<div className="box_sizes_cart_item">
					<div>{size}</div>
				</div>
				<div className="box_quantity_cart">
					<button
						className="btn_secondary btn_counter_cart"
						onClick={agraegateQuantity}
						disabled={stock === 0}
					>
						+
					</button>
					<p>{addQuantity}</p>
					<button
						className="btn_secondary btn_counter_cart"
						onClick={subtractQuantity}
						id={_index}
						disabled={addQuantity === 0}
					>
						-
					</button>
				</div>
				<div className="box_subprice_cart">{newSubPrice()}</div>
			</div>
		</>
	);
};

export default ItemCart;
