import { onAuthStateChanged } from "firebase/auth";
import React, {useContext, createContext, useEffect, useState} from "react";
import { auth } from "../firebase/config";
import { getUserProfile } from "../firebase/users-servise";


export const UserContext = createContext(null)

export function UserContextProvider({children}){

    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, async (firebaseUser)=>{
            console.log(firebaseUser)
            if(firebaseUser){
                const profile = await getUserProfile(firebaseUser.email)
                setUser(profile)
            }else{
                setUser(null)
            }
        });
    }, []);

    return(
        <UserContext.Provider value={{
            user,
            }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser(){
    return useContext(UserContext)
}