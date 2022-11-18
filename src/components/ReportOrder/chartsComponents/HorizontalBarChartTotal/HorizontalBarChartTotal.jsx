import React from "react";
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

const HorizontalBarChartTotal = ({ allDataOs, allDataOsLastYear }) => {
	const [year, setYear] = useState(allDataOs[0].dateOS.split("-")[0]);
	const [lastYear, setLastYear] = useState(year - 1);

	const [dataAccurate, setDataAccurate] = useState([]);

	useEffect(() => {
		const data = [];

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
			const totalLastYear = totalPerMonthLastYear.reduce(
				(previous, current) => {
					return previous + current;
				},
				0
			);
			data.push(totalLastYear);
		}

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

			const totalYear = totalPerMonth.reduce((previous, current) => {
				return previous + current;
			}, 0);

			data.push(totalYear);
		}

		setDataAccurate(data);
	}, [allDataOs, allDataOsLastYear]);

	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend
	);

	const options = {
		indexAxis: "y",
		elements: {
			bar: {
				borderWidth: 2,
			},
		},
		responsive: true,
		plugins: {
			legend: {
				position: "bottom",
			},
			title: {
				display: true,
				text: `Total apurado no ano (${year}) em relação ao ano anterior (${lastYear}).`,
			},
		},
	};

	const labels = [lastYear, year];

	const data = {
		labels,
		datasets: [
			{
				label: "Apurado (R$)",
				data: dataAccurate,
				borderColor: "rgb(62, 10, 195)",
				backgroundColor: "rgba(32, 8, 108, 0.5)",
			},
		],
	};

	return <Bar options={options} data={data} />;
};

export default HorizontalBarChartTotal;

