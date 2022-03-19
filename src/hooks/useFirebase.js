import React, { useState } from 'react';
import initializeAuthentication from '../pages/Login/Firebase/firebase.init';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();


    const [authError, setAuthError] = useState("");

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
         const user = userCredential.user;
        // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setAuthError(errorMessage);
        });
    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
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
    }
   
    return {
        loginUser, authError, signInWithGoogle
    }
};

export default useFirebase;