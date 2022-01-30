import { useReducer } from 'react/cjs/react.development';
import { inicialState, productsReducer } from '../../reducers/products';

const Product = () => {
	const [state, dispatch] = useReducer(productsReducer);
	console.log(state.products);

	return (
		<>
			<div className="main_container">products</div>
		</>
	);
};

export default Product;
