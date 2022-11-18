//import styles
import { Container } from "./styles";

//import components
import Sidebar from "../../components/Sidebar/Sidebar";
import MenuBurger from "../../components/MenuBurger/MenuBurger";

//import hooks react
import { useState } from "react";

const Admin = ({ children }) => {
	const [menuIsVisible, setMenuIsVisible] = useState(false);

	return (
		<Container menuIsVisible={menuIsVisible}>
			<MenuBurger
				menuIsVisible={menuIsVisible}
				setMenuIsVisible={setMenuIsVisible}
			/>
			<Sidebar />
			<div className="container-screen">{children}</div>
		</Container>
	);
};

export default Admin;

