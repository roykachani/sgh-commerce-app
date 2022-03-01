import { Link } from 'react-router-dom';

const Categories = () => {
	return (
		<>
			<div className="container_category">
				<div className="category_box">
					<h3 className="category_title">Categorias</h3>
					<div className="category_list">
						<ul className="categori_list">
							<li className="category_item_list">
								<Link
									className="category_item_link"
									to="products/categories/camisas"
								>
									Camisas
								</Link>
							</li>
							<li className="category_item_list">
								<Link
									className="category_item_link"
									to="products/categories/trajes"
								>
									Trajes
								</Link>
							</li>
							<li className="category_item_list">
								<Link
									className="category_item_link"
									to="products/categories/sacos"
								>
									Sacos
								</Link>
							</li>
							<li className="category_item_list">
								<Link
									className="category_item_link"
									to="products/categories/pantalones"
								>
									Pantalones
								</Link>
							</li>
							<li className="category_item_list">
								<Link
									className="category_item_link"
									to="products/categories/remeras"
								>
									Remeras
								</Link>
							</li>
							<li className="category_item_list">
								<Link
									className="category_item_link"
									to="products/categories/jeans"
								>
									Jeans
								</Link>
							</li>
							<li className="category_item_list">
								<Link
									className="category_item_link"
									to="products/categories/sweters"
								>
									Sweters
								</Link>
							</li>
							<li className="category_item_list">
								<Link
									className="category_item_link"
									to="products/categories/bermudas"
								>
									Bermudas
								</Link>
							</li>
							<li className="category_item_list">
								<Link
									className="category_item_link"
									to="products/categories/accesorios"
								>
									Accesorios
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Categories;
