import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUserToken, setUserProfile } from '../actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import "../style/sign-in-content.scss";
import { verifyUser, getUserProfile } from "../API/Api";

function SignInContent () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await verifyUser(email, password);
            dispatch(setUserToken(user.body.token));

            const userProfile = await getUserProfile(user.body.token);
            dispatch(setUserProfile(userProfile));
            navigate(`/user`);
        } catch (error) {
            console.error("An error occurred:", error);
            setErrorMessage(error.message || 'An error occurred');
        }
    };

    return (
        <section className="sign-in-content">
            <FontAwesomeIcon icon={faUserCircle}/>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={(e) => setEmail(e.target.value.trim())}/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value.trim())}/>
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me"/><label htmlFor="remember-me">Remember me</label>
                </div>
                <button type="submit" className="sign-in-button">Sign In</button>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
            </form>
        </section>
    );
}

export default SignInContent;