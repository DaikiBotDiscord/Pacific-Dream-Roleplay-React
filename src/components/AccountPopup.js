// AccountPopup.js
import React from 'react';
import './AccountPopup.css';
import PropTypes from 'prop-types';

const AccountPopup = (props) => {
    // Add your account management content and functionality here

    return (
        <div className="account-popup-container">
            <div className="account-popup-container1">
                <div className="account-popup-container2">
                    <button type="button" onClick={props.handleClosePopup} className="account-popup-button button">
                        {props.button}
                    </button>
                    <div className='account-popup-container3'>
                        <h1 className='account-popup-text'>{props.heading}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

AccountPopup.defaultProps = {
    button: 'Close',
    heading: 'More Coming Soon',
};

AccountPopup.propTypes = {
    button: PropTypes.string,
    handleClosePopup: PropTypes.func.isRequired, // Ensure handleClosePopup is passed as a prop
};

export default AccountPopup;