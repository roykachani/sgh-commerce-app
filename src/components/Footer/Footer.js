import React from 'react';
import { Link } from 'react-router-dom';
import InstaIcon from '../Icons/InstaIcon';
import MasterIcon from '../Icons/MasterIcon';
import AmexIcon from '../Icons/payment/AmexIcon';
import MeliIcon from '../Icons/payment/MeliIcon';
import VisaIcon from '../Icons/payment/VisaIcon';
import CardIcon from '../Icons/payment/CardsIcon';

import './styles.css';

export default function Footer() {
	return (
		<>
			<div className="footer_container">
				<div className="footer">
					<div className="info_block">
						<div className="half_sections">
							<div className="info_block_section">
								<h4 className="title_info_block">ATENCION AL CLIENTE</h4>
								<p className="text_info_block">info.cavern-store@gmail.com</p>
							</div>
							<div className="info_block_section">
								<h4 className="title_info_block">CAMBIO GRATIS</h4>
								<p className="text_info_block">hasta 30 días</p>
							</div>
						</div>
						<div className="half_sections">
							<div className="info_block_section">
								<h4 className="title_info_block">SEGUIMIENTOS DE ENVIO</h4>
								<p className="text_info_block">a todo el pais</p>
							</div>
							<div className="info_block_section">
								<h4 className="title_info_block">¿PREGUNTAS?</h4>
								<p className="text_info_block">
									escribinos, estamos para ayudarte
								</p>
							</div>
						</div>
					</div>
					<div className="footer_sections">
						<div className="footer_col_left">
							<div className="customer_service_cnt">
								<div className="footer_links_title">
									<h3 className="">ATENCION AL CLIENTE</h3>
								</div>
								<div className="footer_links">
									<ul className="list_info">
										<li className="info_item_list">
											<Link to="/contacto">
												<a href="/contacto">Contactanos</a>
											</Link>
										</li>
										<li className="info_item_list">
											<Link to="/informacion-de-envios">
												<a href="/informacion-de-envios">
													Informacion de Envios
												</a>
											</Link>
										</li>
										<li className="info_item_list">
											<Link to="/devoluciones-y-cambios">
												<a href="/devoluciones-y-cambios">
													Devoluciones y Cambios
												</a>
											</Link>
										</li>
										<li className="info_item_list">
											<Link to="/seguridad">
												<a href="/seguridad">Seguridad</a>
											</Link>
										</li>
										<li className="info_item_list">
											<Link to="/FAQs">
												<a href="/FAQs">FAQs</a>
											</Link>
										</li>
										<li className="info_item_list">
											<Link to="/arrepentimineto-de-compra">
												<a href="/arrepentimineto-de-compra">
													Arrepentimineto de compra
												</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="company_cnt">
								<div className="footer_links_title">
									<h3 className="">CAVERN STORE</h3>
								</div>
								<div className="footer_links">
									<ul className="list_info">
										<li className="info_item_list">
											<Link to="/la-empresa">
												<a href="/la-empresa">La Empresa</a>
											</Link>
										</li>
										<li className="info_item_list">
											<Link to="/promociones-cavern">
												<a href="/promociones-cavern">Promociones</a>
											</Link>
										</li>
										<li className="info_item_list">
											<Link to="/politicas-de-privacidad">
												<a href="/politicas-de-privacidad">
													Politicas de Privacidad
												</a>
											</Link>
										</li>
										<li className="info_item_list">
											<Link to="/terminos-y-condiciones">
												<a href="/terminos-y-condiciones">
													Terminos y Condiciones
												</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="follow_cnt">
								<div className="footer_links_title">
									<h3>SEGUINOS</h3>
								</div>
								<div className="icons_info">
									<a href="/#">
										<InstaIcon />
									</a>
								</div>
							</div>
							<div className="payment_methods_cnt">
								<div className="footer_links_title">
									<h3>METODOS DE PAGO</h3>
								</div>
								<div className="icons_info payment_info">
									<div className="payment_icon">
										<VisaIcon />
									</div>
									<div className="payment_icon">
										<AmexIcon />
									</div>
									<div className="payment_icon">
										<MasterIcon />
									</div>
									<div className="payment_icon">
										<CardIcon />
									</div>
									<div className="payment_icon">
										<MeliIcon />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer_bottom">
				<p className="copyright">
					2022 CAVERN © - Hecho por{' '}
					<a
						href="https://roykachani.vercel.app"
						target="_blank"
						rel="noreferrer"
						className="linkadres"
					>
						Roy kchani
					</a>
				</p>
			</div>
		</>
	);
}
