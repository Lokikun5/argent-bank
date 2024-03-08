import React from "react";
import { Link } from "react-router-dom";
import '../style/header.scss';

import BankLogo from '../asset/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Header({ isLoggedIn, firstName }) {
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={BankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {isLoggedIn ? (
                    <>
                        <a className="main-nav-item" href="./user.html">
                            <FontAwesomeIcon icon={faUserCircle} />
                            {firstName}
                        </a>
                        <Link className="main-nav-item" to="/">
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            Sign Out
                        </Link>
                    </>
                ) : (
                    <Link className="main-nav-item" to="/sign-in">
                        <FontAwesomeIcon icon={faUserCircle} />
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
}
export default Header;
