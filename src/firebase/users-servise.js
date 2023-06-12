import { arrayUnion, collection, doc,getDocs,query,setDoc, updateDoc, where } from "firebase/firestore"
import {db} from "./config"
import { async } from "@firebase/util"

export async function UpdateFavorites(userId, data){
    const ref = doc(db, "users", userId)
    console.log(ref)
    return await updateDoc(ref, {
        favorites: arrayUnion(data)
    });
}

export async function SaveReserve(userId, data){
    const ref = doc(db, "users", userId)
    console.log(ref)
    return await updateDoc(ref, {
        reservas: arrayUnion(data)
    });
}

export async function createUserProfile(userId, data){
    return setDoc(doc(db, "users", userId), data);
}

export async function getUserProfile(email){
    const userQuery = query(
        collection (db, 'users'),
        where("email", "==", email)
    );

    const results = await getDocs(userQuery);

    if(results.size >0){
        const users = results.docs.map((item)=>({
            ...item.data(),
            id: item.id,
        }))
        const [user] = users;
        return user
    }else{
        return null
    }

}