import React,{useRef, useState} from 'react'
import {useAuth} from '../context/AuthContext'
import { Link,useHistory } from 'react-router-dom'

function Signup() {
    const usernameref = useRef()
    const emailref = useRef()
    const passwordref = useRef()
    const passwordconfirmref = useRef()

    const history = useHistory()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const {signup,curerntUser, updateUserName, signInWithGoogle} = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()
        if(passwordref.current.value !== passwordconfirmref.current.value){
            return setError('Password do not match')
        }
        try {
            setError('')
            setLoading(true)
            const userSignUp = await signup(emailref.current.value, passwordref.current.value)
            history.push("/login")
        }
        catch {
            setError("Failed to create an account")
        }
        setLoading(false)
    }


    return (
        <div className="wrapper">
         <div className="title">
            Sign Up
         </div>
         {error && <p className = "error">{error}</p> }
         {curerntUser && <p className = "success">{curerntUser.displayName}</p> }
         <form onSubmit = {handleSubmit}>
            <div className="field">
               <input type="text" ref = {usernameref} required  />
               <label>Username</label>
            </div>
            <div className="field">
               <input type="text" ref = {emailref} required />
               <label>Email Address</label>
            </div>
            <div className="field">
               <input type="password" ref = {passwordref} required />
               <label>Password</label>
            </div>
            <div className="field">
               <input type="password" ref = {passwordconfirmref} required />
               <label>Confirm Password</label>
            </div>
            <div className="field">
               <input type="submit" disabled = {loading} value={loading ? "Give us a sec": "Sign Up"} />
            </div>
            <div className="signup-link">
               <Link to="/">Already have an account? Log In</Link>
            </div>
         </form>
      </div>
    )
}

export default Signup