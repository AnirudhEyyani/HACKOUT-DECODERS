import React,{useContext, useEffect, useState} from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword,signOut,sendPasswordResetEmail, updateEmail ,updatePassword, updateProfile,signInWithPopup, GoogleAuthProvider,TwitterAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from '../firebase';

 
export function useAuth() {
    return useContext(AuthContext)
}

const AuthContext = React.createContext()

export function AuthProvider({children}) {

    const [currentUser,setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email,password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email,password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth)
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth,email)
    }

    function updateUserEmail(email){
        return updateEmail(currentUser, email)
    }

    function updateUserPassword(password) {
        return updatePassword(currentUser, password)
    }

    function updateUserName(name) {
        return updateProfile(currentUser,{displayName: name})
    }

    function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    function  signInWithTwitter() {
        const provider = new TwitterAuthProvider();
        return signInWithPopup(auth,provider)
    }

    function  signInWithFacebook() {
        const provider = new FacebookAuthProvider();
        return signInWithPopup(auth,provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateUserEmail,
        updateUserPassword,
        updateUserName,
        signInWithGoogle,
        signInWithTwitter,
        signInWithFacebook
    }

    return (
        <AuthContext.Provider value = {value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}