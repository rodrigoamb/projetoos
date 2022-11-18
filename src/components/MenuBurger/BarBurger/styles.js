import styled from "styled-components";

export const ContainerBarBurger = styled.div`
	display: none;

	@media (max-width: 1000px) {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		width: 90%;
		max-width: 300px;
		height: 100vh;
		min-height: 600px;
		background-color: #ededed;
		display: flex;
		box-shadow: 0 10px 8px rgba(0, 0, 0, 0.5);
		flex-direction: column;
		align-items: center;
		z-index: 5;

		img {
			margin-top: 80px;
			margin-bottom: 50px;
		}

		.btn {
			cursor: pointer;
			background-color: #0287ce;
			border: none;
			border-radius: 10px;
			width: 90%;
			max-width: 275px;
			height: 50px;
			color: #eeeeee;
			letter-spacing: 1.2px;
			transition: 0.2s;
			text-decoration: none;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: 20px;
			text-transform: uppercase;

			&:hover {
				background-color: #015988;
			}
		}

		.icon-close {
			position: absolute;
			right: 10px;
			top: 10px;
			font-size: 2.2rem;
			cursor: pointer;
		}
	}
`;

