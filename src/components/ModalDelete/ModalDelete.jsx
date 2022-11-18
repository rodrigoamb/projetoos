import { ContainerModalDelete } from "./styles";

import { MdClose } from "react-icons/md";

//firebase
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConnection";

const ModalDelete = ({
	setIsVisibleModalDelete,
	item,
	id,
	clearFilters,
	setLoadingIsVisible,
}) => {
	const idItem = id;
	const titleItem = item.title;
	const yearItem = item.dateOS.split("-")[0];

	const handleDeleteConfirmOS = async () => {
		setLoadingIsVisible(true);
		await deleteDoc(doc(db, `OS${yearItem}`, `${idItem}`))
			.then(() => {
				setIsVisibleModalDelete(false);
				clearFilters();
				setLoadingIsVisible(false);
			})
			.catch((error) => {
				setLoadingIsVisible(false);
				console.log(error);
				return;
			});
	};

	return (
		<ContainerModalDelete>
			<div className="limit-content">
				<div className="modal-square">
					<MdClose
						onClick={() => setIsVisibleModalDelete(false)}
						className="icon-close"
					/>
					<span className="title-modal-delete">Deletar OS</span>
					<span className="title-modal-os">
						<span>Título: </span>
						{titleItem}
					</span>
					<span className="text-modal-delete">
						Atenção! Você deseja realmente deletar essa Ordem de Serviço?
					</span>
					<span className="text-modal-delete">
						Ao apertar o botão deletar, essa operação não poderá ser desfeito.
					</span>
					<span className="text-modal-delete">Deletar OS?</span>
					<button typeof="button" onClick={() => handleDeleteConfirmOS()}>
						Deletar
					</button>
				</div>
			</div>
		</ContainerModalDelete>
	);
};

export default ModalDelete;

