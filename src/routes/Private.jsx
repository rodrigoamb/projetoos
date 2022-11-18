import { useState, useEffect } from "react";
import { auth } from "../firebase/firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

//import components
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

const Private = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [signed, setSigned] = useState(false);

	useEffect(() => {
		async function checkLogin() {
			const unsub = onAuthStateChanged(auth, (user) => {
				if (user) {
					const userData = {
						uid: user.uid,
						email: user.email,
					};

					localStorage.setItem("@detailUser", JSON.stringify(userData));

					setLoading(false);
					setSigned(true);
				} else {
					setLoading(false);
					setSigned(false);
				}
			});
		}
		checkLogin();
	}, []);

	if (loading) {
		return <LoadingScreen />;
	}

	if (!signed) {
		return <Navigate to="/" />;
	}

	return children;
};

export default Private;

