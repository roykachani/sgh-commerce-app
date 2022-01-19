import { AuthProvider } from './context/Auth';
import AppRouter from './routes/AppRourter';
import './App.css';

function App() {
	return (
		<AuthProvider>
			<AppRouter />
		</AuthProvider>
	);
}

export default App;
