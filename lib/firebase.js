import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
	apiKey: "AIzaSyAWFrd7P0i_hw2LahZKOW4PRtKLNpl6IZI",
	authDomain: "beyondcurve-frontierlab.firebaseapp.com",
	projectId: "beyondcurve-frontierlab",
	storageBucket: "beyondcurve-frontierlab.appspot.com",
	messagingSenderId: "640549008674",
	appId: "1:640549008674:web:32c96a70c5c9bb51d0217b",
	measurementId: "G-DCTX0WW0RY"
};

if (!firebase.getApps.length) {
	firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
