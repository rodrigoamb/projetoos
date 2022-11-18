import styled from "styled-components";

export const ContainerAddOrder = styled.div`
	width: 100%;
	margin: auto;
	padding: 40px;

	h1 {
		margin-bottom: 20px;
	}

	.label-sm {
		width: 50%;
		max-width: 230px;
		margin-right: 15px;
	}
	.label-md {
		width: 50%;
		max-width: 300px;
		margin-right: 15px;
	}

	.label-lg {
		width: 50%;
		max-width: 600px;
		margin-right: 15px;
	}

	.container-inputs {
		width: 95%;
		margin: auto;
		display: flex;
		flex-direction: column;
	}

	.asterisk {
		color: #ff0000;
		font-size: 1.1rem;
	}

	.message-require {
		font-size: 0.8rem;
		margin-top: 5px;
		margin-left: 10px;
		color: #ff0000;
	}

	.container-line,
	.container-line-2 {
		width: 100%;
		max-width: 1557px;
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 15px;
	}

	.container-line-2 {
		padding: 10px 0;

		justify-content: flex-end;
	}

	.btn-add-provider {
		background-color: #4143a0;
		margin-top: 9px;
	}

	.message-saveOs {
		color: #c71553;
		margin-right: 20px;
		font-size: 1.5rem;
		font-weight: bold;
	}

	.container-list-area {
		width: 100%;
		max-width: 1557px;
		display: flex;
		flex-direction: row;

		.content-list {
			width: 100%;
			max-width: 768px;
			height: 200px;
			background-color: #aaa;
			border-radius: 10px;
			margin-right: 20px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
			overflow-y: auto;
			padding-right: 5px;
		}

		.line-list {
			width: 100%;
			text-align: center;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-between;
			padding: 10px;
			background-color: #ddd;
			margin: 5px 0;
			border-radius: 8px;

			span {
				font-size: 1.2rem;
			}

			button {
				background-color: #ff0000;
				margin-left: 15px;
				width: 100px;
				height: 30px;
			}
		}

		.msg-provider {
			color: #333333;
			margin-top: 80px;
		}

		.content-input-area {
			width: 100%;

			span {
				margin-bottom: 5px;
				color: #333333;
			}
			textarea {
				resize: none;
				height: 170px;
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
	}

	@media (max-width: 1750px) {
		.label-sm,
		.label-md,
		.label-lg {
			width: 100%;
			margin: 0;
			margin-bottom: 10px;
			max-width: 100%;
		}

		.container-list-area {
			flex-direction: column;
		}

		.content-list {
			width: 100%;
			min-width: 100%;
			margin-bottom: 10px;
		}
	}

	@media (max-width: 800px) {
		padding: 20px 10px;

		h1 {
			font-size: 1.4rem;
			text-align: center;
		}

		.container-line {
			flex-direction: column;
			margin-right: 0px;
		}

		.container-list-area {
			flex-direction: column;
		}

		.content-list {
			margin-bottom: 10px;
		}

		.line-list {
			flex-direction: column;
			flex-wrap: nowrap;
			span {
				width: 100%;
				display: flex;
				justify-content: space-between;
			}
		}

		.msg-provider {
			width: 70%;
			text-align: center;
			font-size: 0.9rem;
		}
	}
`;

