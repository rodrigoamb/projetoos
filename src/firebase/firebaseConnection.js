import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCURu-Tknw33CDJlPuLvChYLwBnhaSX8kk",
	authDomain: "projeto-os.firebaseapp.com",
	projectId: "projeto-os",
	storageBucket: "projeto-os.appspot.com",
	messagingSenderId: "553329584385",
	appId: "1:553329584385:web:27330dcf50cce519db1300",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };

