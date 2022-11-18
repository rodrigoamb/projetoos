import styled from "styled-components";

export const ContainerHome = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 90%;
		max-width: 500px;

		p {
			text-align: center;
			color: #ff0000;
			margin-bottom: 10px;
			font-size: 0.8rem;
		}
	}

	.container-isLogged {
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 50px;

		span {
			text-align: center;
			margin-bottom: 10px;
			font-weight: bold;
		}
	}
`;

