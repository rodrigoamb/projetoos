import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import BarBurger from "./BarBurger/BarBurger";

import { ContainerMenuBurger } from "./styles";

const MenuBurger = ({ menuIsVisible, setMenuIsVisible }) => {
	return (
		<ContainerMenuBurger menuIsVisible={menuIsVisible}>
			<GiHamburgerMenu
				className="icon-menu"
				onClick={() => setMenuIsVisible(true)}
			/>

			{menuIsVisible && (
				<div className="out-side-bar">
					<BarBurger
						setMenuIsVisible={setMenuIsVisible}
						menuIsVisible={menuIsVisible}
					/>
				</div>
			)}
		</ContainerMenuBurger>
	);
};

export default MenuBurger;

