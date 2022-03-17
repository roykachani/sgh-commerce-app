import { useCheckoutItem } from '../../hooks/useCheckoutItem';

const AddCartBtn = ({ _id, idSize, price, title, sizes, photos, SKU }) => {
	const [checkCartItem] = useCheckoutItem();

	let sizeKey;
	let stockSize;

	const handlerItem = (e) => {
		const [sizeSelect] = sizes.filter((s, index) => index === parseInt(idSize));
		console.log(sizeSelect);
		sizeKey = sizeSelect.size;
		stockSize = sizeSelect.stock;
		const item = {
			id: _id,
			size: sizeKey,
			price: price,
			title: title,
			addQuantity: 1,
			stock: stockSize,
			photos: photos,
			SKU: SKU,
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
