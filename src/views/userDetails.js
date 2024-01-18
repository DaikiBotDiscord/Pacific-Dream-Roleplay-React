import React, { Component, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import config from "./config/config";
import UserHome from "./userHome";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function UserDetails() {
    const [userData, setUserData] = useState("");
    const [cantShow, setCantShow] = useState(false);
    const [isLoading, setLoading] = useState("");
    const [currentURL, setCurrentURL] = useState(window.location.href)

    useEffect(() => {

        const handleURLChange = () => {
            setCurrentURL(window.location.href);
        };

        window.addEventListener('popstate', handleURLChange);

        setLoading(true);
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
        })
            .then((data) => {
                setCantShow(false);
                setLoading(false);
                if (data.data === "token expired") {
                    window.localStorage.clear();
                    return (window.location.href = "/login");
                }

                // Update userData state
                setUserData(data);

            })
            .catch((error) => {
                console.log(error);
                setCantShow(true);
                setLoading(false);
                toast.error('Unable to fetch user data at this time. Please try again.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            });
        return () => {
            window.removeEventListener('popstate', handleURLChange)
        }
    }, []);
    if (currentURL.includes('/user/home')) {
        return <UserHome userData={userData} />
    } else {
        return <Redirect to='/login' />;
    }
}