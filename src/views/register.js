import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'


import './register.css'
import FooterContainer from '../components/footer-container'
import Header from '../components/header'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import config from './config/config'
import UserHeader from '../components/user-header'

const Register = (props) => {
    const [headerComponent, setHeaderComponent] = useState(false);
    useEffect(() => {
        checkTokenRepeat();
    }, []);

    const checkTokenRepeat = async () => {
        try {
            const response = await fetch(`${config.apiDomain}/api/token-check`, {
                method: 'POST',
                crossDomain: true,
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    token: config.requiredToken,
                },
                body: JSON.stringify({
                    token: window.localStorage.getItem('token'),
                }),
            });

            const data = await response.json();
            console.log(data);

            if (data.data === 'token expired') {
                window.localStorage.clear();
                setHeaderComponent(<Header rootClassName="header-root-class-name2" />);
            } else if (data.status === 'active') {
                // Set the UserHeader component to be rendered
                setHeaderComponent(<UserHeader rootClassName="header-root-class-name2" />);
            } else {
                // Set the default Header component to be rendered
                setHeaderComponent(<Header rootClassName="header-root-class-name2" />);
            }
        } catch (err) {
            console.error(err);
            // Handle error (e.g., display an error message or redirect)
        }
    };
    const showToast = () => {
        toast("Toast Example")
    }

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z0-9]).{10,}$/;
        return passwordRegex.test(password);
    }

    const validateLname = (lname) => {
        const lnameRegex = /^[a-zA-Z0-9]{4,}$/;
        return lnameRegex.test(lname);
    };

    const validateFname = (fname) => {
        const fnameRegex = /^[a-zA-Z0-9]{4,}$/;
        return fnameRegex.test(fname);
    };

    function handleSubmit(e) {
        e.preventDefault();
        /* return toast.error('Pinal County RP Account Services are currently unavailable. Please try again later', {
            position: "top-right",
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        }); */

        if (!validateFname(fname)) {
            toast.error("First Name must be 4 characters or more", {
                position: "top-right",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        } else if (!validateLname(lname)) {
            toast.error("Last Name must be 4 characters or more", {
                position: "top-right",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        } else if (!validateEmail(email)) {
            toast.error("Invalid Email Format", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        } else if (!validatePassword(password)) {
            toast.error("Password must be 10 characters or more and contain at least 1 special character", {
                position: "top-right",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }

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
                        theme: "dark",
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
                        theme: "dark",

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
                <title>Register - Pinal County Roleplay</title>
                <meta property="og:title" content="Register - Pinal County Roleplay" />
            </Helmet>
            <div className="register-container1">
                {headerComponent}
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
                                required={true}
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
                                required={true}
                                placeholder="Last Name"
                                className="register-lname-input input"
                                onChange={(e) => setLname(e.target.value)}
                            />
                            <span className="register-email">Email Address</span>
                            <input
                                type="email"
                                required={true}
                                placeholder="Enter Email Address"
                                className="register-email-input input"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="register-password">Password</span>
                            <input
                                type="password"
                                required={true}
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