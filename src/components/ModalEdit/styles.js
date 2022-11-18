import styled from "styled-components";

export const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 10;
	min-height: 100vh;
	min-width: 100%;

	.limit-content {
		width: 100%;
		padding: 80px 0;
		display: flex;
		justify-content: center;
		backdrop-filter: blur(2px);
		background-color: rgba(0, 0, 0, 0.8);
		min-height: 100vh;
		min-width: 100%;
	}

	.modal-square {
		background-color: #d9d9d9;
		width: 90%;
		max-width: 700px;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		border-radius: 20px;
		padding: 30px;
		position: relative;
		z-index: 15;
	}

	.icon-close {
		cursor: pointer;
		font-size: 2.5rem;
		position: absolute;
		top: 15px;
		right: 15px;
		padding: 3px;
		&:hover {
			border: 2px solid black;
			border-radius: 3px;
			background-color: #0287ce;
			color: #eee;
		}
	}

	.title-modal-edit {
		margin-top: 10px;
		margin-bottom: 5px;
		font-size: 1.8rem;
		font-weight: bold;
	}

	.row-inputs-label {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-items: stretch;
	}

	.input-provider {
		margin-bottom: 10px;
	}

	.container-scroll {
		display: flex;
		height: 150px;
		flex-direction: column;
		justify-content: stretch;
		overflow-y: auto;
		padding: 5px;
		margin-bottom: 20px;
	}

	.list-providers {
		background-color: #eee;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
		padding: 0 15px;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 8px;
		border-radius: 12px;
		padding: 10px;
	}

	.delete-list-provider {
		width: 70px;
		height: 30px;
		background-color: #da423c;
		transition: 0.2s;

		&:hover {
			background-color: #ff0000;
		}
	}

	.content-input-area {
		width: 100%;

		span {
			margin-bottom: 5px;
			color: #333333;
		}
		textarea {
			resize: none;
			height: 80px;
			border: none;
			border-radius: 10px;
			box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
			font-family: sans-serif;
			font-size: 1rem;
			padding: 15px;
			letter-spacing: 1.1px;
			overflow-y: auto;
		}
	}

	.row-btn {
		display: flex;
		justify-content: center;
		margin-bottom: 10px;
	}

	.msg-update {
		text-align: center;
		color: red;
	}
`;

