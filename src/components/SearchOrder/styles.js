import styled from "styled-components";

export const ContainerSearchOrder = styled.div`
	width: 100%;
	min-height: 100vh;
	padding: 40px;

	h1 {
		margin-bottom: 20px;
	}

	.limit-container {
		width: 95%;
		margin: auto;
	}

	.container-search {
		width: 100%;
		margin-bottom: 50px;
	}

	.container-list {
		background-color: #aaaaaa;
		display: flex;
		flex-direction: column;
		align-items: ${(props) => !props.loadedList && "center"};
		justify-content: ${(props) => (props.loadedList ? "flex-start" : "center")};
		border-radius: 20px;
		border: 2px solid #eee;
		padding: 15px;
		min-height: 350px;
		max-height: 450px;
		overflow-y: auto;
		max-width: 1620px;
	}

	.count-item {
		font-size: 1.1rem;
		font-weight: bold;
		margin-bottom: 5px;
	}

	.btn-searchOS {
		margin-right: 15px;
		margin-bottom: 20px;
	}

	.container-inputs-filters {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin-top: 15px;
	}

	.title-filters {
		font-weight: bold;
		font-size: 1.2rem;
		margin-bottom: 15px;
	}

	.container-row-btn {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		margin-bottom: 15px;
	}

	.msg-error-year {
		color: #ff0000;
		font-weight: bold;
	}

	.width-inputs {
		width: 35%;
		margin-right: 15px;
	}

	@media (max-width: 1600px) {
		.container-inputs-filters {
			flex-direction: column;
		}

		.width-inputs {
			width: 100%;
			margin-right: 15px;
		}
	}

	@media (max-width: 1000px) {
		.limit-container {
			width: 100%;
		}
	}

	@media (max-width: 800px) {
		padding: 20px 10px;
		h1 {
			font-size: 1.4rem;
			text-align: center;
		}
	}
`;

export const ContainerLineList = styled.div`
	.lineList {
		margin-bottom: 10px;

		.head-card {
			background-color: #ddd;
			padding: 15px;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			flex-wrap: wrap;
			border-radius: 8px;
			cursor: pointer;

			span {
				margin: 5px 0;
			}
		}

		.container-description {
			margin-top: -10px;
			border-radius: 8px;
			padding: 20px;
			background-color: #ddd;
			display: flex;
			flex-direction: column;
		}

		.row-description {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			flex-wrap: wrap;
			margin-bottom: 20px;
		}

		.titlesList {
			font-weight: bold;
			margin-right: 5px;
		}

		.row-description-providers {
			display: flex;
			flex-direction: column;
			margin-bottom: 20px;
		}

		.container-btn {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: flex-end;
			margin-top: 15px;
		}

		.btn-edit {
			width: 120px;
			background-color: #0d8400;
			margin-bottom: 10px;

			&:hover {
				background-color: #34a628;
			}
		}

		.btn-delete {
			width: 120px;
			margin-left: 15px;
			background-color: #da423c;
			margin-bottom: 10px;
			transition: 0.2s;

			&:hover {
				background-color: #ff0000;
			}
		}

		.statusList {
			width: 18%;
			display: flex;
			flex-wrap: nowrap;

			.status-color {
				color: #fff;
				padding: 10px;
				border-radius: 5px;
				background-color: ${(props) =>
					props.status === "Em aberto" && `#DC1E1E`};
				background-color: ${(props) =>
					props.status === "Recebido" && `#1E49DC`};
				background-color: ${(props) =>
					props.status === "Feito nota" && `#B19712`};
				background-color: ${(props) =>
					props.status === "Boleto gerado" && `#12A1B1`};
			}
		}

		.client-width {
			width: 30%;
		}

		.title-width {
			width: 30%;
		}

		.pp-width {
			width: 20%;
		}

		@media (max-width: 1300px) {
			.head-card {
				flex-direction: column;
				align-items: flex-start;

				span {
					width: 100%;
				}
			}

			.lineList,
			.statusList {
				text-align: center;
				width: 100%;
			}

			.status-color {
				width: 100%;
			}

			.row-description {
				flex-direction: column;
			}
		}

		@media (max-width: 360px) {
			.container-btn {
				flex-direction: column;

				button {
					width: 100%;
					margin-left: 0px;
				}
			}
		}
	}
`;

