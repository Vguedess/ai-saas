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
	measurementId: "G-DCTX0WW0RY",
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

// Auth Exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Firestore exports
export const firestore = firebase.firestore();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;
// Storage Exports
export const storage = firebase.storage();

// Helper Functions

export async function getUserWithUsername(username) {
	const usersRef = firestore.collection('users');
	const query = usersRef.where('username', '==', username).limit(1);
	const userDoc = (await query.get()).docs[0];
	return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
	const data = doc.data();
	return {
		...data,
		// Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
		createdAt: data?.createdAt.toMillis() || 0,
		updatedAt: data?.updatedAt.toMillis() || 0,
	};
}
