import { AuthProvider } from './context/Auth';
import { ModalsProvider } from './context/Modal';
import { ProductsProvider } from './context/Products';
import AppRouter from './routes/AppRouter';
import './App.css';

function App() {
	return (
		<ModalsProvider>
			<AuthProvider>
				<ProductsProvider>
					<AppRouter />
				</ProductsProvider>
			</AuthProvider>
		</ModalsProvider>
	);
}

export default App;
