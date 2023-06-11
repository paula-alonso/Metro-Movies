import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./config";

export const singInWithGoogle = async () => {
    try{
        const result = await signInWithPopup(auth, googleProvider)
        console.log(result)
    }catch(error){
        console.error(error)
    }
};

export const registerWithEmailAndPassword = async () => {};

export const singInWithEmailAndPassword = async () => {};

export const logOut = async () => {};