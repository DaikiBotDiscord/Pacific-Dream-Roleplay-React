import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FooterContainer from '../components/footer-container'
import './phoenix-pd-application.css'

const PhoenixPDApplication = (props) => {
    return (
        <div className="phoenix-pd-application-container">
            <Helmet>
                <title>Phoenix PD Application - Pinal County Roleplay</title>
                <meta property="og:title" content="Phoenix PD Application - Pinal County Roleplay" />
            </Helmet>
            <div className="phoenix-pd-application-container1">
                <Header rootClassName="header-root-class-name8"></Header>
                <img
                    alt="image"
                    src="https://pinalcountyroleplay.com/PPD_title.png"
                    className="phoenix-pd-application-image"
                />
                <div className="phoenix-pd-application-hero">
                    <div className="phoenix-pd-application-container2">
                        <div className="phoenix-pd-application-container3">
                            <img
                                alt="image"
                                src="https://pinalcountyroleplay.com/PPD_background.png"
                                className="phoenix-pd-application-image1"
                            />
                            <span className="phoenix-pd-application-text">
                                PCRP Official PHXPD Application
                            </span>
                            <span className="phoenix-pd-application-text01">
                                <span className="phoenix-pd-application-text02">
                                    * Indicates required question
                                </span>
                                <br></br>
                            </span>
                            <form className="phoenix-pd-application-form">
                                <div className="phoenix-pd-application-question-1">
                                    <span className="phoenix-pd-application-text04">
                                        <span>What is your Discord Username? </span>
                                        <span className="phoenix-pd-application-text06">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q1"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="phoenix-pd-application-input input"
                                    />
                                </div>
                                <div className="phoenix-pd-application-question-2">
                                    <span className="phoenix-pd-application-text07">
                                        <span>How old are you? </span>
                                        <span className="phoenix-pd-application-text09">*</span>
                                    </span>
                                    <select id="q2" required="true">
                                        <option value="15 or Younger">15 or Younger</option>
                                        <option value="16-18">16-18</option>
                                        <option value="18+">18+</option>
                                    </select>
                                </div>
                                <div className="phoenix-pd-application-question-3">
                                    <span className="phoenix-pd-application-text10">
                                        <span>
                                            Are you a Certified Civilian with PDRP? (Pinal County
                                            Roleplay)
                                        </span>
                                        <span className="phoenix-pd-application-text12">*</span>
                                    </span>
                                    <select id="q3" required="true">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="Not Yet">Not Yet</option>
                                        <option value="Working on it">Working on it</option>
                                        <option value="I don't know">I don&apos;t know</option>
                                    </select>
                                </div>
                                <div className="phoenix-pd-application-question-4">
                                    <span className="phoenix-pd-application-text13">
                                        <span>How long have you been in our server? </span>
                                        <span className="phoenix-pd-application-text15">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q4"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="phoenix-pd-application-input1 input"
                                    />
                                </div>
                                <div className="phoenix-pd-application-question-5">
                                    <span className="phoenix-pd-application-text16">
                                        <span>
                                            Do you have a microphone good enough for content
                                            creation?
                                        </span>
                                        <span className="phoenix-pd-application-text18">*</span>
                                    </span>
                                    <select id="q5" required="true">
                                        <option value="No">No</option>
                                        <option value="Yes">Yes</option>
                                    </select>
                                </div>
                                <div className="phoenix-pd-application-separator">
                                    <div className="phoenix-pd-application-separator1"></div>
                                </div>
                                <span className="phoenix-pd-application-text19">
                                    <span>Experience / Work Ethic Questions</span>
                                    <br></br>
                                </span>
                                <h1>
                                    <span>Experience / Work Ethic Questions</span>
                                    <br></br>
                                </h1>
                                <div className="phoenix-pd-application-question-6">
                                    <span className="phoenix-pd-application-text25">
                                        <span>
                                            Do you have experience in other servers as LEO? If so
                                            explain.
                                        </span>
                                        <span className="phoenix-pd-application-text27">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q6"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="phoenix-pd-application-input2 input"
                                    />
                                </div>
                                <div className="phoenix-pd-application-question-7">
                                    <span className="phoenix-pd-application-text28">
                                        <span>Why do you want to be a trooper with us? </span>
                                        <span className="phoenix-pd-application-text30">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q7"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="phoenix-pd-application-input3 input"
                                    />
                                </div>
                                <div className="phoenix-pd-application-question-8">
                                    <span className="phoenix-pd-application-text31">
                                        <span>What can you bring to the department? </span>
                                        <span className="phoenix-pd-application-text33">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q8"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="phoenix-pd-application-input4 input"
                                    />
                                </div>
                                <div className="phoenix-pd-application-separator2">
                                    <div className="phoenix-pd-application-separator3"></div>
                                </div>
                                <span className="phoenix-pd-application-text34">
                                    <span>Requirements</span>
                                    <br></br>
                                </span>
                                <h1>
                                    <span>PHXPD Oaths to The Department</span>
                                    <br></br>
                                </h1>
                                <div className="phoenix-pd-application-question-9">
                                    <span className="phoenix-pd-application-text40">
                                        <span>
                                            Are you willing to listen to instructions and respect your
                                            fellow officers that are of a higher rank?
                                        </span>
                                        <span className="phoenix-pd-application-text42">*</span>
                                    </span>
                                    <select
                                        id="q9"
                                        required="true"
                                        className="phoenix-pd-application-select3"
                                    >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="phoenix-pd-application-question-10">
                                    <span className="phoenix-pd-application-text43">
                                        <span>
                                            Are you willing to listen to instructions and respect your
                                            fellow officers that are of a higher rank?
                                        </span>
                                        <span className="phoenix-pd-application-text45">*</span>
                                    </span>
                                    <select
                                        id="q10"
                                        required="true"
                                        className="phoenix-pd-application-select4"
                                    >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="phoenix-pd-application-question-11">
                                    <span className="phoenix-pd-application-text46">
                                        <span>Anything you would like to Add? </span>
                                        <span className="phoenix-pd-application-text48">*</span>
                                    </span>
                                    <textarea
                                        cols="25"
                                        rows="4"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="phoenix-pd-application-textarea textarea"
                                    ></textarea>
                                </div>
                                <button className="phoenix-pd-application-button button">
                                    <span>
                                        <span className="phoenix-pd-application-text50">
                                            Submit
                                        </span>
                                        <br></br>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <FooterContainer rootClassName="footer-container-root-class-name8"></FooterContainer>
        </div>
    )
}

export default PhoenixPDApplication
