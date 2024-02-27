import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loding, setLoding] = useState(true)
    const createUser = (email,password) =>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signin = (email , password) =>{
        setLoding(true)
        return signInWithEmailAndPassword(email, password)
    }
    const logOut = () =>{
        setLoding(true)
        return signOut(auth)
    }




    const auth = getAuth(app);
useEffect(()=>{
   const unsubcribe = onAuthStateChanged ( auth , currentuser =>{
        setUser(currentuser)
        console.log(currentuser)
        setLoding(false);
        
    });
    return () =>{
        return unsubcribe();
    }
},[])

    return (
        <AuthContext.Provider value={{ user,loding,createUser, signin, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;