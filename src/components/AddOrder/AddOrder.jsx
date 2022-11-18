// import styles
import { useState } from "react";
import { ContainerAddOrder } from "./styles";

//import firebase
import { db } from "../../firebase/firebaseConnection";
import { addDoc, collection } from "firebase/firestore";

//import coponents
import LoadingScreen from "../LoadingScreen/LoadingScreen";

//import toastify
import { toast } from "react-toastify";

const AddOrder = () => {
	// useStates for form
	const [dateOs, setDateOs] = useState("");
	const [status, setStatus] = useState("Em aberto");
	const [title, setTitle] = useState("");
	const [client, setClient] = useState("");
	const [productionOrder, setProductionOrder] = useState("");
	const [priceOrder, setPriceOrder] = useState("");
	const [dateReceive, setDataReceive] = useState("");
	const [comments, setComments] = useState("");

	// useStates for Messages Requires
	const [msgDateOs, setMsgDateOs] = useState(false);
	const [msgTitle, setMsgTitle] = useState(false);
	const [msgClient, setMsgClient] = useState(false);
	const [msgPriceOrder, setMsgPriceOrder] = useState(false);
	const [msgDateReceive, setMsgDateReceive] = useState(false);
	const [msgProvider, setMsgProvider] = useState(false);

	// useStates for add providers list
	const [jobProvider, setJobProvider] = useState("");
	const [valueProvider, setValueProvider] = useState("");
	const [listProviders, setListProviders] = useState([]);

	//useState for Loading
	const [loading, setLoading] = useState(false);

	const cleaningStates = () => {
		setDateOs("");
		setStatus("Em aberto");
		setTitle("");
		setClient("");
		setProductionOrder("");
		setPriceOrder("");
		setDataReceive("");
		setJobProvider("");
		setValueProvider("");
		setListProviders([]);
		setComments("");
		setMsgDateOs(false);
		setMsgTitle(false);
		setMsgClient(false);
		setMsgPriceOrder(false);
		setMsgDateReceive(false);
		setMsgProvider(false);
	};

	const HandleAddProvider = () => {
		if (jobProvider === "" || valueProvider === "") {
			setMsgProvider(true);
			return;
		}

		setMsgProvider(false);

		let newProvider = {
			jobProvider,
			valueProvider,
		};

		setListProviders([...listProviders, newProvider]);

		setJobProvider("");
		setValueProvider("");
	};

	const handleRemoveprovider = (index) => {
		let filtered = listProviders.filter((_, i) => i !== index);
		setListProviders(filtered);
	};

	const handleSaveOs = async (e) => {
		e.preventDefault();

		setLoading(true);

		if (!dateOs) {
			setLoading(false);
			setMsgDateOs(true);
			return;
		}

		if (!title) {
			setLoading(false);
			setMsgTitle(true);
			return;
		}

		if (!client) {
			setLoading(false);
			setMsgClient(true);
			return;
		}

		if (!priceOrder) {
			setLoading(false);
			setMsgPriceOrder(true);
			return;
		}

		if (!dateReceive) {
			setLoading(false);
			setMsgDateReceive(true);
			return;
		}

		const year = dateOs.split("-")[0];
		const month = dateOs.split("-")[1];

		await addDoc(collection(db, "OS" + year), {
			created: new Date(),
			month: month,
			dateOS: dateOs,
			status: status,
			title: title,
			client: client,
			productionOrder: productionOrder,
			priceOrder: priceOrder,
			dateReceive: dateReceive,
			listProviders: listProviders,
			comments: comments,
		})
			.then(() => {
				setLoading(false);
				cleaningStates();
				toast.success("OS salvo com sucesso!");
			})
			.catch((error) => {
				toast.warn("Ocorreu um erro! Tente novamente mais tarde.");
				console.log(error);
			});
	};

	const verifyMsgInputs = () => {
		if (dateOs !== "") {
			setMsgDateOs(false);
		}

		if (title !== "") {
			setMsgTitle(false);
		}

		if (client !== "") {
			setMsgClient(false);
		}

		if (priceOrder !== "") {
			setMsgPriceOrder(false);
		}

		if (dateReceive !== "") {
			setMsgDateReceive(false);
		}
	};

	return (
		<ContainerAddOrder>
			{loading && <LoadingScreen />}
			<div className="container-inputs">
				<h1>ADICIONAR ORDEM DE SERVIÇO</h1>
				<div className="container-line">
					<label className="label-sm">
						<span>
							Data entrada:<span className="asterisk">*</span>
						</span>
						<input
							type="date"
							name="date"
							id="date"
							value={dateOs}
							onChange={(e) => setDateOs(e.target.value)}
							onBlur={() => verifyMsgInputs()}
						/>
						{msgDateOs && (
							<span className="message-require">
								Preencha esse campo com uma data.
							</span>
						)}
					</label>

					<label className="label-sm">
						<span>Status da OS:</span>
						<select
							className="statusOs"
							name="statusOs"
							id="statusOs"
							value={status}
							onChange={(e) => setStatus(e.target.value)}
						>
							<option value="Em aberto">Em aberto</option>
							<option value="Recebido">Recebido</option>
							<option value="Feito nota">Feito nota</option>
							<option value="Boleto gerado">Boleto gerado</option>
						</select>
					</label>
				</div>

				<div className="container-line">
					<label className="label-lg">
						<span>
							Título:<span className="asterisk">*</span>
						</span>
						<input
							type="text"
							name="title"
							id="title"
							placeholder="Digite o título da OS..."
							value={title}
							onChange={(e) => setTitle(e.target.value.toUpperCase())}
							onBlur={() => verifyMsgInputs()}
						/>
						{msgTitle && (
							<span className="message-require">Preencha o título da OS.</span>
						)}
					</label>

					<label className="label-lg">
						<span>
							Cliente:<span className="asterisk">*</span>
						</span>
						<input
							type="text"
							name="client"
							id="client"
							placeholder="Digite o nome do cliente..."
							value={client}
							onChange={(e) => setClient(e.target.value.toUpperCase())}
							onBlur={() => verifyMsgInputs()}
						/>
						{msgClient && (
							<span className="message-require">
								Preencha com o nome do cliente.
							</span>
						)}
					</label>
				</div>

				<div className="container-line">
					<label className="label-lg">
						Pedido de Produção:
						<input
							type="text"
							name="pp"
							id="pp"
							placeholder="Digite aqui o pedido de produção..."
							value={productionOrder}
							onChange={(e) => setProductionOrder(e.target.value.toUpperCase())}
							onBlur={() => verifyMsgInputs()}
						/>
					</label>

					<label className="label-md">
						<span>
							Valor da OS (R$):<span className="asterisk">*</span>
						</span>
						<input
							type="number"
							name="value"
							id="value"
							placeholder="Digite aqui o valor cobrado da OS..."
							value={priceOrder}
							onChange={(e) => setPriceOrder(e.target.value.replace(",", "."))}
							onBlur={() => verifyMsgInputs()}
						/>
						{msgPriceOrder && (
							<span className="message-require">
								Preencha com o valor cobrado.
							</span>
						)}
					</label>
				</div>

				<div className="container-line">
					<label className="label-sm">
						<span>
							Previsão de recebimento:<span className="asterisk">*</span>
						</span>

						<input
							type="date"
							name="receipt"
							id="receipt"
							value={dateReceive}
							onChange={(e) => setDataReceive(e.target.value)}
							onBlur={() => verifyMsgInputs()}
						/>
						{msgDateReceive && (
							<span className="message-require">
								Preencha com a data de recebimento.
							</span>
						)}
					</label>
				</div>

				<div className="container-line">
					<label className="label-lg">
						Adicionar fornecedor:
						<input
							type="text"
							name="providerJob"
							id="providerJob"
							placeholder="Adicione aqui os fornecedores da OS..."
							value={jobProvider}
							onChange={(e) => setJobProvider(e.target.value.toUpperCase())}
						/>
					</label>

					<label className="label-md">
						Preço do fornecedor (R$):
						<input
							type="number"
							name="valueProviderJob"
							id="valueProviderJob"
							placeholder="Digite aqui o valor cobrado pelo fornecedor..."
							value={valueProvider}
							onChange={(e) =>
								setValueProvider(e.target.value.replace(",", "."))
							}
						/>
					</label>
					<button
						type="button"
						className="btn-add-provider"
						onClick={HandleAddProvider}
					>
						Adicionar Fornecedor
					</button>
					{msgProvider && (
						<span className="message-require">
							Preencha nome e preço do fornecedor
						</span>
					)}
				</div>

				<div className="container-list-area">
					<div className="content-list">
						{listProviders.length === 0 && (
							<span className="msg-provider">
								A relação de fornecedores está vazia.
							</span>
						)}
						{listProviders &&
							listProviders.map((item, index) => (
								<div className="line-list" key={index}>
									<span>{item.jobProvider}</span>
									<span>
										R$ {item.valueProvider}
										<button
											type="button"
											onClick={() => handleRemoveprovider(index)}
										>
											Remover
										</button>
									</span>
								</div>
							))}
					</div>

					<label className="content-input-area">
						<span>Observações Gerais:</span>
						<textarea
							name="obs"
							id="obs"
							value={comments}
							onChange={(e) => setComments(e.target.value.toUpperCase())}
						></textarea>
						<span className="message-require">
							<span className="asterisk">*</span>: Campos obrigatórios
						</span>
					</label>
				</div>
				<div className="container-line-2">
					<button type="button" onClick={handleSaveOs}>
						Salvar OS
					</button>
				</div>
			</div>
		</ContainerAddOrder>
	);
};

export default AddOrder;

