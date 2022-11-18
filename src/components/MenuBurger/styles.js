import styled from "styled-components";

export const ContainerMenuBurger = styled.div`
	height: 50px;
	display: flex;
	align-items: center;
	padding: 0 20px;
	background-color: #ededed;
	box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);

	.icon-menu {
		color: #0287ce;
		font-size: 2rem;
		cursor: pointer;
	}

	.out-side-bar {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 5;
		display: block;
		background-color: rgba(0, 0, 0, 0.8);
		width: 100%;
		min-width: 100%;
		height: 100vh;
		min-height: 100vh;
		backdrop-filter: blur(3px);
		transition: 1s;
	}
`;

