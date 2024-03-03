import React from "react";

import "./userHome.css";
import FooterContainer from "../components/footer-container";
import UserHeader from "../components/user-header";
import config from "./config/config";

export default function UserHome({ userData, discordAuthenticated, verifiedCiv }) {
    function capitalizeFirstLetter(str) {
        return str?.charAt(0).toUpperCase() + str?.slice(1);
    }

    if (!userData || !userData.data) {
        // Handle the case where userData or userData.data is undefined
        return null; // or display a loading message, redirect, etc.
    }

    const { data } = userData;

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
            console.log(data);
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
                    userMongoId: data.data._id,
                })
            }).then((res) => {
                return res.json();
            }).then((data) => {
                console.log(data)
                window.location.href = `${config.apiDomain}/api/auth/attach-pair-code/${data.pairCode}`;
            })
        })
    }

    return (
        <div className="user-home-container">
            <div className="user-home-container1">
                <UserHeader rootClassName="user-header-root-class-name"></UserHeader>
            </div>
            {verifiedCiv === false && discordAuthenticated === true ? (
                <div>
                    <h1 className="user-home-text">
                        You are not a whitelisted & verified civilian of PDRP.
                    </h1>
                    <h1>
                        You must be a verified and whitelisted civilian to access PDRP account services.
                    </h1>
                </div>
            ) : (
                discordAuthenticated === true ? (
                    <div className="user-home-container">
                        <h1 className="user-home-text">Welcome {capitalizeFirstLetter(data.fname)} to your PDRP Account!</h1>
                        <span className="user-home-text1">
                            We are in the process of ongoing development for this section of the
                            website. We kindly invite you to revisit at a later time to explore the
                            new application management system! Thank you for your
                            understanding and patience as we continue to refine and optimize our
                            features.
                        </span>
                    </div>
                ) : null
            )}

            {discordAuthenticated === false ? ( // Use discordAuthenticated to conditionally render the button
                <div className="user-home-container2">
                    <h1 className="user-home-text2">{capitalizeFirstLetter(data.fname)} Discord Integration is Required</h1>
                    <span className="user-home-text3">
                        <span>
                            To be able to access your PDRP account you are required to integrate with Discord
                        </span>
                        <br></br>
                        <span>
                            All information given is secure, encrypted, and confidential
                        </span>
                        <br></br>
                    </span>
                    <button type="button" className="user-home-button button" onClick={handleDiscordSubmit}>
                        Integrate with Discord
                    </button>
                </div>
            ) : null}
            <FooterContainer rootClassName="footer-container-root-class-name4"></FooterContainer>
        </div>
    );
}
