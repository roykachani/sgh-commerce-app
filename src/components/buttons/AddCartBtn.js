import { useCheckoutItem } from '../../hooks/useCheckoutItem';

const AddCartBtn = ({ _id, idSize, price, title, sizes, photos }) => {
	const [checkCartItem] = useCheckoutItem();

	let sizeKey;
	let stockSize;

	const handlerItem = (e) => {
		const [sizeSelect] = sizes.filter((s, index) => index === parseInt(idSize));
		[sizeKey] = Object.keys(sizeSelect);
		[stockSize] = Object.values(sizeSelect);
		const item = {
			id: _id,
			size: sizeKey,
			price: price,
			title: title,
			addQuantity: 1,
			stock: stockSize,
			photos: photos,
		};
		checkCartItem(item);
	};
	return (
		<>
			<button
				disabled={idSize === null ? true : false}
				id={_id}
				onClick={handlerItem}
				className="btn_primary btn_car_add_product btn_card_primary "
			>
				Agregar +
			</button>
		</>
	);
};

export default AddCartBtn;
