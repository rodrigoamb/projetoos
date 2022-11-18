import React from "react";
import logo from "../../../assets/img/logo.png";

import {
	Page,
	Text,
	View,
	Document,
	StyleSheet,
	Image,
} from "@react-pdf/renderer";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
	page: {
		paddingTop: "35px",
		paddingHorizontal: "35px",
		paddingBottom: "65px",
	},
	header: {
		marginBottom: "10px",
	},
	rowCenterLogo: {
		alignItems: "center",
	},
	logo: {
		width: "100px",
		marginBottom: "20px",
	},
	title: {
		fontSize: "23px",
		textTransform: "uppercase",
		fontWeight: "bold",
		marginBottom: "15px",
		textAlign: "center",
	},
	line: {
		backgroundColor: "grey",
		height: "3px",
		marginBottom: "5px",
	},
	containerRow: {
		width: "100%",
		alignItems: "center",
		flexDirection: "row",
	},
	pagnumber: {
		fontSize: "11px",
		position: "absolute",
		right: "35px",
		bottom: "35px",
	},
	textIdCard: {
		fontSize: "12px",
	},
	card: {
		fontSize: "8px",
		border: "2px solid black",
		padding: "5px",
		borderRadius: "8px",
		marginBottom: "10px",
	},
	textNormal: {
		marginBottom: "3px",
		letterSpacing: "1.1px",
	},
});

const PdfLayout = ({ dataPdf, yearPdf, monthPdf }) => {
	const [listData, setListData] = useState([]);
	const [month, setMonth] = useState("");

	const nameMonth = () => {
		{
			monthPdf === "01" && setMonth("Janeiro");
		}
		{
			monthPdf === "02" && setMonth("Fevereiro");
		}
		{
			monthPdf === "03" && setMonth("Março");
		}
		{
			monthPdf === "04" && setMonth("Abril");
		}
		{
			monthPdf === "05" && setMonth("Maio");
		}
		{
			monthPdf === "06" && setMonth("Junho");
		}
		{
			monthPdf === "07" && setMonth("Julho");
		}
		{
			monthPdf === "08" && setMonth("Agosto");
		}
		{
			monthPdf === "09" && setMonth("Setembro");
		}
		{
			monthPdf === "10" && setMonth("Outubro");
		}
		{
			monthPdf === "11" && setMonth("Novembro");
		}
		{
			monthPdf === "12" && setMonth("Dezembro");
		}
	};

	useEffect(() => {
		setListData(dataPdf);
		nameMonth();
	}, []);

	return (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.header}>
					<View style={styles.rowCenterLogo}>
						<Image style={styles.logo} src={logo} />
					</View>

					<Text style={styles.title}>Relatório de OS - Backup</Text>

					<View style={styles.line}></View>

					<View>
						<View style={styles.containerRow}>
							<Text style={styles.textBold}>Ano: </Text>
							<Text style={styles.textNormal}>{yearPdf}</Text>
						</View>
						<View style={styles.containerRow}>
							<Text style={styles.textBold}>Período: </Text>
							<Text style={styles.textNormal}>{month}</Text>
						</View>
					</View>
				</View>

				{listData?.map((item, index) => (
					<View key={item.id} wrap={false}>
						<Text style={styles.textIdCard}>Item: #{index + 1}</Text>
						<View style={styles.card}>
							<Text style={styles.textNormal}>id: {item.id}</Text>
							<Text style={styles.textNormal}>Status: {item.status}</Text>
							<Text style={styles.textNormal}>
								Data de entrada: {item.dateOS.split("-").reverse().join("/")}
							</Text>
							<Text style={styles.textNormal}>Cliente: {item.client}</Text>
							<Text style={styles.textNormal}>Título: {item.title}</Text>
							<Text style={styles.textNormal}>
								PP (Pedido de Produção): {item.productionOrder}
							</Text>
							<Text style={styles.textNormal}>
								Valor da OS: R$ {item.priceOrder.replace(".", ",")}
							</Text>
							<Text style={styles.textNormal}>
								Previsão de Recebimento:{" "}
								{item.dateReceive.split("-").reverse().join("/")}
							</Text>
							<Text style={styles.textNormal}>Fornecedores:</Text>
							{item.listProviders.map((item, index) => (
								<Text style={styles.textNormal} key={index}>
									Fornecedor {index + 1}: {item.jobProvider} - R${" "}
									{item.valueProvider.replace(".", ",")}
								</Text>
							))}
							<Text style={styles.textNormal}>Observações:</Text>
							<Text style={styles.textNormal}>{item.comments}</Text>
						</View>
					</View>
				))}

				<Text
					fixed={true}
					style={styles.pagnumber}
					render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`}
				/>
			</Page>
		</Document>
	);
};

export default PdfLayout;

