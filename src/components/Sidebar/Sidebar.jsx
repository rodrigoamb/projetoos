//import styles
import { ContainerSidebar } from "./styles";

//import router dom
import { Link } from "react-router-dom";

//import assets
import logo from "../../assets/img/logo.png";

import { auth } from "../../firebase/firebaseConnection";
import { signOut } from "firebase/auth";

const Sidebar = () => {
	async function handleLogout() {
		await signOut(auth).then(() => {
			localStorage.removeItem("@detailUser");
		});
	}

	return (
		<ContainerSidebar>
			<img src={logo} alt="logo" />

			<Link to="/admin" className="btn">
				Adicionar OS
			</Link>

			<Link to="/admin/buscarOs" className="btn">
				Pesquisar OS
			</Link>

			<Link to="/admin/relatoriosOs" className="btn">
				Gráficos / Relatórios
			</Link>

			<Link onClick={handleLogout} className="btn">
				Sair
			</Link>

			<span>v.1.0.0</span>
		</ContainerSidebar>
	);
};

export default Sidebar;

