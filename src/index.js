import React, { useEffect, useState, useMemo } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "./style.css";
import Staff from "./views/staff";
import Login from "./views/login";
import Donation from "./views/donation";
import Home from "./views/home";
import NotFound from "./views/not-found";
import Register from "./views/register";
import config from "./views/config/config";
import UserHome from "./views/userHome";
import Departments from "./views/departments";
import ForgotResetPassword from "./views/ForgotpasswordReset";
import ResetPassword from "./views/passwordReset";
import AZDPSApplication from "./views/azdps-application";
import PhoenixPDApplication from "./views/phoenix-pd-application";
import PhoenixFDApplication from "./views/phoenix-fd-application";
import Applications from './views/applications'
import PCSOApplication from './views/pcso-application'
import DOCApplication from "./views/doc-application";
import DOTApplication from "./views/azdot-application";
import CertifiedCivilianApplicaiton from "./views/certified-civilian-application";
import FAAApplication from "./views/faa-application";
import FBIApplication from "./views/fbi-application";
import './views/home.css'
import StaffApplication from "./views/staff-application";

const App = () => {
  const [userData, setUserData] = useState("");
  const [cantShow, setCantShow] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [currentURL, setCurrentURL] = useState(window.location.href);
  const [discordAuthenticated, setDiscordAuthenticated] = useState(false);
  const [verifiedCiv, setVerifiedCiv] = useState(undefined);



  useEffect(() => {
    let intervalId;

    const fetchData = async () => {
      try {
        const token = window.localStorage.getItem('token');
        if (!token) {
          throw new Error('Token not found');
        }

        const response = await fetch(`${config.apiDomain}/api/user/logged/info`, {
          method: 'POST',
          crossDomain: true,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            token: config.requiredToken,
          },
          body: JSON.stringify({
            token: token,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();

        setUserData(data);
        setDiscordAuthenticated(data?.data?.discordUserAuthenticated || false);
        setVerifiedCiv(data?.data?.VerifiedCiv);
      } catch (error) {
        console.error('Fetch Data Error:', error);
        setCantShow(true);
        setLoading(false);
        toast.error('Unable to fetch user data at this time. Please try again.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }
    };

    if (window.localStorage.getItem("token")) {
      fetchData();
      intervalId = setInterval(fetchData, 30000); // Fetch data every 30 seconds

      return () => {
        clearInterval(intervalId);
      };
    }

    return () => { };
  }, []);

  async function checkToken() {
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

      if (!response.ok) {
        throw new Error("failed to fetch!");
      }

      const data = await response.json();

      if (data.data === "token expired") {
        window.localStorage.clear();
        window.location.href = "/login";
      } else if (data.status !== "active") {
        // Handle other cases when the token is not valid
        // For example, redirect to the login page or display an error message
        window.localStorage.clear();
        window.location.href = "/login";
      } else if (data.error === "user doesn't exist") {
        window.location.href = "/register";
        setTimeout(() => {
          toast.error(
            "Your account no longer exists. Please create an account and try again.",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
        }, 1000);
        window.localStorage.clear();
      }
    } catch (error) {
      console.error(error);
      window.location.href = "/";
      toast.error("Unable to fetch user data at this time. Please try again.", {
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
  }

  async function checkTokenRepeat() {
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

      if (!response.ok) {
        throw new Error("failed to fetch!");
      }

      const data = await response.json();

      if (data.data === "token expired") {
        window.localStorage.clear();
        window.location.href = "/login";
      } else if (data.status !== "active") {
        // Handle other cases when the token is not valid
        // For example, redirect to the login page or display an error message
        window.localStorage.clear();
        window.location.href = "/login";
      }
    } catch (error) {
      console.error(error);
      window.location.href = "/";
      toast.error("Unable to fetch user data at this time. Please try again.", {
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
    setInterval(() => {
      checkToken();
    }, 10 * 1000);
  }

  return (
    <Router>
      {/* <div className="home-site-notification">
        <span className='home-notification-text-bold'>
          <span>
            MAJOR SERVER OUTAGES
          </span>
        </span>
        <br></br>
        <span className="home-notification-text">
          <span>
            Some Arizona State Roleplay Account Services will be unavailable until further notice!
          </span>
          <br></br>
        </span>
        <a
          href="https://discord.com/invite/b6EZgfTMmz"
          target="_blank"
          rel="noreferrer noopener"
          className="home-notification-button button"
        >
          View More In Discord
        </a>
      </div> */}
      <Switch>
        <Route component={Departments} exact path='/departments' />
        <Route component={Staff} exact path="/staff" />
        <Route component={Donation} exact path="/donation" />
        <Route component={Login} exact path="/login" />
        <Route component={Register} exact path="/register" />
        <Route component={ForgotResetPassword} exact path='/forgot-password' />
        <Route component={ResetPassword} exact path='/reset-password' />
        <Route
          exact
          path='/user/home'
          render={() => {
            return checkTokenRepeat() ? <UserHome userData={userData}
              discordAuthenticated={discordAuthenticated}
              verifiedCiv={verifiedCiv} /> : <Login />;
          }}
        />
        <Route
          exact
          path='/user/phoenix-pd-application'
          render={() => {
            return checkTokenRepeat() ? <PhoenixPDApplication userData={userData}
              discordAuthenticated={discordAuthenticated}
              verifiedCiv={verifiedCiv} /> : <Login />;
          }}
        />
        <Route
          exact
          path='/user/phoenix-fd-application'
          render={() => {
            return checkTokenRepeat() ? <PhoenixFDApplication userData={userData}
              discordAuthenticated={discordAuthenticated}
              verifiedCiv={verifiedCiv} /> : <Login />;
          }}
        />
        <Route
          exact
          path='/user/mcso-application'
          render={() => {
            return checkTokenRepeat() ? <PCSOApplication userData={userData}
              discordAuthenticated={discordAuthenticated}
              verifiedCiv={verifiedCiv} /> : <Login />;
          }}
        />
        <Route
          exact
          path='/user/doc-application'
          render={() => {
            return checkTokenRepeat() ? <DOCApplication userData={userData}
              discordAuthenticated={discordAuthenticated}
              verifiedCiv={verifiedCiv} /> : <Login />;
          }}
        />
        <Route
          exact
          path='/user/civ-application'
          render={() => {
            return checkTokenRepeat() ? <CertifiedCivilianApplicaiton userData={userData}
              discordAuthenticated={discordAuthenticated}
              verifiedCiv={verifiedCiv} /> : <Login />;
          }}
        />
        <Route
          exact
          path="/user/azdps-application"
          render={() => {
            return checkTokenRepeat() ? <AZDPSApplication userData={userData} discordAuthenticated={discordAuthenticated} verifiedCiv={verifiedCiv} /> : <Login />;
          }} />
        <Route
          exact
          path='/user/dot-application'
          render={() => {
            return checkTokenRepeat() ? <DOTApplication userData={userData}
              discordAuthenticated={discordAuthenticated}
              verifiedCiv={verifiedCiv} /> : <Login />;
          }}
        />
        <Route
          exact
          path='/user/applications'
          render={() => {
            return checkTokenRepeat() ? <Applications userData={userData}
              discordAuthenticated={discordAuthenticated}
              verifiedCiv={verifiedCiv} /> : <Login />;
          }}
        />
        {/* <Route
          exact
          path='/user/faa-application'
          render={() => {
            return checkTokenRepeat() ? <FAAApplication userData={userData}
              discordAuthenticated={discordAuthenticated}
              verifiedCiv={verifiedCiv} /> : <Login />;
          }}
        /> */}
        {/* <Route
          exact
          path='/user/fbi-application'
          render={() => {
            return checkTokenRepeat() ? <FBIApplication userData={userData}
              discordAuthenticated={discordAuthenticated}
              verifiedCiv={verifiedCiv} /> : <Login />;
          }}
        /> */}
        {/* <Route
          exact
          path='/user/staff-application'
          render={() => {
            return checkTokenRepeat() ? <StaffApplication userData={userData}
              discordAuthenticated={discordAuthenticated}
              verifiedCiv={verifiedCiv} /> : <Login />;
          }}
        /> */}
        <Route
          exact
          path="/user/logout"
          render={() => {
            window.localStorage.clear();
            return (window.location.href = "/");
          }}
        />
        <Redirect from='/home' to='/' />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
      <ToastContainer />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
