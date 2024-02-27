import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import NavigationLinks from "../components/navigation-links";
import FooterContainer from "../components/footer-container";
import "./login.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Header from "../components/header";
import config from "./config/config";
import UserHeader from "../components/user-header";

const Login = (props) => {

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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState("");

  const validateEmail = (email) => {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  function handleDiscordSubmit(e) {
    e.preventDefault();

    fetch(`${config.apiDomain}/api/user/logged/info`, {
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
    }).then((res) => {
      return res.json();
    }).then((data) => {
      fetch(`${config.apiDomain}/api/auth/generate-pair-code`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          token: config.requiredToken,
        },
        body: JSON.stringify({
          userMongoId: data._id,
        })
      }).then((res) => {
        return res.json();
      }).then((data) => {
        console.log(data)
        //window.location.href = `${config.apiDomain}/api/auth/attach-pair-code/${data.pairCode}`;
      })
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    /* return toast.error('Pacific Dream RP Account Services are currently unavailable. Please try again later', {
      position: "top-right",
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    }); */

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
    fetch(`${config.apiDomain}/api/login-user`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        token: config.requiredToken,
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch!");
        }
        return res.json();
      })
      .then((data) => {
        if (data.status === "ok") {
          toast.success("Login Successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
          });
          window.localStorage.setItem("token", data.data);
          fetch(`${config.apiDomain}/api/auth/discord/user/info/refresh`, {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
              token: config.requiredToken,
            },
            body: JSON.stringify({
              token: data.data,
            })
          });
          window.localStorage.setItem("loggedIn", true);
          setLoading(false);
          setTimeout(() => {
            window.location.href = `${config.webDomain}/user/home`;
          }, 2500);
        } else if (data.error === "Invalid Password") {
          toast.warn("Invalid Password", {
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
          toast.error("User Not Found!", {
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
          "Unable to login at this time. Please try again | If you continue to see this message please create a PDPRP Support Ticket.",
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
        {headerComponent}
        <div className="login-hero">
          <form className="login-form">
            <div className="login-container2">
              <h1 className="login-text">
                <span>Login</span>
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
              <span className="login-text4">Password</span>
              <input
                type="password"
                required={true}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="login-textinput1 input"
              />
              <Link to="/forgot-password" className="login-navlink">
                <span>Forgot Password?</span>
                <br></br>
              </Link>
              <button
                type="submit"
                className="login-button button"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
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

export default Login;
