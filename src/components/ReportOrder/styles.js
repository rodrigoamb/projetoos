import styled from "styled-components";

export const ContainerReportOrder = styled.div`
	width: 100%;
	min-height: 100vh;
	padding: 40px;

	.limit-content {
		width: 95%;
		margin: auto;
	}

	.title-report {
		display: block;
		font-size: 2rem;
		font-weight: bold;
		text-transform: uppercase;
		margin-bottom: 20px;
	}

	.label-year {
		width: 95%;
		max-width: 600px;
	}

	.yearReport {
		margin-bottom: 20px;
	}

	.row-chart {
		max-width: 1380px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 15px;
		margin-bottom: 30px;
	}

	.container-BarChart {
		padding: 30px;
		width: 95%;
		max-width: 650px;
		background-color: #eeeeee;
		border-radius: 15px;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
		margin-bottom: 15px;
		margin-right: 30px;
	}

	.container-BarChart-Horizontal {
		padding: 30px;
		width: 95%;
		max-width: 650px;
		background-color: #eeeeee;
		border-radius: 15px;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
		margin-bottom: 15px;
		margin-right: 30px;
	}

	.row-report-pdf {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.btn-download {
		margin-top: 20px;
	}

	.message {
		color: red;
		margin-bottom: 10px;
	}

	hr {
		margin-bottom: 30px;
	}

	button {
		margin-bottom: 15px;
	}

	label {
		margin-bottom: 0;
	}

	@media (max-width: 1860px) {
		.limit-content {
			width: 100%;
		}

		.label-year {
			width: 100%;
			max-width: 100%;
		}

		.row-chart {
			flex-direction: column;
			width: 100%;
			margin-bottom: 0;
			margin-top: 0;
		}

		.container-BarChart,
		.container-BarChart-Horizontal {
			width: 100%;
			max-width: 100%;
			margin-bottom: 20px;
			margin-right: 0;
		}
	}

	@media (max-width: 800px) {
		padding: 20px 10px;

		.container-BarChart,
		.container-BarChart-Horizontal {
			padding: 3px;
		}
	}
`;

