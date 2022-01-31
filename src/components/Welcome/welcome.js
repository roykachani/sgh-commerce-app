import ImageSlider from '../ImageSlider/ImageSlider';
import { SliderData } from '../../utils/SliderData';

import './styles.css';
import { Link } from 'react-router-dom';

export default function welcome() {
	return (
		<>
			<div className="welcome_box">
				<div className="welcome_body">
					<div>
						<h1 className="title">
							<span>ENCONTRA TU OUTFIT</span>
						</h1>
					</div>
					<div className="box_about">
						<div className="brake"></div>
						<div className="text_about">
							<p className="body_desciption">
								Renova tu placard, tenemos disponibles sacos, trajes, camisas y
								mucho mas. Contamos con más de 30 años de trayectoria en el
								comercio de indumentaria masculina. Sponsored by Saggash
								Extreme.
							</p>
							<Link to="/products">
								<button className="btn_secondary btn_products">
									Ver Productos
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="welcome_images">
				<ImageSlider slides={SliderData} />
			</div>
		</>
	);
}
