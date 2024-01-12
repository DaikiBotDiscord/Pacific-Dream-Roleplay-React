import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FooterContainer from '../components/footer-container'
import './login.css'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Login = (props) => {
  const showToast = () => {
    toast("Toast Example")
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    fetch("https://api.pacificdreamrp.com/api/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch!');
        }
        return res.json();
      })
      .then((data) => {
        if (data.status) {
          toast.success('Login Successfully!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: 'dark'
          });
          setLoading(false);
          setTimeout(() => {
            window.location.href = "http://localhost:3000/home";
            window.localStorage.setItem("token", data.data);
            window.localStorage.setItem("loggedIn", true);
          }, 2500);
        } else if (data.error === 'Invalid Password') {
          toast.warn('Invalid Password', {
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
        } else {
          toast.error('User Not Found!', {
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
        toast.error('Unable to login at this time. Please try again | If you continue to see this message please contact a system admin', {
          position: "top-right",
          autoClose: 7500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setLoading(false);
        console.log(error);
      });
  }
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Pacific Dream Roleplay</title>
        <meta property="og:title" content="Login - Pacific Dream Roleplay" />
      </Helmet>
      <div className="login-container1">
        <header data-role="Header" className="login-header">
          <Link to="/" className="login-navlink">
            <img
              alt="logo"
              src="https://cdn.discordapp.com/attachments/1134243980276678716/1191250339953918093/game_ove_6_1.png?ex=65a4c155&amp;is=65924c55&amp;hm=e2f2ebac2bf6ba6f7257bf734060b513945f2c71a27475a40b9e35a7679b561a&amp;"
              className="login-image"
            />
          </Link>
          <div className="login-nav">
            <NavigationLinks rootClassName="rootClassName13"></NavigationLinks>
          </div>
          <a
            href="https://cfx.re/join/zz8mqp"
            target="_blank"
            rel="noreferrer noopener"
            className="login-link button"
          >
            <span className="login-text">
              <span>FiveM Connect</span>
              <br></br>
            </span>
          </a>
        </header>
        <div className="login-hero">
          <form className="login-form">
            <div className="login-container2">
              <h1 className="login-text3">
                <span>Login</span>
                <br></br>
              </h1>
              <span className="login-text6">Email Address</span>
              <input
                type="email"
                placeholder="Enter Email"
                autoComplete='email'
                required
                onChange={(e) => setEmail(e.target.value)}
                className="login-textinput input"
              />
              <span className="login-text7">Password</span>
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="login-textinput1 input"
              />
              <button type="submit" className="login-button button" onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? 'Logging in...' : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <FooterContainer rootClassName="footer-container-root-class-name2"></FooterContainer>
      <ToastContainer />
    </div>
  )
}

export default Login
