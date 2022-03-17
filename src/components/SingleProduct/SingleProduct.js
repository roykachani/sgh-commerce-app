import { useCallback, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { CartContext } from '../../context/Cart';
import { ProductsContext } from '../../context/Products';
import { useCheckoutItem } from '../../hooks/useCheckoutItem';
import { currencyFormat } from '../../utils/currencyConvert';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const SingleProduct = ({ paramId, path }) => {
	const { state, getAllProducts } = useContext(ProductsContext);
	const { cartState } = useContext(CartContext);
	const [image, setImage] = useState(null);
	const [hiddenclass, setHiddenclass] = useState(null);
	const [sizeSelected, setSizeSelected] = useState(null);

	const [checkCartItem] = useCheckoutItem();
	const history = useHistory();

	const shippingPrice = 400;

	const getProducts = useCallback(async () => {
		await getAllProducts();
	}, [getAllProducts]);

	const handleselectImage = (e) => {
		setImage(e.target.currentSrc);
	};

	useEffect(() => {
		if (!state.products) getProducts();
	}, [getProducts, state]);
	useEffect(() => {
		if (!!hiddenclass) setTimeout(() => setHiddenclass(null), 3000);
	}, [hiddenclass]);
	useEffect(() => {
		return () => {
			setHiddenclass(null);
		};
	}, [history]);

	if (state.loading === true)
		return (
			<section className="products_container">
				<div className="text_center">
					<div className="product_card_box empty">Cargando...</div>
				</div>
			</section>
		);

	if (state.products.status === (404 | 500))
		return (
			<section className="products_container">
				<div className="text_center">
					<div className="product_card_box empty">upps! Algo salio mal..</div>
				</div>
			</section>
		);
	else if (!!state) {
		const { products } = state;
		let sizeKey;
		let sizeStockValue;
		let stockSize;

		const item = products.data.find((p) => p._id === paramId);

		/*condicion para src main img*/
		const conditionImage =
			(image === null) & !!item.photos ? item.photos[0] : image;

		const handleSize = (e) => {
			setSizeSelected(e.target.value);
		};

		const handlerItem = () => {
			const [sizeStockSelected] = item.sizes.filter(
				(s) => s.size === sizeSelected
			);
			stockSize = sizeStockSelected.stock;

			const itemCart = {
				id: item._id,
				size: sizeSelected,
				price: item.price,
				title: item.title,
				addQuantity: 1,
				stock: stockSize,
				photos: item.photos,
				SKU: item.SKU,
			};
			checkCartItem(itemCart);
			setHiddenclass(true);
		};

		const newPrice = () => {
			return currencyFormat(item.price);
		};
		return (
			<>
				<div className="container_singleProduct">
					<Breadcrumbs
						path={path}
						category={item.category}
						title={item.title}
					/>
					<div className="box_singleProduct">
						<div className="container_left_images">
							<div className="images_box">
								{item.photos.map((photo, index) => (
									<img
										className={
											photo === image
												? 'options_images active_selected_img'
												: 'options_images'
										}
										key={index}
										src={photo}
										alt={item.title}
										onClick={handleselectImage}
									/>
								))}
							</div>
							<div className="selected_image">
								<img
									className="main_image"
									src={conditionImage}
									alt={item.title}
								/>
							</div>
						</div>
						<div className="container_right_info_product">
							<div className="box_details_product">
								<div className="header_singleProduct">
									<div className="box_title_sp">
										<h1 className="title_sp">{item.title.toUpperCase()}</h1>
									</div>
									<div className="details_sp">
										<p>Detalle: {item.description}</p>
										<p>Color: {item.color}</p>
									</div>
									<div className="box_price_sp">
										<h2 className="price_sp">{newPrice()}</h2>
									</div>
								</div>
								<div className="form_singleProduct">
									<form className="form_sp">
										<label className="selectSize_label">ELIGE TU TALLE</label>
										<div className="box_select_sp">
											<select
												className="selectSize_input"
												name="Size"
												id="Size"
												onChange={handleSize}
											>
												<option
													disabled={(sizeSelected !== null) & true}
													value={null}
												>
													Selecciona una opcion...
												</option>
												{item.sizes.map((s, index) => {
													sizeKey = s.size;
													sizeStockValue = s.stock;
													return (
														<option
															key={index}
															className={
																sizeStockValue === 0
																	? 'option_value_disabled'
																	: ''
															}
															value={sizeKey}
															disabled={sizeStockValue === 0 && true}
														>
															{sizeKey}
														</option>
													);
												})}
											</select>
											{cartState?.messages && (
												<p
													className={
														!!hiddenclass
															? 'message_description_info_sp'
															: 'message_description_info_sp hidden_stock_msg'
													}
												>
													{cartState.messages}
												</p>
											)}
										</div>
										<div className="box_btn_sp">
											<button
												disabled={(sizeSelected == null) & true}
												type="button"
												id={item._id}
												onClick={handlerItem}
												className="btn_primary btn_car_add_sp "
											>
												Agregar +
											</button>
										</div>
									</form>
									<div className="shipping_descrition_box">
										<div className="shipping_description">
											<h3 className="shipping_description_title">
												Envío gratis superando los $8.500
											</h3>
											<h5 className="shipping_description_title subtitle_h5">
												INFORMACION DEL ENVIO
											</h5>
											<span className="shipping_description_info">
												Elige tu método para recibir el producto al hacer el
												checkout
											</span>
											<p className="shipping_description_info title_sp_shippng">
												Envío a domicilio - Entrega prviado - Entrega en 48hs
											</p>
											<p className="shipping_description_info">
												Válido para pedidos en CABA y AMBA. . Los paquetes los
												enviamos a través de nuestro operador logistico privado
												con un costo de ${shippingPrice}.
											</p>
											<p className="shipping_description_info title_sp_shippng">
												Retiro en el local
											</p>
											<p className="shipping_description_info">
												Local Gral. San Martin - Belgrano 3458 Loc 66, prov de
												Buenos Aires. Atencion de Lun. A Sab. de 11 a 19 hs.
												Podes retirar tu compra 48 hs habiles despues de ralizar
												el pago.
											</p>
											<p className="shipping_description_info title_sp_shippng">
												CAMBIOS Y/O DEVOLUCIONES
											</p>
											<p className="shipping_description_info">
												Podrás realizar el cambio personalmente en nuestro local
												o bien, solicitarlo de manera online escribiéndonos a
												info.cavern-store@gmail.com indicando tu número de
												pedido e ítems a devolver.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
};

export default SingleProduct;
