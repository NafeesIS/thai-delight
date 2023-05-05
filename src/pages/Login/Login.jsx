// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Form, Button } from 'react-bootstrap';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import app from '../../firebase/firebase.config';
// import Footer from '../Shared/Footer/Footer';
// const auth = getAuth(app);

// const Login = () => {
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');
//     const handleLogin = e => {
//         e.preventDefault();
//         const form = e.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(email, password);
//         signInWithEmailAndPassword(auth, email, password)
//             .then(result => {
//                 const isLoggedIn = result.user;
//                 setSuccess('User Logged In SuccessFully!!!');
//                 setError('');
//             })
//             .catch(error => {
//                 setError(error.message);
//             })
//     }
//     return (
//         <div className="login-form-container">
//             <h2 className="text-center">Please Log In</h2>
//             <Form onSubmit={handleLogin} className="login-form mx-auto w-50">
//                 <Form.Group controlId="formBasicEmail">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control type="email" placeholder="Enter email" name='email' required />
//                 </Form.Group>

//                 <Form.Group controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type="password" placeholder="Password" name='password' required />
//                 </Form.Group>

//                 <Button variant="primary" type="submit" className="btn-block mt-3   ">
//                     Log In
//                 </Button>
//                 <p className='text-danger'>{error}</p>
//                 <p className='text-success'>{success}</p>
//                 <p className="text-center mt-3">
//                     Don't have an account? <Link to="/signup">Register here.</Link>
//                 </p>
//             </Form>
//             <Footer></Footer>
//         </div>
//     );
// };
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import Footer from '../Shared/Footer/Footer';
const auth = getAuth(app);

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const isLoggedIn = result.user;
                setSuccess('User Logged In Successfully!!!');
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }



    return (
        <div className="login-form-container">
            <h2 className="text-center">Please Log In</h2>
            <Form onSubmit={handleLogin} className="login-form mx-auto w-50">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>

                <Button variant="primary" type="submit" className="btn-block mt-3   ">
                    Log In
                </Button>
                <p className='text-danger'>{error}</p>
                <p className='text-success'>{success}</p>
                <p className="text-center mt-3">
                    Don't have an account? <Link to="/signup">Register here.</Link>
                </p>
            </Form>

            <Footer></Footer>
        </div>
    );
}
export default Login;
