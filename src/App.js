import { AuthProvider } from './context/Auth';
import { ModalsProvider } from './context/Modal';
import AppRouter from './routes/AppRouter';
import './App.css';

function App() {
	return (
		<ModalsProvider>
			<AuthProvider>
				<AppRouter />
			</AuthProvider>
		</ModalsProvider>
	);
}

export default App;
