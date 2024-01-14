import React, { useState } from 'react'
import { Helmet } from 'react-helmet'


import './register.css'
import FooterContainer from '../components/footer-container'
import Header from '../components/header'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import config from './config/config'

const Register = (props) => {
    const showToast = () => {
        toast("Toast Example")
    }

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        /* toast.error('Pacific Dream RP Account Services are currently unavailable. Please try again later', {
            position: "top-right",
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }); */

        fetch(`${config.apiDomain}/api/register`, {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                token: config.requiredToken,
            },
            body: JSON.stringify({
                fname,
                email,
                lname,
                password
            }),
        }).then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.status == 'ok') {
                    toast.success('Registration Successful!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                } else if (data.error === 'User Exists') {
                    toast.warn('User Already Exists | Please Login to your account', {
                        position: "top-right",
                        autoClose: 10000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",

                    });
                } else {
                    toast.error('Something Went Wrong | Please Create a PDPRP Support Ticket.', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            })
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
                                <span>Legal First Name</span>
                                <br></br>
                            </span>
                            <input
                                type="text"
                                required
                                placeholder="First Name"
                                className="register-fname-input input"
                                onChange={(e) => setFname(e.target.value)}
                            />
                            <span className="register-lname">
                                <span>Legal Last Name</span>
                                <br></br>
                            </span>
                            <input
                                type="text"
                                required
                                placeholder="Last Name"
                                className="register-lname-input input"
                                onChange={(e) => setLname(e.target.value)}
                            />
                            <span className="register-email">Email Address</span>
                            <input
                                type="email"
                                required
                                placeholder="Enter Email Address"
                                className="register-email-input input"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="register-password">Password</span>
                            <input
                                type="password"
                                required
                                placeholder="Enter Password"
                                className="register-password-input input"
                                onChange={(e) => setPassword(e.target.value)}
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