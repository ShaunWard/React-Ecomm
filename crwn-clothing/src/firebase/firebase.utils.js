import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc, getDoc, doc, setDoc } from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBjzhsyx07uL7QX2j0QX0YA5oMy62COiwg",
    authDomain: "crwn-db-57439.firebaseapp.com",
    projectId: "crwn-db-57439",
    storageBucket: "crwn-db-57439.appspot.com",
    messagingSenderId: "1022128235568",
    appId: "1:1022128235568:web:8c53fb37df73cb30ef79f5",
    measurementId: "G-FZQ5K44TEV"
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestoreDB, "users", userAuth.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    try {
        const userRef = collection(firestoreDB, "users");

        await setDoc(doc(userRef, userAuth.uid),{
          displayName: userAuth.displayName,
          email: userAuth.email,
          createdAt: new Date(),
          additionalData: '',
        })
      console.log("Document written with ID: ", userRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return userRef;
}

export const auth = getAuth(firebaseApp);
export const firestoreDB = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default signInWithGoogle;