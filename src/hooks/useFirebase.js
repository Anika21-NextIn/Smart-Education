import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../pages/Login/Firebase/firebase.init';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged  } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();


    const [authError, setAuthError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({});


    const loginUser = (email, password) => {
        setIsLoading(true);
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
            })
            .finally(() => setIsLoading(false));
        }
    
    //user registration
    const registerUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setAuthError(errorMessage);

                // ..
            })
            .finally(() => setIsLoading(false));

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
    //Observe user state change
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return () => unSubscribed;
    }, [auth]);
   
    return {
        loginUser, registerUser, authError, signInWithGoogle, isLoading
    }
};

export default useFirebase;