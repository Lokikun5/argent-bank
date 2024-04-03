import React from "react";
import { Link,useNavigate  } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import { clearUser } from '../actions/userActions'
import '../style/header.scss';
import BankLogo from '../asset/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userProfile = useSelector(state => state.user.userProfile);
    const token = useSelector(state => state.user.token);

    const isLoggedIn = Boolean(token);

    const firstName = userProfile?.body?.firstName;
    //logout function redirect home page
    const handleSignOut = () => {
        dispatch(clearUser());
        navigate('/');
    };

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
                        <Link className="main-nav-item" to="/user">
                            <FontAwesomeIcon icon={faUserCircle}/>
                            {firstName}
                        </Link>
                        <button onClick={handleSignOut} className="main-nav-item">
                            <FontAwesomeIcon icon={faSignOutAlt}/>
                            Sign Out
                        </button>
                    </>
                ) : (
                    <Link className="main-nav-item" to="/sign-in">
                        <FontAwesomeIcon icon={faUserCircle}/>
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
}
export default Header;
