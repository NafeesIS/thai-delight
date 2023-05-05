import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import { Button } from 'react-bootstrap';
const auth = getAuth(app);
const SignUp = () => {

    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePhotoUrlChange = (e) => {
        setPhotoUrl(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        console.log(name, email, password)
        setError('');
        // Handle form submission here
        createUserWithEmailAndPassword(auth, email, password, photoUrl)
            .then(result => {
                const isLoggedIn = result.user;
                console.log(isLoggedIn);
                setError('');
                setSuccess('')
                e.target.reset;
                setSuccess('User Has created successfully!!!')
                updateUserData(result.user, name, photoUrl)
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    };
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then(result => {
                const isLoggedIn = result.user;
                setUser(isLoggedIn)
                setSuccess('User Has Created Successfully!!!');
                setError('');
            })
            .catch(error => {
                setError(error.message);
            });
    };

    const handleGithubSignIn = () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                const isLoggedIn = result.user;
                setUser(isLoggedIn)
                setSuccess('User Has Created Successfully!!!');
                setError('');
            })
            .catch(error => {
                setError(error.message);
            });
    };
    const updateUserData = (user, name) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photoUrl

        })
            .then(() => {
                console.log('User Name & Url Updated')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <h1 className="text-center mb-4">Register</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={name}
                                    onChange={handleNameChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="photoUrl">Photo URL</label>
                                <input
                                    type="url"
                                    className="form-control"
                                    id="photoUrl"
                                    value={photoUrl}
                                    onChange={handlePhotoUrlChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block mt-4">
                                Register
                            </button>
                        </form>
                        <p className='text-danger'>{error}</p>
                        <p className='text-success'>{success}</p>

                    </div>
                </div>
                <Button onClick={handleGoogleSignIn} variant="light" className="w-50 mx-auto my-3">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/240px-Google_%22G%22_Logo.svg.png"
                        alt="Google Logo"
                        width="20"
                        height="20"
                        className="me-2"
                    />
                    Continue with Google
                </Button>
                <Button onClick={handleGithubSignIn} variant="light" className="w-50 mx-auto">
                    <img
                        src="https://image.flaticon.com/icons/png/512/25/25231.png"
                        alt="GitHub Logo"
                        width="20"
                        height="20"
                        className="me-2"
                    />
                    Continue with GitHub
                </Button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignUp;