import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import "../style/sign-in-content.scss";
import {Link} from "react-router-dom";
function SignInContent () {
    return(
        <section className="sign-in-content">
            <FontAwesomeIcon icon={faUserCircle} />
            <h1>Sign In</h1>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label
                    ><input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label
                    ><input type="password" id="password" />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                >Remember me</label
                >
                </div>

                <Link to="/user/100" className="sign-in-button">Sign In</Link>

            </form>
        </section>
    );
}
export default SignInContent