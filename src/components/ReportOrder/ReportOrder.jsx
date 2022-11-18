//import components charts
import VerticalBarChart from "./chartsComponents/VerticalBarChart/VerticalBarChart";
import VerticalBarStatus from "./chartsComponents/VerticalBarStatus/VerticalBarStatus";
import HorizontalBarChartTotal from "./chartsComponents/HorizontalBarChartTotal/HorizontalBarChartTotal";
import LineChart from "./chartsComponents/LineChart/LineChart";

//import loading
import LoadingScreen from "../LoadingScreen/LoadingScreen";

//imports firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConnection";

//import styles
import { ContainerReportOrder } from "./styles";
import { useState } from "react";

//import react-pdf
import PdfMain from "../PdfDocument/PdfMain";

import { toast } from "react-toastify";

const ReportOrder = () => {
	const [year, setYear] = useState("");
	const [disabledInputSearch, setDisabledInputSearch] = useState(false);
	const [controlBtnSearchCharts, setControlBtnSearchCharts] = useState(false);
	const [allDataOs, setAllDataOs] = useState([]);
	const [allDataOsLastYear, setAllDataOsLastYear] = useState([]);
	const [chartsIsVisible, setChartIsVisible] = useState(false);
	const [loadingIsVisible, setLoadingIsVisible] = useState(false);
	const [isVisibleMessage, setIsVisibleMessage] = useState(false);
	const [yearPdf, setYearPdf] = useState("");
	const [monthPdf, setMonthPdf] = useState("");
	const [dataPdf, setDataPdf] = useState([]);
	const [pdfIsVisible, setPdfIsVisible] = useState(false);
	const [isVisibleMessagePdf, setIsVisibleMessagePdf] = useState(false);

	const getDataOs = async () => {
		if (year === "") {
			toast.warn("O campo do ano deve ser preenchido");
			return;
		}

		setLoadingIsVisible(true);

		let listAllOs = [];

		const querySnapshot = await getDocs(collection(db, `OS${year}`));

		if (querySnapshot.docs.length === 0) {
			setChartIsVisible(false);
			setLoadingIsVisible(false);
			setIsVisibleMessage(true);
			return;
		} else {
			setIsVisibleMessage(false);

			querySnapshot.forEach((doc) => {
				listAllOs.push({
					id: doc.id,
					client: doc.data().client,
					comments: doc.data().comments,
					created: doc.data().created,
					dateOS: doc.data().dateOS,
					dateReceive: doc.data().dateReceive,
					listProviders: doc.data().listProviders,
					month: doc.data().month,
					priceOrder: doc.data().priceOrder,
					productionOrder: doc.data().productionOrder,
					status: doc.data().status,
					title: doc.data().title,
				});
			});

			setAllDataOs(listAllOs);

			getDataLastYear(year - 1);

			setChartIsVisible(true);
			setDisabledInputSearch(true);
			setControlBtnSearchCharts(true);
			setLoadingIsVisible(false);
		}
	};

	const getDataLastYear = async (lastYear) => {
		const listAllOsLastyear = [];

		const querySnapshotLastYear = await getDocs(
			collection(db, `OS${lastYear}`)
		);

		if (querySnapshotLastYear.docs.length === 0) {
			setAllDataOsLastYear([]);
			return;
		} else {
			querySnapshotLastYear.forEach((doc) => {
				listAllOsLastyear.push({
					id: doc.id,
					client: doc.data().client,
					comments: doc.data().comments,
					created: doc.data().created,
					dateOS: doc.data().dateOS,
					dateReceive: doc.data().dateReceive,
					listProviders: doc.data().listProviders,
					month: doc.data().month,
					priceOrder: doc.data().priceOrder,
					productionOrder: doc.data().productionOrder,
					status: doc.data().status,
					title: doc.data().title,
				});
			});

			setAllDataOsLastYear(listAllOsLastyear);
		}
	};

	const clearCharts = () => {
		setYear("");
		setAllDataOs([]);
		setAllDataOsLastYear([]);
		setChartIsVisible(false);
		setControlBtnSearchCharts(false);
		setDisabledInputSearch(false);
	};

	const generatePdf = async () => {
		setIsVisibleMessagePdf(false);

		if (yearPdf === "" || monthPdf === "") {
			toast.warn("Os campos de ano e mês são obrigatórios.");
			return;
		}

		if (yearPdf !== "" && monthPdf === "todos") {
			let data = [];

			const querySnapshot = await getDocs(collection(db, `OS${yearPdf}`));

			if (querySnapshot.docs.length === 0) {
				setIsVisibleMessagePdf(true);
				setYearPdf("");
				setMonthPdf("");
				return;
			} else {
				querySnapshot.forEach((doc) => {
					data.push({
						id: doc.id,
						client: doc.data().client,
						comments: doc.data().comments,
						created: doc.data().created,
						dateOS: doc.data().dateOS,
						dateReceive: doc.data().dateReceive,
						listProviders: doc.data().listProviders,
						month: doc.data().month,
						priceOrder: doc.data().priceOrder,
						productionOrder: doc.data().productionOrder,
						status: doc.data().status,
						title: doc.data().title,
					});
				});

				setDataPdf(data);
				setPdfIsVisible(true);
				return;
			}
		}

		if (yearPdf !== "" && monthPdf !== "todos" && monthPdf !== "") {
			let data = [];

			const querySnapshot = await getDocs(collection(db, `OS${yearPdf}`));

			if (querySnapshot.docs.length === 0) {
				setIsVisibleMessagePdf(true);
				setYearPdf("");
				setMonthPdf("");
				return;
			} else {
				querySnapshot.forEach((doc) => {
					data.push({
						id: doc.id,
						client: doc.data().client,
						comments: doc.data().comments,
						created: doc.data().created,
						dateOS: doc.data().dateOS,
						dateReceive: doc.data().dateReceive,
						listProviders: doc.data().listProviders,
						month: doc.data().month,
						priceOrder: doc.data().priceOrder,
						productionOrder: doc.data().productionOrder,
						status: doc.data().status,
						title: doc.data().title,
					});
				});

				const filteredData = data.filter((item) => item.month === monthPdf);

				setDataPdf(filteredData);
				setPdfIsVisible(true);
				return;
			}
		}
	};

	const clearPdf = () => {
		setYearPdf("");
		setMonthPdf("");
		setDataPdf("");
		setPdfIsVisible(false);
	};

	return (
		<ContainerReportOrder>
			{loadingIsVisible && <LoadingScreen />}
			<div className="limit-content">
				<span className="title-report">Gráficos</span>

				<label className="label-year">
					<span>Ano dos gráficos:</span>
					<input
						disabled={disabledInputSearch}
						type="text"
						name="yearReport"
						id="yearReport"
						className="yearReport"
						placeholder="Digite o ano para gerar os gráficos"
						value={year}
						onChange={(e) => setYear(e.target.value)}
					/>
				</label>

				{!controlBtnSearchCharts && (
					<button onClick={() => getDataOs()}>Ver gráficos</button>
				)}
				{controlBtnSearchCharts && (
					<button onClick={() => clearCharts()}>Limpar gráficos</button>
				)}

				{isVisibleMessage && (
					<div className="message">
						Dados não encontrado para o ano pesquisado.
					</div>
				)}

				<div className="container-all-charts">
					{chartsIsVisible && (
						<>
							<div className="row-chart">
								<div className="container-BarChart">
									<VerticalBarChart allDataOs={allDataOs} />
								</div>
								<div className="container-BarChart">
									<VerticalBarStatus allDataOs={allDataOs} />
								</div>
							</div>

							<div className="row-chart">
								<div className="container-BarChart-Horizontal">
									<LineChart
										allDataOs={allDataOs}
										allDataOsLastYear={allDataOsLastYear}
									/>
								</div>
								<div className="container-BarChart-Horizontal">
									<HorizontalBarChartTotal
										allDataOs={allDataOs}
										allDataOsLastYear={allDataOsLastYear}
									/>
								</div>
							</div>
						</>
					)}
				</div>

				<hr />

				<span className="title-report">Relatórios</span>

				<div className="row-report-pdf">
					<label className="label-year">
						<span>Ano do relatório:</span>
						<input
							disabled={pdfIsVisible ? true : false}
							type="text"
							name="yearReport"
							id="yearReport"
							className="yearReport"
							placeholder="Digite o ano para gerar os gráficos"
							value={yearPdf}
							onChange={(e) => setYearPdf(e.target.value)}
						/>
					</label>
					<label className="label-year">
						<span>Período do relatório:</span>
						<select
							disabled={pdfIsVisible ? true : false}
							className="search-status "
							name="Search-status"
							id="Search-month"
							value={monthPdf}
							onChange={(e) => setMonthPdf(e.target.value)}
						>
							<option value="">Selecione uma opção...</option>
							<option value="todos">Todo o ano</option>
							<option value="01">Janeiro</option>
							<option value="02">Fevereiro</option>
							<option value="03">Março</option>
							<option value="04">Abril</option>
							<option value="05">Maio</option>
							<option value="06">Junho</option>
							<option value="07">Julho</option>
							<option value="08">Agosto</option>
							<option value="09">Setembro</option>
							<option value="10">Outubro</option>
							<option value="11">Novembro</option>
							<option value="12">Dezembro</option>
						</select>
					</label>

					{pdfIsVisible ? (
						<button className="btn-download" onClick={() => clearPdf()}>
							Limpar Pesquisa
						</button>
					) : (
						<button className="btn-download" onClick={() => generatePdf()}>
							Gerar PDF
						</button>
					)}

					{isVisibleMessagePdf && (
						<div className="message">
							Dados não encontrado para o ano pesquisado.
						</div>
					)}
					{pdfIsVisible && (
						<PdfMain yearPdf={yearPdf} monthPdf={monthPdf} dataPdf={dataPdf} />
					)}
				</div>
			</div>
		</ContainerReportOrder>
	);
};

export default ReportOrder;

