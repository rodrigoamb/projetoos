//import styles
import { Container } from "./styles";
//immport react icons
import { MdClose } from "react-icons/md";
import { useState } from "react";
import {
	doc,
	updateDoc,
	addDoc,
	deleteDoc,
	collection,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConnection";

const ModalEdit = ({
	setIsVisibleModalEdit,
	item,
	id,
	clearFilters,
	setLoadingIsVisible,
}) => {
	let year = item.dateOS.split("-")[0];
	const idOs = id;
	let listProviders = item.listProviders;

	const [inputDateOs, setInputDateOs] = useState(item.dateOS);
	const [inputClient, setInputClient] = useState(item.client);
	const [inputComments, setInputComments] = useState(item.comments);
	const [inputDateReceive, setInputDateReceive] = useState(item.dateReceive);
	const [inputPriceOrder, setInputPriceOrder] = useState(item.priceOrder);
	const [inputProductionOrder, setInputProductionOrder] = useState(
		item.productionOrder
	);
	const [inputStatus, setInputStatus] = useState(item.status);
	const [inputTitle, setInputTitle] = useState(item.title);

	const [jobProvider, setJobProvider] = useState("");
	const [valueProvider, setValueProvider] = useState("");
	const [inputListproviders, setInputListProviders] = useState(listProviders);

	//states messages
	const [msgUpdate, setMsgUpdate] = useState("");
	const [visibleMsgUpdate, setVisibleMsgUpdate] = useState(false);

	const HandleAddProvider = () => {
		if (jobProvider === "" || valueProvider === "") {
			return;
		}

		let newProvider = {
			jobProvider,
			valueProvider,
		};

		setInputListProviders([...inputListproviders, newProvider]);

		setJobProvider("");
		setValueProvider("");
	};

	const handleRemoveprovider = (index) => {
		let filtered = inputListproviders.filter((_, i) => i !== index);
		setInputListProviders(filtered);
	};

	const handleUpdateOs = async () => {
		if (inputDateOs === "") {
			setMsgUpdate('O campo "data de entrada" é obrigatório.');
			setVisibleMsgUpdate(true);
			return;
		}

		if (inputTitle === "") {
			setMsgUpdate('O campo "Título" é obrigatório.');
			setVisibleMsgUpdate(true);
			return;
		}

		if (inputClient === "") {
			setMsgUpdate('O campo "Cliente" é obrigatório.');
			setVisibleMsgUpdate(true);
			return;
		}

		if (inputPriceOrder === "") {
			setMsgUpdate('O campo "Valor da OS" é obrigatório.');
			setVisibleMsgUpdate(true);
			return;
		}

		if (inputDateReceive === "") {
			setMsgUpdate('O campo "Previsão de recebimento" é obrigatório.');
			setVisibleMsgUpdate(true);
			return;
		}

		setVisibleMsgUpdate(false);
		setLoadingIsVisible(true);

		if (year != inputDateOs.split("-")[0]) {
			year = inputDateOs.split("-")[0];

			await addDoc(collection(db, "OS" + year), {
				created: new Date(),
				dateOS: inputDateOs,
				month: inputDateOs.split("-")[1],
				status: inputStatus,
				title: inputTitle,
				client: inputClient,
				productionOrder: inputProductionOrder,
				priceOrder: inputPriceOrder,
				dateReceive: inputDateReceive,
				listProviders: inputListproviders,
				comments: inputComments,
			})
				.then(async () => {
					year = item.dateOS.split("-")[0];

					await deleteDoc(doc(db, `OS${year}`, `${idOs}`))
						.then(() => {
							clearFilters();
							setIsVisibleModalEdit(false);
							setLoadingIsVisible(false);
							return;
						})
						.catch((error) => {
							console.log(error);
							setLoadingIsVisible(false);
							return;
						});
				})
				.catch((error) => {
					console.log(error);
					setLoadingIsVisible(false);
					return;
				});
			setLoadingIsVisible(false);
			return;
		} else {
			const docRef = doc(db, `OS${year}`, idOs);
			await updateDoc(docRef, {
				created: new Date(),
				dateOS: inputDateOs,
				month: inputDateOs.split("-")[1],
				status: inputStatus,
				title: inputTitle,
				client: inputClient,
				productionOrder: inputProductionOrder,
				priceOrder: inputPriceOrder,
				dateReceive: inputDateReceive,
				listProviders: inputListproviders,
				comments: inputComments,
			})
				.then(() => {
					clearFilters();
					setLoadingIsVisible(false);
					setIsVisibleModalEdit(false);
					return;
				})
				.catch((error) => {
					console.log(error);
					setLoadingIsVisible(false);
					return;
				});
		}
	};

	const verifyInput = (input) => {
		if (input != "") {
			setMsgUpdate("");
			setVisibleMsgUpdate(false);
		}
	};

	return (
		<Container>
			<div className="limit-content">
				<div className="modal-square">
					<MdClose
						onClick={() => setIsVisibleModalEdit(false)}
						className="icon-close"
					/>
					<span className="title-modal-edit">Editar Item:</span>

					<label className="row-inputs-label">
						<span>Data de entrada*:</span>
						<input
							type="date"
							name="dateOS"
							id="dateOS"
							value={inputDateOs}
							onChange={(e) => setInputDateOs(e.target.value)}
							onBlur={() => verifyInput(inputDateOs)}
						/>
					</label>

					<label className="row-inputs-label">
						<span>Status da OS:</span>
						<select
							className="statusOs"
							name="statusOs"
							id="statusOs"
							value={inputStatus}
							onChange={(e) => setInputStatus(e.target.value)}
						>
							<option value="Em aberto">Em aberto</option>
							<option value="Recebido">Recebido</option>
							<option value="Feito nota">Feito nota</option>
							<option value="Boleto gerado">Boleto gerado</option>
						</select>
					</label>

					<label className="row-inputs-label">
						<span>Título*:</span>
						<input
							type="text"
							name="title"
							id="title"
							placeholder="Digite o título da OS..."
							value={inputTitle}
							onChange={(e) => setInputTitle(e.target.value.toUpperCase())}
							onBlur={() => verifyInput(inputTitle)}
						/>
					</label>

					<label className="row-inputs-label">
						<span>Cliente*:</span>
						<input
							type="text"
							name="client"
							id="client"
							placeholder="Digite o nome do cliente..."
							value={inputClient}
							onChange={(e) => setInputClient(e.target.value.toUpperCase())}
							onBlur={() => verifyInput(inputClient)}
						/>
					</label>

					<label className="row-inputs-label">
						Pedido de Produção:
						<input
							type="text"
							name="pp"
							id="pp"
							placeholder="Digite aqui o pedido de produção..."
							value={inputProductionOrder}
							onChange={(e) =>
								setInputProductionOrder(e.target.value.toUpperCase())
							}
						/>
					</label>

					<label className="row-inputs-label">
						<span>Valor da OS (R$)*:</span>
						<input
							type="number"
							name="value"
							id="value"
							value={inputPriceOrder}
							onChange={(e) => setInputPriceOrder(e.target.value)}
							onBlur={() => verifyInput(inputPriceOrder)}
						/>
					</label>

					<label className="row-inputs-label">
						<span>Previsão de recebimento*:</span>
						<input
							type="date"
							name="receipt"
							id="receipt"
							value={inputDateReceive}
							onChange={(e) => setInputDateReceive(e.target.value)}
							onBlur={() => verifyInput(inputDateReceive)}
						/>
					</label>

					<label className="row-inputs-label">
						<span>Adicionar Fornecedor:</span>
						<input
							type="text"
							name="provider"
							id="provider"
							placeholder="Digite o nome do fornecedor"
							value={jobProvider}
							onChange={(e) => setJobProvider(e.target.value.toUpperCase())}
						/>
					</label>

					<label className="row-inputs-label">
						<span>Valor do fornecedor (R$):</span>
						<input
							type="number"
							name="newValueProvider"
							id="newValueProvider"
							placeholder="Digite o valor do fornecedor"
							value={valueProvider}
							onChange={(e) => setValueProvider(e.target.value)}
						/>
					</label>

					<div className="row-btn">
						<button className="btn-update" onClick={() => HandleAddProvider()}>
							Adicionar fornecedor
						</button>
					</div>

					<div className="container-scroll">
						{inputListproviders &&
							inputListproviders.map((provider, index) => (
								<div className="list-providers" key={index}>
									<span>{provider.jobProvider}</span>
									<span>R$ {provider.valueProvider}</span>
									<button
										type="button"
										className="delete-list-provider"
										onClick={() => handleRemoveprovider(index)}
									>
										Excluir
									</button>
								</div>
							))}
					</div>

					<label className="content-input-area">
						<span>Observações Gerais:</span>
						<textarea
							name="obs"
							id="obs"
							value={inputComments}
							onChange={(e) => setInputComments(e.target.value.toUpperCase())}
						></textarea>
					</label>

					<div className="row-btn">
						<button className="btn-update" onClick={() => handleUpdateOs()}>
							Atualizar OS
						</button>
					</div>
					{visibleMsgUpdate && <span className="msg-update">{msgUpdate}</span>}
				</div>
			</div>
		</Container>
	);
};

export default ModalEdit;

