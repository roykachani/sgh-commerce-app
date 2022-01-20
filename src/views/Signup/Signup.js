import Header from '../../components/Header/Header';
import Register from '../../components/Register/Register';

const Signup = () => {
	return (
		<>
			<main className="main_container">
				<Header />
				<section className="form_main_container">
					<Register />
				</section>
			</main>
		</>
	);
};

export default Signup;
