import { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema } from './schema';
import { CartContext } from '../../context/Cart';
import SecureIcon from '../Icons/payment/SecuredIcon';

const ShippingForm = () => {
	const { cartState, addAdress } = useContext(CartContext);
	const history = useHistory();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });
	const onSubmit = (data, e) => {
		addAdress(data);
		history.push('/cvn/checkout/index');
	};
	return (
		<>
			<div className="data_form_container">
				<div className="extra_box">
					<div className="back_products_box">
						<Link to="/" className="back_products">
							◄ CONTINUAR COMPRANDO
						</Link>
					</div>
					<div className="secure_payment_box">
						<div className="icon_secured_box">
							<span className="leyend_secure">Site 100% secure</span>
							<SecureIcon />
						</div>
						<span className="bottom_leyend">SSL secured Web Site</span>
					</div>
				</div>
				<div className="data_form_box_title">
					<h1 className="title_checkout">DETALLES DE FACTURACION</h1>
				</div>
				<div className="data_form_box">
					<form className="form_cnt" onSubmit={handleSubmit(onSubmit)}>
						<h2 className="title_form_Shipping">Datos personales</h2>
						<div className="input_box_shipping">
							<div className="label_box_shipping">
								<label className="label_checkout">NOMBRE</label>
							</div>
							<input
								{...register('name')}
								className="input_checkout"
								type="text"
								name="name"
							/>
							<span className="errors_text shipping_error">
								{errors.name?.message}
							</span>
						</div>
						<div className="input_box_shipping">
							<div className="label_box_shipping">
								<label className="label_checkout">APELLIDO</label>
							</div>
							<input
								{...register('lastname')}
								className="input_checkout"
								type="text"
								name="lastname"
							/>
							<span className="errors_text shipping_error">
								{errors.lastname?.message}
							</span>
						</div>
						<div className="input_box_shipping">
							<div className="label_box_shipping">
								<label className="label_checkout">DNI</label>
							</div>
							<input
								{...register('dni')}
								className="input_checkout"
								type="text"
								name="dni"
							/>
							<span className="errors_text shipping_error">
								{errors.dni?.message}
							</span>
						</div>
						<div className="input_box_shipping">
							<div className="label_box_shipping">
								<label className="label_checkout">TELEFONO DE CONTACTO</label>
							</div>
							<input
								{...register('telephone')}
								className="input_checkout"
								type="text"
								name="telephone"
							/>
							<span className="errors_text shipping_error">
								{errors.telephone?.message}
							</span>
						</div>
						<div className="input_box_shipping">
							<div className="label_box_shipping">
								<label className="label_checkout">CALLE</label>
							</div>
							<input
								{...register('street')}
								className="input_checkout"
								type="adress"
								name="street"
							/>
							<span className="errors_text shipping_error">
								{errors.street?.message}
							</span>
						</div>
						<div className="input_box_shipping">
							<div className="label_box_shipping">
								<label className="label_checkout">
									NÚMERO/PISO/DEPARTAMENTO
								</label>
							</div>
							<input
								{...register('number')}
								placeholder="NÚMERO"
								className="input_checkout input_shipping"
								type="adress"
								name="number"
							/>
							<span className="errors_text shipping_error">
								{errors.number?.message}
							</span>
							<input
								placeholder="PISO"
								className="input_checkout input_shipping"
								type="adress"
								name="floor"
								{...register('floor')}
							/>
							<span className="errors_text shipping_error">
								{errors.floor?.message}
							</span>
							<input
								{...register('apartment')}
								placeholder="DEPARTAMENTO"
								className="input_checkout input_shipping"
								type="adress"
								name="apartment"
							/>
							<span className="errors_text shipping_error">
								{errors.apartment?.message}
							</span>
						</div>
						<div className="input_box_shipping">
							<div className="label_box_shipping">
								<label className="label_checkout">PAÍS</label>
							</div>
							<select
								className="select_input"
								{...register('country')}
								name="country"
							>
								<option value="ARGENTINA">ARGENTINA</option>
							</select>
							<span className="errors_text shipping_error">
								{errors.country?.message}
							</span>
						</div>
						<div className="input_box_shipping">
							<div className="label_box_shipping">
								<label className="label_checkout">PROVINCIA</label>
							</div>
							<select
								{...register('province')}
								className="select_input"
								name="province"
							>
								<option value="Ciudad Autónoma de Buenos Aires">
									Ciudad Autónoma de Buenos Aires
								</option>
								<option value="Buenos Aires - GBA">Buenos Aires - GBA</option>
							</select>
							<span className="errors_text shipping_error">
								{errors.province?.message}
							</span>
						</div>
						<div className="input_box_shipping">
							<div className="label_box_shipping">
								<label className="label_checkout">LOCALIDAD</label>
							</div>
							<input
								{...register('location')}
								className="input_checkout "
								type="adress"
								name="location"
							/>
							<span className="errors_text shipping_error">
								{errors.location?.message}
							</span>
						</div>
						<div className="input_box_shipping">
							<div className="label_box_shipping">
								<label className="label_checkout">CÓDIGO POSTAL</label>
							</div>
							<input
								{...register('postal')}
								className="input_checkout input_shipping"
								type="adress"
								name="postal"
							/>
							<div className="link_box_shipping">
								<a
									className="link_shipping_cp"
									href="https://www.correoargentino.com.ar/formularios/cpa"
									target="_blank"
									rel="noreferrer"
								>
									Consulta tu código postal
								</a>
							</div>
							<span className="errors_text shipping_error">
								{errors.postal?.message}
							</span>
						</div>

						<h2 className="title_form_Shipping">Datos de envío</h2>
						<div className="input_box_shipping">
							<div className="label_box_shipping">
								<label className="label_checkout method_shipping">
									METODO SELECCIONADO
								</label>
							</div>
							<span className="method_shipping_span">
								{cartState.totalCart.shipping === 'store'
									? 'RETIRA EN SUCURSAL'
									: 'ENVIO PRIVADO'}
							</span>
						</div>
						<div className="input_box_shipping">
							<div className="label_box_shipping">
								<label className="label_checkout">CALLE</label>
							</div>
							<input
								{...register('shippingstreet')}
								className="input_checkout"
								type="adress"
								name="shippingstreet"
							/>
							<span className="errors_text shipping_error">
								{errors.shippingstreet?.message}
							</span>
						</div>
						<div className="input_box_shipping">
							<div className="label_box_shipping">
								<label className="label_checkout">
									NÚMERO/PISO/DEPARTAMENTO
								</label>
							</div>
							<input
								{...register('shippingnumber')}
								className="input_checkout input_shipping"
								type="adress"
								name="shippingnumber"
							/>
							<span className="errors_text shipping_error">
								{errors.shippingnumber?.message}
							</span>
							<input
								{...register('shippingfloor')}
								className="input_checkout input_shipping"
								type="adress"
								name="shippingfloor"
							/>
							<span className="errors_text shipping_error">
								{errors.shippingfloor?.message}
							</span>
							<input
								{...register('shippingapartment')}
								className="input_checkout input_shipping"
								type="adress"
								name="shippingapartment"
							/>
							<span className="errors_text shipping_error">
								{errors.shippingapartment?.message}
							</span>
						</div>
						<div className="input_box_shipping">
							<div className="label_box_shipping">
								<label className="label_checkout">PAÍS</label>
							</div>
							<select
								{...register('shippingcountry')}
								className="select_input"
								name="shippingcountry"
							>
								<option value="ARGENTINA">ARGENTINA</option>
							</select>
							<span className="errors_text shipping_error">
								{errors.shippingcountry?.message}
							</span>
						</div>
						<div className="input_box_shipping">
							<div className="label_box_shipping">
								<label className="label_checkout">PROVINCIA</label>
							</div>
							<select
								{...register('shippingprovince')}
								className="select_input"
								name="shippingprovince"
							>
								<option value="Ciudad Autónoma de Buenos Aires">
									Ciudad Autónoma de Buenos Aires
								</option>
								<option value="Buenos Aires - GBA">Buenos Aires - GBA</option>
							</select>
							<span className="errors_text shipping_error">
								{errors.shippingprovince?.message}
							</span>
						</div>
						<div className="input_box_shipping">
							<div className="label_box_shipping">
								<label className="label_checkout">LOCALIDAD</label>
							</div>
							<input
								{...register('shippinglocation')}
								className="input_checkout "
								type="adress"
								name="shippinglocation"
							/>
							<span className="errors_text shipping_error">
								{errors.shippinglocation?.message}
							</span>
						</div>
						<div className="input_box_shipping">
							<div className="label_box_shipping">
								<label className="label_checkout">CÓDIGO POSTAL</label>
							</div>
							<input
								{...register('shippingpostal')}
								className="input_checkout input_shipping"
								type="adress"
								name="shippingpostal"
							/>
							<div className="link_box_shipping">
								<a
									className="link_shipping_cp"
									href="https://www.correoargentino.com.ar/formularios/cpa"
									target="_blank"
									rel="noreferrer"
								>
									Consulta tu código postal
								</a>
							</div>
							<span className="errors_text shipping_error">
								{errors.shippingpostal?.message}
							</span>
						</div>
						<div className="checkout_box_button">
							<button
								type="submit"
								className="btn_primary btn_procedd_checkout btn_bottom"
							>
								PAGAR
							</button>
						</div>
					</form>
				</div>
				<div className="secure_payment_box secure_bottom">
					<div className="icon_secured_box">
						<span className="leyend_secure">Site 100% secure</span>
						<SecureIcon />
					</div>
					<span>SSL secured Web Site</span>
				</div>
			</div>
		</>
	);
};

export default ShippingForm;
