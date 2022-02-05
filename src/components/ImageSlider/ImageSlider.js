import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// import ArrowForward from '../Icons/ArrowForward';
// import ArrowBack from '../Icons/ArrowBack';

import './styles.css';

const ImageSlider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const history = useHistory();
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
	// const prevSlide = () => {
	// 	setCurrent(current === 0 ? length - 1 : current - 1);
	// };
	setTimeout(() => {
		nextSlide();
	}, 4000);

	useEffect(() => {
		return () => {
			setCurrent(null);
		};
	}, [history]);

	return (
		<>
			<section className="slider_container">
				{/* <ArrowBack className="left_arrow" onClick={prevSlide} />
				<ArrowForward className="right_arrow" onClick={nextSlide} /> */}
				{slides.map((slide, index) => {
					return (
						<div
							className={
								index === current ? 'box_images active_img' : 'box_images'
							}
							key={index}
						>
							{index === current && (
								<img src={slide.image} alt={slide.alt} className="image" />
							)}
						</div>
					);
				})}
			</section>
		</>
	);
};

export default ImageSlider;
