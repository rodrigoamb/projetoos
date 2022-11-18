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

import { useEffect, useState } from "react";

const VerticalBarChart = ({ allDataOs }) => {
	const [year, setYear] = useState(allDataOs[0].dateOS.split("-")[0]);
	const [dataAccurate, setDataAccurate] = useState([]);

	useEffect(() => {
		if (allDataOs) {
			const totalPerMonth = [];

			for (let i = 1; i < 13; i++) {
				const ListMonth = allDataOs.filter(
					(os) => os.month === `0${i}` || os.month === `${i}`
				);

				const total = ListMonth.reduce((result, os) => {
					return result + Number(os.priceOrder);
				}, 0);

				totalPerMonth.push(total);
			}

			setDataAccurate(totalPerMonth);
		}
	}, []);

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
				text: `Apurado Bruto por mês - Ano: ${year}`,
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
				label: "Apurado(R$)",
				data: dataAccurate,
				backgroundColor: "#149500",
			},
		],
	};

	return <Bar options={options} data={data} />;
};

export default VerticalBarChart;

