import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/header'
import FooterContainer from '../components/footer-container'
import './applications.css'
import { Helmet } from 'react-helmet'

const Applications = (props) => {
    return (
        <div className="applications-container">
            <div className="applications-container01">
                <Header rootClassName="header-root-class-name6"></Header>
                <img
                    alt="image"
                    src="https://pinalcountyroleplay.com/applications.png"
                    className="applications-image"
                />
                <div className="applications-hero">
                    <div className="applications-container02">
                        <h1 className="applications-text">Application Status</h1>
                        <div className="applications-container03">
                            <div className="applications-container04">
                                <span className="applications-text01">
                                    <span>
                                        Pinal County
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: ' ',
                                            }}
                                        />
                                    </span>
                                    <br></br>
                                    <span>Sheriff&apos;s Office </span>
                                </span>
                                <span className="applications-text05">
                                    <span>APPROVED</span>
                                    <br></br>
                                </span>
                                <img
                                    alt="image"
                                    src="https://pinalcountyroleplay.com/accepted.png"
                                    className="applications-image01"
                                />
                            </div>
                            <div className="applications-container05">
                                <span className="applications-text08">
                                    <span>Phoenix Police</span>
                                    <br></br>
                                    <span>Department</span>
                                    <br></br>
                                </span>
                                <span className="applications-text13">
                                    <span>DENIED</span>
                                    <br></br>
                                </span>
                                <img
                                    alt="image"
                                    src="https://pinalcountyroleplay.com/denied.png"
                                    className="applications-image02"
                                />
                            </div>
                            <div className="applications-container06">
                                <span className="applications-text16">
                                    <span>Phoenix Fire &amp;</span>
                                    <br></br>
                                    <span>Rescue</span>
                                    <br></br>
                                </span>
                                <span className="applications-text21">
                                    <span>IN PROGRESS</span>
                                    <br></br>
                                </span>
                                <img
                                    alt="image"
                                    src="https://pinalcountyroleplay.com/in_progress.png"
                                    className="applications-image03"
                                />
                            </div>
                            <div className="applications-container07">
                                <span className="applications-text24">
                                    <span>
                                        AZ Internal
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: ' ',
                                            }}
                                        />
                                    </span>
                                    <span>Affairs </span>
                                    <span>Department</span>
                                    <br></br>
                                </span>
                                <span className="applications-text29">
                                    <span>NOT STARTED</span>
                                    <br></br>
                                </span>
                                <img
                                    alt="image"
                                    src="https://pinalcountyroleplay.com/not_started.png"
                                    className="applications-image04"
                                />
                            </div>
                            <div className="applications-container08">
                                <span className="applications-text32">
                                    <span>AZ Department</span>
                                    <br></br>
                                    <span>of </span>
                                    <span>Communications</span>
                                    <br></br>
                                </span>
                                <span className="applications-text38">
                                    <span>APPROVED</span>
                                    <br></br>
                                </span>
                                <img
                                    alt="image"
                                    src="https://pinalcountyroleplay.com/accepted.png"
                                    className="applications-image05"
                                />
                            </div>
                            <div className="applications-container09">
                                <span className="applications-text41">
                                    <span>AZ Department of</span>
                                    <br></br>
                                    <span>Certified Civilians</span>
                                    <br></br>
                                </span>
                                <span className="applications-text46">
                                    <span>DENIED</span>
                                    <br></br>
                                </span>
                                <img
                                    alt="image"
                                    src="https://pinalcountyroleplay.com/denied.png"
                                    className="applications-image06"
                                />
                            </div>
                            <div className="applications-container10">
                                <span className="applications-text49">
                                    <span>AZ Department of </span>
                                    <br></br>
                                    <span>Public Safety</span>
                                    <br></br>
                                </span>
                                <span className="applications-text54">
                                    <span>IN PROGRESS</span>
                                    <br></br>
                                </span>
                                <img
                                    alt="image"
                                    src="https://pinalcountyroleplay.com/in_progress.png"
                                    className="applications-image07"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="applications-container11">
                        <h1 className="applications-text57">
                            <span>Applications</span>
                            <br></br>
                        </h1>
                        <div className="applications-container12">
                            <div className="applications-container13">
                                <img
                                    alt="image"
                                    src="https://pinalcountyroleplay.com/PCSO_LOGO.png"
                                    className="applications-image08"
                                />
                                <span className="applications-text60">
                                    <span>Pinal County</span>
                                    <br></br>
                                    <span>Sheriff&apos;s Office</span>
                                    <br></br>
                                </span>
                            </div>
                            <div className="applications-container14">
                                <img
                                    alt="image"
                                    src="https://pinalcountyroleplay.com/FFD_LOGO.png"
                                    className="applications-image09"
                                />
                                <span className="applications-text65">
                                    <span>Phoenix Fire &amp; Rescue</span>
                                    <br></br>
                                </span>
                            </div>
                            <Link to="/azdps-application" className="applications-navlink">
                                <div className="applications-container15">
                                    <img
                                        alt="image"
                                        src="https://pinalcountyroleplay.com/AZSP_LOGO.png"
                                        className="applications-image10"
                                    />
                                    <span className="applications-text68">
                                        <span>Department of</span>
                                        <br></br>
                                        <span>Public Safety</span>
                                        <br></br>
                                    </span>
                                </div>
                            </Link>
                            <div className="applications-container16">
                                <img
                                    alt="image"
                                    src="https://pinalcountyroleplay.com/DOC_LOGO.png"
                                    className="applications-image11"
                                />
                                <span className="applications-text73">
                                    <span>Phoenix Police</span>
                                    <br></br>
                                    <span>Department</span>
                                    <br></br>
                                </span>
                            </div>
                            <div className="applications-container17">
                                <img
                                    alt="image"
                                    src="https://pinalcountyroleplay.com/DOC_LOGO.png"
                                    className="applications-image12"
                                />
                                <span className="applications-text78">
                                    <span>Department of</span>
                                    <br></br>
                                    <span>Communications</span>
                                    <br></br>
                                </span>
                            </div>
                            <div className="applications-container18">
                                <img
                                    alt="image"
                                    src="https://pinalcountyroleplay.com/AZDOT_LOGO.png"
                                    className="applications-image13"
                                />
                                <span className="applications-text83">
                                    <span>Department of</span>
                                    <br></br>
                                    <span>Transportation</span>
                                    <br></br>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterContainer rootClassName="footer-container-root-class-name6"></FooterContainer>
        </div>
    )
}

export default Applications
