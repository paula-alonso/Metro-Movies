import { signInWithPopup, signOut , signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import { auth, googleProvider } from "./config";
import { createUserProfile } from "./users-servise";

export const singInWithGoogle = async () => {
    try{
        const result = await signInWithPopup(auth, googleProvider)
        const email = result.user.email
        const name = result.user.displayName
        await createUserProfile(result.user.uid, {
            email,
            name,
            "favorites":[],
            "reservas":[],
            "id": result.user.uid,
        })
    }catch(error){
        console.error(error)
    }
};

export const loginWithEmailAndPassword = async (email, password) => {

    try{
        const result = await signInWithEmailAndPassword(auth,email,password);
        console.log("LOGIN", result);
    } catch (error) {
        console.log(error)
    }
};


export const registerEmail= async (email, password, extraData) => {
    try {
        const result=await createUserWithEmailAndPassword(auth,email, password)
        console.log("mmmm registro "+result)
        await createUserProfile(result.user.uid, {
            email,
            ...extraData,
            "favorites":[],
            "reservas":[],
            "id": result.user.uid,
        })
    } catch (error) {
        console.log(error)
    }
};

//export const singInWithEmailAndPassword = async () => {};

export const logOut = async () => {
    try{
        await signOut(auth);
    }catch(error){
        console.error(error);
    }
};