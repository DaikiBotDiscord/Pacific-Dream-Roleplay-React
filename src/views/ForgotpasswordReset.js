import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import config from './config/config';
import './ForgotpasswordReset.css'
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import NavigationLinks from "../components/navigation-links";
import FooterContainer from "../components/footer-container";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Header from "../components/header";
import UserHeader from "../components/user-header";

const ForgotResetPassword = () => {
    const location = useLocation(); // Use useLocation hook
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token')
    const [newPassword, setNewPassword] = useState('');
    const [resetStatus, setResetStatus] = useState(null);
    const [stateToken, setToken] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setLoading] = useState("");

    const [headerComponent, setHeaderComponent] = useState(false);
    useEffect(() => {
        checkTokenRepeat();
    }, []);

    const checkTokenRepeat = async () => {
        try {
            const response = await fetch(`${config.apiDomain}/api/token-check`, {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                    token: config.requiredToken,
                },
                body: JSON.stringify({
                    token: window.localStorage.getItem("token"),
                }),
            });

            const data = await response.json();

            if (data.data === "token expired") {
                window.localStorage.clear();
                setHeaderComponent(<Header rootClassName="header-root-class-name2" />);
            } else if (data.status === "active") {
                // Set the UserHeader component to be rendered
                setHeaderComponent(
                    <UserHeader rootClassName="header-root-class-name2" />
                );
            } else {
                // Set the default Header component to be rendered
                setHeaderComponent(<Header rootClassName="header-root-class-name2" />);
            }
        } catch (err) {
            console.error(err);
            // Handle error (e.g., display an error message or redirect)
        }
    };
    const validateEmail = (email) => {
        // Regular expression for a simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);
        if (!validateEmail(email)) {
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
            setLoading(false);
            return;
        }
        fetch(`${config.apiDomain}/api/email/request-password-reset/${email}`, {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                token: config.requiredToken,
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch!");
                }
                return res.json();
            })
            .then((data) => {
                if (data.message === "Password Reset Request Email Sent") {
                    toast.success("Password Reset Email has been Sent!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: "dark",
                    });
                    setLoading(false)
                } else if (data.message === "User not found.") {
                    toast.warn("User not found!", {
                        position: "top-right",
                        autoClose: 10000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    setLoading(false);
                } else {
                    toast.error("Internal Server Error!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    setLoading(false);
                }
            })
            .catch((error) => {
                toast.error(
                    "Unable to request at this time. Please try again | If you continue to see this message please create a PDPRP Support Ticket.",
                    {
                        position: "top-right",
                        autoClose: 10000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    }
                );
                setLoading(false);
            });
    }

    useEffect(() => {
        setToken(token);
    }, [token]);

    const handleRequestReset = async () => {
        try {
            await fetch(`${config.apiDomain}/api/email/request-password-reset/${email}`, {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                    token: config.requiredToken,
                }
            })
            setResetStatus('Email sent successfully');
        } catch (error) {
            setResetStatus('Error sending email');
        }
    };

    const handleResetPassword = async () => {
        try {
            await fetch(`${config.apiDomain}/api/email/reset-password`, {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                    token: config.requiredToken,
                },
                body: JSON.stringify({
                    token: stateToken,
                    newPassword: newPassword
                })
            })
            setResetStatus('Password reset successful');
        } catch (error) {
            setResetStatus('Invalid or expired token');
        }
    };

    return (
        <div className="login-container">
            <Helmet>
                <title>Login - Pinal County Roleplay</title>
                <meta property="og:title" content="Login - Pinal County Roleplay" />
            </Helmet>
            <div className="login-container1">
                {headerComponent}
                <div className="login-hero">
                    <form className="login-form">
                        <div className="login-container2">
                            <h1 className="login-text">
                                <span>Forgot Password</span>
                                <br></br>
                            </h1>
                            <span className="login-text3">Email Address</span>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                autoComplete="email"
                                required={true}
                                onChange={(e) => setEmail(e.target.value)}
                                className="login-textinput input"
                            />
                            <button
                                type="submit"
                                className="login-button button"
                                onClick={handleSubmit}
                                disabled={isLoading}
                            >
                                {isLoading ? "Sending Email..." : "Request"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <FooterContainer rootClassName="footer-container-root-class-name2"></FooterContainer>
            <ToastContainer />
        </div>
    );
};

export default ForgotResetPassword;

{/* <div>

<span className="login-text3">Token</span>
                            <input type="text" value={stateToken} placeholder={stateToken ? stateToken : "Enter Token"} readOnly={!!stateToken} className='login-textinput input' />
            <h1>Password Reset</h1>
            {resetStatus && <p>{resetStatus}</p>}
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button onClick={handleRequestReset}>Request Reset</button>
            </div>
            <div>
                <label>Token:</label>
                <input type="text" value={stateToken} placeholder={stateToken} readOnly />
            </div>
            <div>
                <label>New Password:</label>
                <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                <button onClick={handleResetPassword}>Reset Password</button>
            </div>
        </div> */}