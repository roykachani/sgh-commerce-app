import { Link } from 'react-router-dom';

import './styles.css';
const Breadcrumbs = ({ path, category, title }) => {
	// const urlPath = path.split('/');

	// const products = urlPath[2];
	return (
		<>
			<div className="bread_container">
				<div className="bread_items">
					<Link className="bread_a" to="/">
						INICIO
					</Link>
				</div>
				<div className="bread_items">
					<span>{' > '}</span>
				</div>
				{!!category && (
					<div className="bread_items">
						<Link
							className={!!category ? 'bread_a' : 'bread_status_on'}
							to="/products"
						>
							PRODUCTOS
						</Link>
					</div>
				)}
				<div className="bread_items">
					<span>{' > '}</span>
				</div>
				{!!category && (
					<div className="bread_items">
						<Link
							className={!!title ? 'bread_a' : 'bread_status_on'}
							to={`/products/categories/${category}`}
						>
							{category.toUpperCase()}
						</Link>
					</div>
				)}
				<div className="bread_items">
					<span>{' > '}</span>
				</div>
				{!!title && (
					<div className="bread_items">
						<span className="bread_status_on">{title.toUpperCase()}</span>
					</div>
				)}
			</div>
		</>
	);
};

export default Breadcrumbs;
