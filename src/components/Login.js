import React,{useRef, useState} from 'react'
import {useAuth} from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'

function Login() {
    const emailref = useRef()
    const passwordref = useRef()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const history = useHistory()

    const {login,signInWithGoogle} = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(emailref.current.value, passwordref.current.value)
        try {
            setError('')
            setLoading(true)
            await login(emailref.current.value, passwordref.current.value)
            history.push("/invest")
        }
        catch {
            setError("Failed to sign in")
        }
        setLoading(false)
    }

    async function googleSignUp(){
        try {
            signInWithGoogle().then(()=> {
                console.log("successfully logged in")
                history.push("/invest")
            })
            .catch(()=> {
                setError("There was some problem redirecting")
            })
        }
        catch{
            setError("Failed to sign up :(")
        }
    }
    return (
        <div className="wrapper">
         <div className="title">
            Log In
         </div>
         {error && <p className = "error">{error}</p> }
         <form onSubmit = {handleSubmit}>
            <div className="field">
               <input type="text" ref = {emailref} required />
               <label>Email Address</label>
            </div>
            <div className="field">
               <input type="password" ref = {passwordref} required />
               <label>Password</label>
            </div>
            <div className="content">
               <div className="pass-link">
                  <Link to ="/forgotpassword">Forgot password?</Link>
               </div>
            </div>
            <div className="field">
               <input type="submit"  disabled = {loading} value={loading ? "Logging You In": "login"} />
            </div>
            <div>
                <div className = "line"></div>
                <div className="social-text">Sign Up With Socials</div>
                <div className = "line"></div>
            </div>
            <div className="social-log-in">
                <a  onClick = {googleSignUp}>
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png"/>
                </a>
	        </div>
            <div className="signup-link">
               <Link to = "/signup">Don't have an account? Sign Up</Link>
            </div>
         </form>
      </div>
    )
}

export default Login