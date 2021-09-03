import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

// add your own config and rename the file to firebase_prod.js
const config = {
	apiKey: "",
	authDomain: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: "",
	appId: "",
};

const firebase = Firebase.initializeApp(config);

// Used to import the database, Only run once
// seedDatabase(firebase);

export { firebase };
