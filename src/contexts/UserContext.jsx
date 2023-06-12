import { onAuthStateChanged } from "firebase/auth";
import React, {useContext, createContext, useEffect, useState} from "react";
import { auth } from "../firebase/config";
import { getUserProfile } from "../firebase/users-servise";


export const UserContext = createContext(null)

export function UserContextProvider({children}){

    const [user, setUser] = useState(null);
    const [favs, setfavs] = useState();

    useEffect(() => {
        onAuthStateChanged(auth, async (firebaseUser)=>{
            console.log(firebaseUser)
            if(firebaseUser){
                const profile = await getUserProfile(firebaseUser.email)
                setUser(profile)
                setfavs(profile.favorites)
            }else{
                setUser(null)
                setfavs(null)
            }
        });
    }, []);

    return(
        <UserContext.Provider value={{
            user, favs,
            }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser(){
    return useContext(UserContext)
}