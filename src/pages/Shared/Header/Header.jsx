import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

import 'firebase/auth';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../../firebase/firebase.config';
import ActiveLink from '../../ActiveLink/ActiveLink';
import { Button } from 'react-bootstrap';
const auth = getAuth(app);

const Header = () => {


    const user = auth.currentUser;
    const isLoggedIn = user !== null;

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("User signed out successfully");
            })
            .catch((error) => {
                console.log("Error signing out: ", error);
            });
    };

    return (
        <div>

            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container">
                    <Link className="navbar-brand" to="/">Thai Delight</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item mx-3">
                                <ActiveLink className="nav-link mx-3" to="/">Home</ActiveLink>
                            </li>
                            <li className="nav-item mx-3">
                                <ActiveLink className="nav-link mx-3" to="/blog">Blog</ActiveLink>
                            </li>
                        </ul>
                        {isLoggedIn ?
                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src={user.photoURL} alt="User profile" className="rounded-circle mr-2" style={{ width: '30px' }} />
                                    {user.displayName}
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to="/profile">My Profile</Link>
                                    <a className="dropdown-item" href="#" onClick={handleSignOut}>Sign Out</a>
                                </div>
                            </div>
                            :
                            <Link className="btn btn-outline-light" to="/login">Log In</Link>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
