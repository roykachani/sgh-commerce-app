import { Link } from 'react-router-dom';
import './styles.css';

const VerifyAcount = () => {
	return (
		<>
			<div className="verify_box animate__animated animate__zoomIn">
				<section className="verify_ctn_box">
					<div className="verify_title_box">
						<h2 className="verify_title">Gracias por registrarte!</h2>
					</div>
					<div className="verify_body">
						<p>
							Te enviamos un correo electronico con un link para que actives tu
							cuenta.
						</p>
						<Link className="btn_secondary btn_verify" to="/">
							Ir a home
						</Link>
					</div>
				</section>
			</div>
		</>
	);
};

export default VerifyAcount;
