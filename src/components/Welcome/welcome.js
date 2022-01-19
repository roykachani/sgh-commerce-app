import React from 'react';
import ImageSlider from '../ImageSlider/ImageSlider';
import { SliderData } from '../../utils/SliderData';

import './styles.css';

export default function welcome() {
	return (
		<div className="welcome_box">
			<div className="welcome_body">
				<h1 className="title">
					<span>Encontra tu outfit</span>
					<span>Tenemos disponibles sacos, trajes, camisas y mucho mas</span>
				</h1>
				<div className="brake"></div>
				<p className="body_desciption">
					Renova tu placard, tenemos mas de 30 años de trayectoria en el
					comercio de indumentaria masculina, contamos con stock permanente.
					Sponsored by Saggash Extreme.
				</p>
				<button className="btn_products">Ver Productos</button>
			</div>
			<div className="welcome_images">
				<ImageSlider slides={SliderData} />
			</div>
		</div>
	);
}
