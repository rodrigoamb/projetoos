import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { useEffect, useState } from "react";

const LineChart = ({ allDataOs, allDataOsLastYear }) => {
	const [year, setYear] = useState(allDataOs[0].dateOS.split("-")[0]);

	const [lastYear, setLastYear] = useState(year - 1);

	const [dataAccurate, setDataAccurate] = useState([]);
	const [dataAccurateLastYear, setDataAccurateLastYear] = useState([]);

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

		if (allDataOsLastYear) {
			const totalPerMonthLastYear = [];

			for (let i = 1; i < 13; i++) {
				const ListMonth = allDataOsLastYear.filter(
					(os) => os.month === `0${i}` || os.month === `${i}`
				);

				const total = ListMonth.reduce((result, os) => {
					return result + Number(os.priceOrder);
				}, 0);

				totalPerMonthLastYear.push(total);
			}

			setDataAccurateLastYear(totalPerMonthLastYear);
		}
	}, [allDataOs, allDataOsLastYear]);

	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
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
				text: `Apurado por mês (${year}) em relação ao ano (${lastYear})`,
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
				label: `Apurado ${year} - R$`,
				data: dataAccurate,
				borderColor: "rgb(235, 93, 53)",
				backgroundColor: "rgba(202, 70, 33, 0.5)",
			},
			{
				label: `Apurado ${lastYear} - R$`,
				data: dataAccurateLastYear,
				borderColor: "rgb(175, 175, 175)",
				backgroundColor: "rgba(146, 146, 146, 0.5)",
			},
		],
	};

	return <Line options={options} data={data} />;
};

export default LineChart;

