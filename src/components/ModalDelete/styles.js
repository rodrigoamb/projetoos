import styled from "styled-components";

export const ContainerModalDelete = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 10;
	min-height: 100vh;
	min-width: 100%;

	z-index: 10;
	.limit-content {
		width: 100%;
		min-height: 100vh;
		padding: 40px 0;
		display: flex;
		justify-content: center;
		align-items: center;
		backdrop-filter: blur(2px);
		background-color: rgba(0, 0, 0, 0.8);
		z-index: 15;
	}

	.modal-square {
		background-color: #d9d9d9;
		text-align: center;
		width: 90%;
		max-width: 700px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 20px;
		padding: 25px;
		position: relative;
		z-index: 15;
	}

	.icon-close {
		font-size: 2.5rem;
		position: absolute;
		top: 15px;
		right: 15px;
		cursor: pointer;
		padding: 3px;
		&:hover {
			border: 2px solid black;
			border-radius: 3px;
			background-color: #0287ce;
			color: #eee;
		}
	}

	.title-modal-delete {
		margin-top: 30px;
		font-size: 1.8rem;
		font-weight: bold;
	}

	.title-modal-os {
		margin-top: 30px;
		font-size: 1.5rem;
		margin-bottom: 25px;
		font-weight: bold;
	}

	.text-modal-delete {
		font-size: 1.3rem;
		margin-bottom: 25px;
		font-weight: bold;
	}
`;

