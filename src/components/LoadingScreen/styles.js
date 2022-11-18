import styled from "styled-components";

export const Container = styled.div`
	min-width: 100%;
	min-height: 100vh;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #c2c2c2;
	z-index: 99;

	.container-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.text-loading {
		color: #0287ce;
		font-size: 1.5rem;
		font-weight: bold;
		margin-bottom: 5px;
	}
`;

