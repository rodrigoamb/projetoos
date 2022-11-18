import React from "react";
import { useEffect, useState } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const VerticalBarStatus = ({ allDataOs }) => {
	const [year, setYear] = useState(allDataOs[0].dateOS.split("-")[0]);

	const [listEmAberto, setListEmAberto] = useState([]);
	const [listRecebido, setListRecebido] = useState([]);
	const [listFeitoNota, setListFeitoNota] = useState([]);
	const [listBoletoGerado, setListBoletoGerado] = useState([]);

	const [listTotalPerMonth, setListTotalPerMonth] = useState([]);

	useEffect(() => {
		if (allDataOs) {
			const createArrayStatusData = (statusOs) => {
				const totalListStatus = [];

				for (let i = 1; i < 13; i++) {
					const ListMonth = allDataOs.filter(
						(os) =>
							(os.status === statusOs && os.month === `${i}`) ||
							(os.status === statusOs && os.month === `0${i}`)
					);

					const total = ListMonth.length;

					totalListStatus.push(total);
				}

				if (statusOs === "Em aberto") {
					setListEmAberto(totalListStatus);
				}
				if (statusOs === "Recebido") {
					setListRecebido(totalListStatus);
				}
				if (statusOs === "Feito nota") {
					setListFeitoNota(totalListStatus);
				}
				if (statusOs === "Boleto gerado") {
					setListBoletoGerado(totalListStatus);
				}
			};

			createArrayStatusData("Em aberto");
			createArrayStatusData("Recebido");
			createArrayStatusData("Feito nota");
			createArrayStatusData("Boleto gerado");
		}
	}, []);

	useEffect(() => {
		const totalOsPerMonth = () => {
			const total = [];
			for (let i = 0; i < 12; i++) {
				total.push(
					listEmAberto[i] +
						listRecebido[i] +
						listFeitoNota[i] +
						listBoletoGerado[i]
				);
			}
			setListTotalPerMonth(total);
		};

		totalOsPerMonth();
	}, [listEmAberto]);

	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend
	);

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: `Status das OS por mês - Ano: ${year}`,
			},
		},
	};

	const labels = [
		"Janeiro",
		"Fevereiro",
		"Março",
		"Abril",
		"Maio",
		"Junho",
		"Julho",
		"Agosto",
		"Setembro",
		"Outubro",
		"Novembro",
		"Dezembro",
	];

	const data = {
		labels,
		datasets: [
			{
				label: "Em aberto",
				data: listEmAberto,
				backgroundColor: "#DC1E1E",
			},
			{
				label: "Recebido",
				data: listRecebido,
				backgroundColor: "#1E49DC",
			},
			{
				label: "Feito Nota",
				data: listFeitoNota,
				backgroundColor: "#B19712",
			},
			{
				label: "Boleto gerado",
				data: listBoletoGerado,
				backgroundColor: "#12A1B1",
			},
			{
				label: "Total",
				data: listTotalPerMonth,
				backgroundColor: "#cd87ff",
			},
		],
	};

	return <Bar options={options} data={data} />;
};

export default VerticalBarStatus;

