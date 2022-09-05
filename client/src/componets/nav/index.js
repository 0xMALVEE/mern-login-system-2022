import React from "react";
import NavStyles from "./Nav.module.css"
import {Link} from "react-router-dom"

function Nav() {
    return (
        <nav className={NavStyles.mainNav}>
            <div>
                <h3>LSYSTEM</h3>
            </div>
            <div className={NavStyles.rightSideNav}>
                <i class="fa-solid fa-user"></i>
                <div>
                    <span className="d-blcok">Account</span>
                    <div className={NavStyles.container2}>
                        <Link className="d-block" to="/account/login">Login</Link>
                        <span className={NavStyles.or}>or</span>
                        <Link to="account/signup">Singup</Link>
                    </div>
                   
                </div>
            </div>
        </nav>
    )
}

export default Nav;