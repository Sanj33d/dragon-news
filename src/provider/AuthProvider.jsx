import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    // console.log(user)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;