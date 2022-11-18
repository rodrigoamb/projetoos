import React, { useState, useEffect } from "react";

//import styles
import { ContainerSearchOrder, ContainerLineList } from "./styles";

//import components
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import ModalDelete from "../ModalDelete/ModalDelete";
import ModalEdit from "../ModalEdit/ModalEdit";

//import firebase
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebaseConnection";

const SearchOrder = () => {
	//states inputs
	const [yearSearch, setYearSearch] = useState("");
	const [yearInput, setYearInput] = useState("");
	const [disabledInputSearch, setDisabledInputSearch] = useState(false);
	const [fitersIsVisible, setFiltersIsVisible] = useState(false);

	//states inputs filter
	const [monthSearch, setMonthSearch] = useState("");
	const [clientSearch, setClientSearch] = useState("");
	const [productionOrderSearch, setProductionOrderSearch] = useState("");
	const [statusSearch, setStatusSearch] = useState("");
	const [titleSearch, setTitleSearch] = useState("");

	//states msg's
	const [isVisibleMsgYear, setIsVisibleMsgYear] = useState(false);
	const [loadedList, setLoadedList] = useState(false);

	//state modals
	const [isVisibleModalDelete, setIsVisibleModalDelete] = useState(false);
	const [isVisibleModalEdit, setIsVisibleModalEdit] = useState(false);

	//state load
	const [loadingIsVisible, setLoadingIsVisible] = useState(false);

	//useState data
	const [dataList, setDataList] = useState([]);
	const [renderList, setRenderList] = useState([]);

	//id e item for modals
	const [itemId, setItemId] = useState("");
	const [itemObj, setItemObj] = useState("");

	useEffect(() => {
		const loadData = async () => {
			setIsVisibleMsgYear(false);
			setLoadingIsVisible(true);

			const unsub = onSnapshot(
				collection(db, `OS${yearSearch}`),
				(snapshot) => {
					let data = [];

					snapshot.forEach((doc) => {
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

					setDataList(data);

					setRenderList(data);

					setLoadingIsVisible(false);
				}
			);
		};

		let filter = dataList.filter(
			(os) =>
				os.title.includes(titleSearch) &&
				os.month.includes(monthSearch) &&
				os.client.includes(clientSearch) &&
				os.productionOrder.includes(productionOrderSearch) &&
				os.status.includes(statusSearch)
		);

		if (filter) {
			setRenderList(filter);
		}

		if (
			titleSearch === "" &&
			monthSearch === "" &&
			clientSearch === "" &&
			productionOrderSearch === "" &&
			statusSearch === ""
		) {
			filter = [];
			loadData();
		}
	}, [
		titleSearch,
		yearSearch,
		monthSearch,
		clientSearch,
		productionOrderSearch,
		statusSearch,
	]);

	const handleSetYear = (e) => {
		e.preventDefault();

		if (yearInput === "") {
			setIsVisibleMsgYear(true);
			return;
		}

		setYearSearch(yearInput);

		setDisabledInputSearch(true);
		setLoadedList(true);
	};

	const clearList = () => {
		setYearSearch("");
		setYearInput("");
		setDataList([]);
		clearFilters();
		setDisabledInputSearch(false);
		setLoadedList(false);
	};

	const clearFilters = () => {
		setTitleSearch("");
		setMonthSearch("");
		setClientSearch("");
		setProductionOrderSearch("");
		setStatusSearch("");
	};

	/* FUNCTIONS ACCORDION LIST */

	const dateFormatting = (date) => {
		return date.split("-").reverse().join("/");
	};

	const pricesFormatting = (price) => {
		return price.replace(".", ",");
	};

	const openModalEdit = (id, item) => {
		setItemId(id);
		setItemObj(item);
		setIsVisibleModalEdit(true);
	};

	const openModalDelete = (id, item) => {
		setItemId(id);
		setItemObj(item);
		setIsVisibleModalDelete(true);
	};

	return (
		<>
			{loadingIsVisible && <LoadingScreen />}
			<ContainerSearchOrder loadedList={loadedList}>
				<div className="limit-container">
					<h1>PESQUISAR ORDEM DE SERVIÇO</h1>
					<div className="container-search">
						<form onSubmit={handleSetYear}>
							<label className="width-inputs">
								<span>Pesquisar por ano*:</span>
								<input
									disabled={disabledInputSearch}
									min={"2022"}
									type="number"
									name="year"
									id="year"
									placeholder="Digite o ano. Ex. 2022"
									value={yearInput}
									onChange={(e) => setYearInput(e.target.value)}
								/>
							</label>
							<div className="container-row-btn">
								{!loadedList && (
									<button type="submit" className="btn-searchOS">
										Buscar OS
									</button>
								)}
								{loadedList && (
									<button
										type="button"
										className="btn-searchOS"
										onClick={() => clearList()}
									>
										Limpar lista
									</button>
								)}
								{isVisibleMsgYear && (
									<p className="msg-error-year">
										Digite o ano para buscar a OS
									</p>
								)}
							</div>
						</form>

						{loadedList && (
							<>
								<span className="title-filters">
									Aplicar filtros na pesquisa:
								</span>
								<div className="container-inputs-filters">
									<label className="width-inputs">
										<span>Filtrar por Título:</span>
										<input
											type="text"
											name="searchTitle"
											id="searchTitle"
											placeholder="Digite o Título da OS"
											value={titleSearch}
											onChange={(e) =>
												setTitleSearch(e.target.value.toUpperCase())
											}
										/>
									</label>
									<label className="width-inputs">
										<span>Filtrar por mês:</span>
										<select
											className="search-status "
											name="Search-status"
											id="Search-month"
											value={monthSearch}
											onChange={(e) => setMonthSearch(e.target.value)}
										>
											<option value="">Selecione um mês.</option>
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
									<label className="width-inputs">
										<span>Filtrar por cliente:</span>
										<input
											type="text"
											name="searchClient"
											id="searchClient"
											placeholder="Digite o nome do cliente"
											value={clientSearch}
											onChange={(e) =>
												setClientSearch(e.target.value.toUpperCase())
											}
										/>
									</label>
									<label className="width-inputs">
										<span>Filtrar por Status:</span>
										<select
											className="search-status"
											name="Search-status"
											id="Search-status"
											placeholder="Selecione um status"
											value={statusSearch}
											onChange={(e) => setStatusSearch(e.target.value)}
										>
											<option value="">Selecione um status</option>
											<option value="Em aberto">Em aberto</option>
											<option value="Recebido">Recebido</option>
											<option value="Feito nota">Feito nota</option>
											<option value="Boleto gerado">Boleto gerado</option>
										</select>
									</label>
									<label className="width-inputs">
										<span>Filtrar por PP:</span>
										<input
											type="text"
											name="searchClient"
											id="searchClient"
											placeholder="Digite o código PP"
											value={productionOrderSearch}
											onChange={(e) =>
												setProductionOrderSearch(e.target.value.toUpperCase())
											}
										/>
									</label>
								</div>
								<button
									type="button"
									className="btn-searchOS"
									onClick={() => clearFilters()}
								>
									Limpar filtros
								</button>
							</>
						)}

						{/* LISTA DE OS - CONTAINER */}

						{renderList.length > 1 ? (
							<div className="count-item">
								Total de OS: {renderList.length} itens.
							</div>
						) : (
							<div className="count-item">
								Total de OS: {renderList.length} item.
							</div>
						)}

						<div className="container-list">
							{renderList?.map((item, index) => (
								<div key={index}>
									<ContainerLineList status={item.status}>
										<details className="lineList">
											<summary className="head-card">
												<span className="statusList">
													<span className="status-color">{item.status}</span>
												</span>
												<span className="client-width">
													<span className="titlesList">Cliente: </span>
													<span>{item.client}</span>
												</span>
												<span className="title-width">
													<span className="titlesList">Título: </span>
													<span>{item.title}</span>
												</span>
												<span className="pp-width">
													<span className="titlesList">PP: </span>
													<span>{item.productionOrder}</span>
												</span>
											</summary>

											<div className="container-description">
												<div className="row-description">
													<span>
														<span className="titlesList">
															Data da entrada:{" "}
														</span>
														{dateFormatting(item.dateOS)}
													</span>

													<span>
														<span className="titlesList">Valor da OS: </span>
														R$ {pricesFormatting(item.priceOrder)}
													</span>

													<div>
														<span className="titlesList">
															Previsão de Recebimento:{" "}
														</span>
														{dateFormatting(item.dateReceive)}
													</div>
												</div>
												<div>
													<div className="titlesList">
														Lista de Fornecedores:{" "}
													</div>
													<div className="row-description-providers">
														{item.listProviders &&
															item.listProviders?.map((item, index) => (
																<div key={index++}>
																	{item.jobProvider} R$ {item.valueProvider}
																</div>
															))}
													</div>
													<div>
														<div className="titlesList">Observações: </div>
														<div>{item.comments}</div>
													</div>
												</div>
												<div className="container-btn">
													<button
														onClick={() => openModalEdit(item.id, item)}
														type="button"
														className="btn-edit"
													>
														Editar
													</button>
													<button
														onClick={() => openModalDelete(item.id, item)}
														type="button"
														className="btn-delete"
													>
														Deletar
													</button>
													{isVisibleModalDelete && (
														<ModalDelete
															setLoadingIsVisible={setLoadingIsVisible}
															clearFilters={clearFilters}
															setIsVisibleModalDelete={setIsVisibleModalDelete}
															item={itemObj}
															id={itemId}
														/>
													)}
													{isVisibleModalEdit && (
														<ModalEdit
															item={itemObj}
															id={itemId}
															setIsVisibleModalEdit={setIsVisibleModalEdit}
															setLoadingIsVisible={setLoadingIsVisible}
															clearFilters={clearFilters}
														/>
													)}
												</div>
											</div>
										</details>
									</ContainerLineList>
								</div>
							))}
							{!loadedList && <p>Digite o ano para exibir a lista de OS</p>}
						</div>
					</div>
				</div>
			</ContainerSearchOrder>
		</>
	);
};

export default SearchOrder;

