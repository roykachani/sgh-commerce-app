import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { CartContext } from '../../context/Cart';
import { ProductsContext } from '../../context/Products';
import { useCheckPurchase } from '../../hooks/useCheckPurchase';
import { useTotalCart } from '../../hooks/useTotalcart';
import { currencyFormat } from '../../utils/currencyConvert';

import ProductsCheckout from '../ProductsCheckout/ProductsCheckout';
import Loader from '../Loader/Loader';

const CheckoutList = () => {
	const { state, getAllProducts } = useContext(ProductsContext);
	const { cartState, setLoading } = useContext(CartContext);
	const [messagestock, setMessagestock] = useState(null);

	const history = useHistory();
	const [check] = useCheckPurchase();
	const [subTotalPrice, totalPrice, totalShipping, objProductPay] =
		useTotalCart();

	useEffect(() => {
		setLoading();
		getAllProducts();
	}, []);

	useEffect(() => {
		if (state.products?.data) {
			setTimeout(() => {
				const isValidStockcheck = check();

				if (isValidStockcheck.length >= 1) {
					console.log('1');
					setMessagestock(
						'Revisá tu orden, uno o mas productos seleccionados no se encotraron las cantidades que seleccionaste en stock'
					);
				}
			}, 300);
			// if (isValidStockcheck.length == 0) console.log('2');
		}
	}, [state.products]);

	useEffect(() => {
		objProductPay();
	}, [cartState.cartProducts]);

	const handleCheckout = () => {
		if (cartState.totalCart?.subTotal > 0) {
			history.push('/cvn/checkout/onepage');
		} else {
			history.push('/');
		}
	};

	if (cartState.loading === true)
		return (
			<>
				<Loader />
			</>
		);

	return (
		<>
			<div className="checkout_container">
				<div className="checkout_box_title">
					<div className="title_checkout_box">
						<h1 className="title_checkout">CARRITO</h1>
					</div>
					<div className="title_help_box">
						<Link className="help_link" to={'/FAQs'}>
							FAQ
						</Link>
						<span className="help_link slash">|</span>
						<Link className="help_link" to={'/contacto'}>
							Contactanos
						</Link>
					</div>
				</div>
				<div className="checkout_box_display">
					<div className="total_shipping_checkout_box">
						<span className="shipping_price_description">
							{cartState.totalCart.message}
						</span>
					</div>
					<div className="checkout_btn_box">
						<button
							onClick={handleCheckout}
							type="button"
							className="btn_primary btn_procedd_checkout"
						>
							CHECKOUT
						</button>
					</div>
				</div>
				<div className="outstock_checkout">
					{!!messagestock && <p>{messagestock}</p>}
				</div>
				<div className="checkout_cnt_items">
					<div className="checkout_box_subtitles_items">
						<div className="gorup_left">
							<h5 className="subtitle_checkout checkout_size_art">ARTICULO</h5>
							<h5 className="subtitle_checkout checkout_size_description">
								DESCRIPCION
							</h5>
						</div>
						<div className="gorup_right">
							<h5 className="subtitle_checkout">CANTIDAD</h5>
							<h5 className="subtitle_checkout">PRECIO</h5>
							<h5 className="subtitle_checkout">SUBTOTAL</h5>
							<h5 className="subtitle_checkout">QUITAR</h5>
						</div>
					</div>
					<div className="checkout_box_items">
						<ProductsCheckout />
					</div>
				</div>
				<div className="checkout_box_price">
					<div className="checkout_discounts_box">
						<div className="box_discount">
							<h4>CODIGO DE DESCUENTO</h4>
							<label className="label_checkout">Ingrese su código</label>
							<form>
								<input type="text" className="input_checkout" />
								<button type="button" className="btn_discount">
									Aplicar ►
								</button>
							</form>
						</div>
						<div className="box_giftcard">
							<h4>CODIGO DE GIFTCARD</h4>
							<label className="label_checkout">
								Ingrese su código de regalo
							</label>
							<form>
								<input type="text" className="input_checkout" />
								<button type="button" className="btn_primary btn_gift">
									APLICAR CODIGO
								</button>
							</form>
						</div>
					</div>
					<div className="checkout_total_box">
						<div className="subt_box_checkout">
							<h4>SUBTOTAL</h4>
							<h4>ARS {subTotalPrice()}</h4>
						</div>
						<div className="ship_box_checkout">
							<h4>ENVIO</h4>
							<h4>ARS {currencyFormat(totalShipping())}</h4>
						</div>
						<div className="total_box_checkout">
							<h2>TOTAL</h2>
							<h2>ARS {totalPrice()}</h2>
						</div>
					</div>
				</div>
				<div className="checkout_box_button">
					<button
						onClick={handleCheckout}
						type="button"
						className="btn_primary btn_procedd_checkout btn_bottom"
					>
						CHECKOUT
					</button>
				</div>
			</div>
		</>
	);
};

export default CheckoutList;
