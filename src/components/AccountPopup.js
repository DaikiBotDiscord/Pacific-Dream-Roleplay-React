import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './AccountPopup.css';
import PropTypes from 'prop-types';
import config from '../views/config/config';

const AccountPopup = (props) => {
    const [userData, setUserData] = useState("");
    const [VerifiedCivStatus, setVerifiedCivStatus] = useState("")

    useEffect(() => {
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
                if (data.data === "token expired") {
                    window.localStorage.clear();
                    return (window.location.href = "/login");
                }

                if (data.data.VerifiedCiv === true) {
                    setVerifiedCivStatus("Active")
                } else if (data.data.VerifiedCiv === false) {
                    setVerifiedCivStatus("Inactive")
                } else {
                    setVerifiedCivStatus("Not Available at this time")
                }
                // Update userData state
                setUserData(data.data);
                /* setVerifiedCiv(data.data.verifiedCiv || undefined);
                console.log(verifiedCiv) */

            })
            .catch((error) => {
                console.log(error);
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

    }, []);
    return (
        <div className="account-popup-container">
            <div className="account-popup-container01">
                <div className="account-popup-container02">
                    <button type="button" onClick={props.handleClosePopup} className="account-popup-button button">
                        {props.button}
                    </button>
                    <div className="account-popup-container03">
                        <h1 className="account-popup-text">{props.heading11}</h1>
                    </div>
                    <div className="account-popup-container04">
                        <div className="account-popup-container05">
                            <span className="account-popup-text01">{props.text31}</span>
                            <span className="account-popup-text02">{userData.email}</span>
                        </div>
                        <div className="account-popup-container06">
                            <span className="account-popup-text03">{props.text331}</span>
                            <span className="account-popup-text04">{props.text1}</span>
                        </div>
                    </div>
                    <div className="account-popup-container07">
                        <div className="account-popup-container08">
                            <span className="account-popup-text05">{props.text332}</span>
                            <span className="account-popup-text06">{userData.username}</span>
                        </div>
                        <div className="account-popup-container09">
                            <span className="account-popup-text07">{props.text3311}</span>
                            {console.log(userData)}
                            <span className="account-popup-text08">{VerifiedCivStatus}</span>
                        </div>
                    </div>
                    {/* <div className="account-popup-container10">
                        <h1 className="account-popup-text09">{props.heading1}</h1>
                    </div>
                    <div className="account-popup-container11">
                        <span className="account-popup-text10">{props.text3}</span>
                        <Link to="/home" className="account-popup-navlink button">
                            {props.button1}
                        </Link>
                        <span className="account-popup-text11">{props.text12}</span>
                        <Link to="/home" className="account-popup-navlink1 button">
                            {props.button11}
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

AccountPopup.defaultProps = {
    button: 'Close',
    text3: 'Change Email Address',
    text12: 'Change Password',
    text31: 'Current Email Address',
    button1: 'Change Email Address',
    heading: 'Current Information',
    heading1: 'Change Information',
    button11: 'Change Password',
    text32: 'Current Password',
    text33: 'Current Email Address',
    text: '{email_address}',
    heading11: 'Current Information',
    text331: 'Current Password',
    text1: 'Not Available at this time',
    text332: 'Discord Username',
    text2: '{username}',
    text3311: 'Verified Civilian',
    text11: '{verified_civ}',
};

AccountPopup.propTypes = {
    button: PropTypes.string,
    text3: PropTypes.string,
    text12: PropTypes.string,
    text31: PropTypes.string,
    button1: PropTypes.string,
    heading: PropTypes.string,
    heading1: PropTypes.string,
    button11: PropTypes.string,
    text32: PropTypes.string,
    text33: PropTypes.string,
    text: PropTypes.string,
    heading11: PropTypes.string,
    text331: PropTypes.string,
    text1: PropTypes.string,
    text332: PropTypes.string,
    text2: PropTypes.string,
    text3311: PropTypes.string,
    text11: PropTypes.string,
    userData: PropTypes.object.isRequired,
    handleClosePopup: PropTypes.func.isRequired,
};

export default AccountPopup;