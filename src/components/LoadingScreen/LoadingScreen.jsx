import React from "react";
import Loading from "../Loading/Loading";

//import assets
import logo from "../../assets/img/logo.png";

//import styled
import { Container } from "./styles";

const LoadingScreen = () => {
	return (
		<Container>
			<div className="container-content">
				<img src={logo} alt="logo" />
				<div className="text-loading">Carregando...</div>
				<Loading />
			</div>
		</Container>
	);
};

export default LoadingScreen;

