import { AuthProvider } from './context/Auth';
import { ModalsProvider } from './context/Modal';
import { ProductsProvider } from './context/Products';
import AppRouter from './routes/AppRouter';
import './App.css';
import { CartProvider } from './context/Cart';

function App() {
	return (
		<AuthProvider>
			<CartProvider>
				<ModalsProvider>
					<ProductsProvider>
						<AppRouter />
					</ProductsProvider>
				</ModalsProvider>
			</CartProvider>
		</AuthProvider>
	);
}

export default App;
