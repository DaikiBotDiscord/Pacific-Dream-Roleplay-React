import React from "react";

import "./userHome.css";
import FooterContainer from "../components/footer-container";
import UserHeader from "../components/user-header";

const UserHome = (props) => {
    return (
        <div className="user-home-container">
            <div className="user-home-container1">
                {" "}
                <UserHeader rootClassName="user-header-root-class-name"></UserHeader>
            </div>{" "}
            <h1 className="user-home-text">Welcome to your PDRP Account</h1>{" "}
            <span className="user-home-text1">
                {" "}
                <span>
                    {" "}
                    We are in the process of ongoing development for this section of the
                    website. We kindly invite you to revisit at a later time to explore
                    the latest updates and enhancements to our platform.{" "}
                    <span
                        dangerouslySetInnerHTML={{
                            __html: " ",
                        }}
                    />{" "}
                </span>{" "}
                <br></br>{" "}
                <span>
                    {" "}
                    Thank you for your understanding and patience as we continue to refine
                    and optimize our features.{" "}
                </span>{" "}
            </span>{" "}
            <FooterContainer rootClassName="footer-container-root-class-name4"></FooterContainer>{" "}
        </div>
    );
};

export default UserHome;