import React from "react";
import { Link } from "react-router-dom";
import LoginStyles from "./Login.module.css"

function Login() {
    return (
        <div className={LoginStyles.loginContainer}>
            <div className={LoginStyles.loginContainerv2}>
                <h1>Welcome back</h1>

                <div className={LoginStyles.inputContainer}>
                    <label>EMAIL</label>
                    <input placeholder="enter your email" type="email"/>
                </div>

                <div className={LoginStyles.inputContainer}>
                    <label>PASSWORD</label>
                    <input placeholder="enter your password" type="password"/>
                </div>

                <div className={LoginStyles.forgetmeContainer}>
                    <div>
                        Remember Me <input type="checkbox" />
                    </div>
                    <div>
                        <Link to="/account/forgotpassowrd">Forgot password?</Link>
                    </div>
                </div>

                <button className={LoginStyles.loginBTN}>LOGIN</button>
                <span className={LoginStyles.or}>or</span>
                 <button className={LoginStyles.googleBTN}>
                    <i class="fa-brands fa-google"></i>  Sign in with google</button>
                
                    
                    <span className={LoginStyles.notreg}>Not registered yet?  <Link className={LoginStyles.singupBTN} to="/account/signup">Signup</Link></span>
                    
            </div>

        </div>
    )
}

export default Login;