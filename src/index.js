import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './style.css';
import Staff from './views/staff';
import Login from './views/login';
import Home from './views/home';
import NotFound from './views/not-found';
import Register from './views/register';
import config from './views/config/config';
import UserHome from './views/userHome';

const App = () => {
  const [runEffect, setRunEffect] = useState(false);

  useEffect(() => {
    if (runEffect) {
      const checkToken = async () => {
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

          if (!response.ok) {
            throw new Error('failed to fetch!');
          }

          const data = await response.json();

          if (data.data === 'token expired') {
            window.localStorage.clear();
            window.location.href = '/login';
          } else if (data.status !== 'active') {
            // Handle other cases when the token is not valid
            // For example, redirect to the login page or display an error message
            window.localStorage.clear();
            window.location.href = '/login';
          }
        } catch (error) {
          console.error(error);
          toast.error('Unable to fetch user data at this time. Please try again.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        } finally {
          // Reset runEffect to false after the effect runs
          setRunEffect(false);
        }
      };

      checkToken();
    }
  }, [runEffect]);

  return (
    <Router>
      <Switch>
        <Route component={Staff} exact path="/staff" />
        {/* <Route component={Donation} exact path="/donation" /> */}
        <Route component={Login} exact path="/login" />
        <Route component={Register} exact path="/register" />
        <Route
          exact
          path="/user/home"
          render={() => {
            // Set runEffect to true when someone visits /home
            setRunEffect(true);
            return window.localStorage.getItem('token') ? <UserHome /> : <Login />;
          }}
        />
        <Route
          exact
          path="/user/logout"
          render={() => {
            window.localStorage.clear();
            return window.location.href = '/';
          }} />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
      <ToastContainer />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
