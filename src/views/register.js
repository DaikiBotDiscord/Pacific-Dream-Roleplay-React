import React from 'react'
import { Helmet } from 'react-helmet'


import './register.css'
import FooterContainer from '../components/footer-container'
import Header from '../components/header'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Register = (props) => {
    const showToast = () => {
        toast("Toast Example")
    }

    function handleSubmit(e) {
        e.preventDefault();
        toast.error('Pacific Dream RP Account Services are currently unavailable. Please try again later', {
            position: "top-right",
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return (
        <div className="register-container">
            <Helmet>
                <title>Register - Pacific Dream Roleplay</title>
                <meta property="og:title" content="Register - Pacific Dream Roleplay" />
            </Helmet>
            <div className="register-container1">
                <Header rootClassName="header-root-class-name3"></Header>
                <div className="register-hero">
                    <form className="register-form">
                        <div className="register-container2">
                            <h1 className="register-text">
                                <span>Register</span>
                                <br></br>
                            </h1>
                            <span className="register-fname">
                                <span>First Name</span>
                                <br></br>
                            </span>
                            <input
                                type="text"
                                placeholder="First Name"
                                className="register-fname-input input"
                            />
                            <span className="register-lname">
                                <span>Last Name</span>
                                <br></br>
                            </span>
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="register-lname-input input"
                            />
                            <span className="register-email">Email Address</span>
                            <input
                                type="email"
                                placeholder="Enter Email Address"
                                className="register-email-input input"
                            />
                            <span className="register-password">Password</span>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="register-password-input input"
                            />
                            <button type="submit" onClick={handleSubmit} className="register-signup button">
                                <span>
                                    <span>Register</span>
                                    <br></br>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <FooterContainer rootClassName="footer-container-root-class-name3"></FooterContainer>
            <ToastContainer />
        </div>
    )
}

export default Register