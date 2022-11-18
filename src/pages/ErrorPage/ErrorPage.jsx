import React from "react";

import { Container } from "./styles";

import logo from "../../assets/img/logo.png";

const ErrorPage = () => {
	return (
		<Container>
			<div className="limit-content">
				<img src={logo} alt="logomarca" />
				<div className="error-msg">Erro 404</div>
				<div className="msg">Página não encontrada</div>
			</div>
		</Container>
	);
};

export default ErrorPage;

