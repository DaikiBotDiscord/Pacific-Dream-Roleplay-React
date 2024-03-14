import React from 'react'

import Header from '../components/header'
import FooterContainer from '../components/footer-container'
import './phoenix-fd-application.css'
import { Helmet } from 'react-helmet'

const PhoenixFDApplication = (props) => {
    return (
        <div className="phoenix-fd-application-container">
            <Helmet>
                <title>Phoenix FD Application - Pinal County Roleplay</title>
                <meta property="og:title" content="Pinal County Roleplay" />
            </Helmet>
            <div className="phoenix-fd-application-container1">
                <Header rootClassName="header-root-class-name9"></Header>
                <img
                    alt="image"
                    src="https://pinalcountyroleplay.com/PFD_title.png"
                    className="phoenix-fd-application-image"
                />
                <div className="phoenix-fd-application-hero">
                    <div className="phoenix-fd-application-container2">
                        <div className="phoenix-fd-application-container3">
                            <h1 className="phoenix-fd-application-text">Legal Notice:</h1>
                            <span className="phoenix-fd-application-text01">
                                <span>
                                    This document is in no way, shape or form, affiliated with
                                    Federal, Governmental, or National Agencies. This document is
                                    purely fictional in nature, and offers no accreditation to
                                    legal agencies. Property of Pinal County Roleplay
                                </span>
                                <br></br>
                            </span>
                            <h1 className="phoenix-fd-application-text04">Guidelines:</h1>
                            <span className="phoenix-fd-application-text05">
                                <span>
                                    You must wait 7 days before asking about the status of the
                                    application
                                </span>
                                <br></br>
                            </span>
                            <span className="phoenix-fd-application-text08">
                                <span className="phoenix-fd-application-text09">
                                    * Indicates required question
                                </span>
                                <br></br>
                            </span>
                            <form className="phoenix-fd-application-form">
                                <div className="phoenix-fd-application-question-1">
                                    <span className="phoenix-fd-application-text11">
                                        Email Address
                                    </span>
                                    <input
                                        type="email"
                                        id="q1"
                                        placeholder="Your Answer"
                                        className="phoenix-fd-application-textinput input"
                                    />
                                </div>
                                <div className="phoenix-fd-application-question-2">
                                    <span className="phoenix-fd-application-text12">
                                        <span>First &amp; Last Name </span>
                                        <span className="phoenix-fd-application-text14">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q2"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="phoenix-fd-application-textinput01 input"
                                    />
                                </div>
                                <div className="phoenix-fd-application-question-3">
                                    <span className="phoenix-fd-application-text15">
                                        <span>Role Play Name </span>
                                        <span className="phoenix-fd-application-text17">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q3"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="phoenix-fd-application-textinput02 input"
                                    />
                                </div>
                                <div className="phoenix-fd-application-question-4">
                                    <span className="phoenix-fd-application-text19">
                                        <span>
                                            Discord Name (Example: Little White Tiger#0308)
                                        </span>
                                        <span className="phoenix-fd-application-text21">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q4"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="phoenix-fd-application-textinput03 input"
                                    />
                                </div>
                                <div className="phoenix-fd-application-question-5">
                                    <span className="phoenix-fd-application-text23">
                                        <span>Date of Birth </span>
                                        <span className="phoenix-fd-application-text25">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="date"
                                        id="q5"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="phoenix-fd-application-textinput04 input"
                                    />
                                </div>
                                <div className="phoenix-fd-application-question-6">
                                    <span className="phoenix-fd-application-text27">
                                        <span>Age </span>
                                        <span className="phoenix-fd-application-text29">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q6"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="phoenix-fd-application-textinput05 input"
                                    />
                                </div>
                                <div className="phoenix-fd-application-question-7">
                                    <span className="phoenix-fd-application-text31">
                                        <span>Have you read over the SOP? </span>
                                        <span className="phoenix-fd-application-text33">*</span>
                                        <br></br>
                                    </span>
                                    <select
                                        id="q7"
                                        required="true"
                                        className="phoenix-fd-application-select"
                                    >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="phoenix-fd-application-separator">
                                    <div className="phoenix-fd-application-separator1"></div>
                                </div>
                                <h1>
                                    <span>Basic Questions</span>
                                    <br></br>
                                </h1>
                                <div className="phoenix-fd-application-question-8">
                                    <span className="phoenix-fd-application-text38">
                                        <span>
                                            In a few sentences please explain why you would want to
                                            join PHFD
                                        </span>
                                        <span className="phoenix-fd-application-text40">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q8"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="phoenix-fd-application-textinput06 input"
                                    />
                                </div>
                                <div className="phoenix-fd-application-question-9">
                                    <span className="phoenix-fd-application-text42">
                                        <span>
                                            Do you have any previous experience with fire and rescue
                                            IRL or In FiveM? If so please explain here, N/A If none
                                        </span>
                                        <span className="phoenix-fd-application-text44">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q9"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="phoenix-fd-application-textinput07 input"
                                    />
                                </div>
                                <div className="phoenix-fd-application-question-10">
                                    <span className="phoenix-fd-application-text46">
                                        <span>
                                            Why should we pick your application over others?
                                        </span>
                                        <span className="phoenix-fd-application-text48">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q10"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="phoenix-fd-application-textinput08 input"
                                    />
                                </div>
                                <div className="phoenix-fd-application-separator2">
                                    <div className="phoenix-fd-application-separator3"></div>
                                </div>
                                <h1>
                                    <span>Final Questions</span>
                                    <br></br>
                                </h1>
                                <div className="phoenix-fd-application-question-11">
                                    <span className="phoenix-fd-application-text53">
                                        <span>
                                            Are you okay with your higher ups being younger than you?
                                        </span>
                                        <span className="phoenix-fd-application-text55">*</span>
                                        <br></br>
                                    </span>
                                    <select
                                        id="q11"
                                        required="true"
                                        className="phoenix-fd-application-select1"
                                    >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="phoenix-fd-application-question-12">
                                    <span className="phoenix-fd-application-text57">
                                        <span>
                                            Do you understand that any plagiarism will result in an
                                            instant denial?
                                        </span>
                                        <span className="phoenix-fd-application-text59">*</span>
                                        <br></br>
                                    </span>
                                    <select
                                        id="q12"
                                        required="true"
                                        className="phoenix-fd-application-select2"
                                    >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="phoenix-fd-application-question-13">
                                    <span className="phoenix-fd-application-text61">
                                        <span>
                                            Do you understand that if you ask higher ups about your
                                            application status before the 7 days it could result in a
                                            instant denial?
                                        </span>
                                        <span className="phoenix-fd-application-text63">*</span>
                                        <br></br>
                                    </span>
                                    <select
                                        id="q13"
                                        required="true"
                                        className="phoenix-fd-application-select3"
                                    >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="phoenix-fd-application-question-14">
                                    <span className="phoenix-fd-application-text65">
                                        <span>Do you have any other questions? N/A If none </span>
                                        <span className="phoenix-fd-application-text67">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q14"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="phoenix-fd-application-textinput09 input"
                                    />
                                </div>
                                <div className="phoenix-fd-application-question-15">
                                    <span className="phoenix-fd-application-text69">
                                        <span>Date of submission </span>
                                        <span className="phoenix-fd-application-text71">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="date"
                                        id="q15"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="phoenix-fd-application-textinput10 input"
                                    />
                                </div>
                                <div className="phoenix-fd-application-question-141">
                                    <span className="phoenix-fd-application-text73">
                                        <span>Signature </span>
                                        <span className="phoenix-fd-application-text75">*</span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q16"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="phoenix-fd-application-textinput11 input"
                                    />
                                </div>
                                <button className="phoenix-fd-application-button button">
                                    <span>
                                        <span className="phoenix-fd-application-text78">
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
            <FooterContainer rootClassName="footer-container-root-class-name9"></FooterContainer>
        </div>
    )
}

export default PhoenixFDApplication
