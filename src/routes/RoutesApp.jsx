//import router dom
import { Routes, Route } from "react-router-dom";

//import pages
import Login from "../pages/Login/Login";
import Admin from "../pages/Admin/Admin";

import SearchOrder from "../components/SearchOrder/SearchOrder";
import AddOrder from "../components/AddOrder/AddOrder";
import ReportOrder from "../components/ReportOrder/ReportOrder";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import Private from "./Private";

const RoutesApp = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route
				path="/admin"
				element={
					<Private>
						<Admin>
							<AddOrder />
						</Admin>
					</Private>
				}
			/>
			<Route
				path="admin/buscarOs"
				element={
					<Private>
						<Admin>
							<SearchOrder />
						</Admin>
					</Private>
				}
			/>
			<Route
				path="admin/relatoriosOs"
				element={
					<Private>
						<Admin>
							<ReportOrder />
						</Admin>
					</Private>
				}
			/>

			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
};

export default RoutesApp;

