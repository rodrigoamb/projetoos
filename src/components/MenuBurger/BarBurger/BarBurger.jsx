//import styles
import { ContainerBarBurger } from "./styles";

//import router dom
import { Link } from "react-router-dom";

import { MdClose } from "react-icons/md";

//import assets
import logo from "../../../assets/img/logo.png";

import { auth } from "../../../firebase/firebaseConnection";
import { signOut } from "firebase/auth";

async function handleLogout() {
	await signOut(auth).then(() => {
		localStorage.removeItem("@detailUser");
	});
}

const BarBurger = ({ setMenuIsVisible, menuIsVisible }) => {
	return (
		<ContainerBarBurger menuIsVisible={menuIsVisible}>
			<MdClose className="icon-close" onClick={() => setMenuIsVisible(false)} />

			<img src={logo} alt="logo" />

			<Link to="/admin" className="btn" onClick={() => setMenuIsVisible(false)}>
				Adicionar OS
			</Link>

			<Link
				to="/admin/buscarOs"
				className="btn"
				onClick={() => setMenuIsVisible(false)}
			>
				Pesquisar OS
			</Link>

			<Link
				to="/admin/relatoriosOs"
				className="btn"
				onClick={() => setMenuIsVisible(false)}
			>
				Gráficos / Relatórios
			</Link>

			<Link onClick={handleLogout} className="btn">
				Sair
			</Link>

			<span>v.1.0.0</span>
		</ContainerBarBurger>
	);
};

export default BarBurger;

