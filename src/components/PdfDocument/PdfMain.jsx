import React from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import PdfLayout from "./PdfLayout/PdfLayout";
import { ContainerPdfMain } from "./styles";

const PdfMain = ({ dataPdf, yearPdf, monthPdf }) => {
	return (
		<ContainerPdfMain>
			<PDFDownloadLink
				document={
					<PdfLayout dataPdf={dataPdf} yearPdf={yearPdf} monthPdf={monthPdf} />
				}
				fileName="FORM"
			>
				{({ loading }) =>
					loading ? (
						<div className="lds-facebook">
							<div></div>
							<div></div>
							<div></div>
						</div>
					) : (
						<button>Download PDF</button>
					)
				}
			</PDFDownloadLink>
			<PDFViewer style={{ width: "100%", height: "100vh" }}>
				<PdfLayout dataPdf={dataPdf} yearPdf={yearPdf} monthPdf={monthPdf} />
			</PDFViewer>
		</ContainerPdfMain>
	);
};

export default PdfMain;

