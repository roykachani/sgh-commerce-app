import Footer from '../Footer/Footer';

const Loader = () => {
	return (
		<>
			<section
				className="form_main_container"
				style={{ flexDirection: 'column' }}
			>
				<h2 style={{ color: '#121212' }}>CARGANDO</h2>
				<p style={{ color: '#121212' }}>verificando stock de productos</p>
			</section>
		</>
	);
};

export default Loader;
