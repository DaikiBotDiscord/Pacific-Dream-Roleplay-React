import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FooterContainer from '../components/footer-container'
import './staff-application.css'

const StaffApplication = (props) => {
    return (
        <div className="staff-application-container">
            <Helmet>
                <title>Staff Application - Arizona State Roleplay</title>
                <meta
                    property="og:title"
                    content="Staff-Application - Arizona State Roleplay"
                />
            </Helmet>
            <div className="staff-application-container1">
                <Header rootClassName="header-root-class-name17"></Header>
                <img
                    alt="image"
                    src="https://pinalcountyrp.com/staff_app_title.png"
                    className="staff-application-image"
                />
                <div className="staff-application-hero">
                    <div className="staff-application-container2">
                        <div className="staff-application-container3">
                            <span className="staff-application-text">
                                <span className="staff-application-text01">Requirements:</span>
                                <br className="staff-application-text02"></br>
                                <span className="staff-application-text03">
                                    Must be 16 Years of Age
                                </span>
                                <br className="staff-application-text04"></br>
                                <span className="staff-application-text05">
                                    Must have been in the Arizona State Roleplay Discord for 2
                                    Weeks Prior to Application
                                </span>
                                <br className="staff-application-text06"></br>
                                <span className="staff-application-text07">
                                    Must have logged 5 Hours or more in the FiveM Server
                                </span>
                                <br className="staff-application-text08"></br>
                                <span className="staff-application-text09">
                                    Must have a good standing with staff and or leadership
                                </span>
                                <br className="staff-application-text10"></br>
                                <span className="staff-application-text11">
                                    Must have had no past staff related punishments in the past 2
                                    weeks
                                </span>
                                <br></br>
                            </span>
                            <span className="staff-application-text13">
                                <span className="staff-application-text14">
                                    * Indicates required question
                                </span>
                                <br></br>
                            </span>
                            <form className="staff-application-form">
                                <span className="staff-application-text16">
                                    <span>Section 1</span>
                                    <br></br>
                                </span>
                                <div className="staff-application-question-1">
                                    <span className="staff-application-text19">
                                        <span>What is your discord username? ex. 4cezscopex </span>
                                        <span className="staff-application-text21">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q1"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="staff-application-textinput input"
                                    />
                                </div>
                                <div className="staff-application-question-2">
                                    <span className="staff-application-text22">
                                        <span>
                                            Why do you want to be on the staff team? (5 Sentence
                                            Minimum)
                                        </span>
                                        <span className="staff-application-text24">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        id="q2"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="staff-application-textinput1 input"
                                    />
                                </div>
                                <span className="staff-application-text25">Section 2</span>
                                <div className="staff-application-question-3">
                                    <span className="staff-application-text26">
                                        <span>How long have you been in our server? </span>
                                        <span className="staff-application-text28">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q3"
                                        cols="60"
                                        rows="3"
                                        placeholder="Your Answer"
                                        className="staff-application-textarea textarea"
                                    ></textarea>
                                </div>
                                <div className="staff-application-question-4">
                                    <span className="staff-application-text30">
                                        <span>
                                            Do you have experience as a staff member in other servers
                                            if so. Explain. (If Explaining 5 Sentence Minimum)
                                        </span>
                                        <span className="staff-application-text32">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q4"
                                        cols="60"
                                        rows="3"
                                        placeholder="Your Answer"
                                        className="staff-application-textarea01 textarea"
                                    ></textarea>
                                </div>
                                <div className="staff-application-question-5">
                                    <span className="staff-application-text34">
                                        <span>
                                            How much time can you dedicate to our server. (Hours a
                                            week)
                                        </span>
                                        <span className="staff-application-text36">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q5"
                                        cols="60"
                                        rows="3"
                                        placeholder="Your Answer"
                                        className="staff-application-textarea02 textarea"
                                    ></textarea>
                                </div>
                                <div className="staff-application-question-6">
                                    <span className="staff-application-text38">
                                        <span>
                                            What are your Strengths? (Roleplay Abilities / Staff
                                            Abilities) (3 Sentence Minimum)
                                        </span>
                                        <span className="staff-application-text40">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q6"
                                        cols="60"
                                        rows="3"
                                        placeholder="Your Answer"
                                        className="staff-application-textarea03 textarea"
                                    ></textarea>
                                </div>
                                <div className="staff-application-question-7">
                                    <span className="staff-application-text42">
                                        <span>
                                            What are your Weaknesses? (Roleplay Abilities / Staff
                                            Abilities) (3 Sentence Minimum)
                                        </span>
                                        <span className="staff-application-text44">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q7"
                                        cols="60"
                                        rows="3"
                                        placeholder="Your Answer"
                                        className="staff-application-textarea04 textarea"
                                    ></textarea>
                                </div>
                                <div className="staff-application-question-8">
                                    <span className="staff-application-text46">
                                        <span>
                                            Do you have any previous experience in the Federal side of
                                            law enforcement? If so, explain.
                                        </span>
                                        <span className="staff-application-text48">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q8"
                                        cols="60"
                                        rows="3"
                                        placeholder="Your Answer"
                                        className="staff-application-textarea05 textarea"
                                    ></textarea>
                                </div>
                                <div className="staff-application-question-9">
                                    <span className="staff-application-text50">
                                        <span>What other communities are you in? </span>
                                        <span className="staff-application-text52">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q9"
                                        cols="60"
                                        rows="3"
                                        placeholder="Your Answer"
                                        className="staff-application-textarea06 textarea"
                                    ></textarea>
                                </div>
                                <span className="staff-application-text54">Section 3</span>
                                <div className="staff-application-question-10">
                                    <span className="staff-application-text55">
                                        <span>
                                            What would you do if a staff member was caught abusing
                                            their power in roleplay. You decide if there a higher or
                                            lower rank than you. (5 Sentence Minimum)
                                        </span>
                                        <span className="staff-application-text57">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q10"
                                        cols="60"
                                        rows="3"
                                        placeholder="Your Answer"
                                        className="staff-application-textarea07 textarea"
                                    ></textarea>
                                </div>
                                <div className="staff-application-question-11">
                                    <span className="staff-application-text59">
                                        <span>
                                            Lets say someone when you try to start a staff scene
                                            shoots at staff how would you handle that situation?
                                        </span>
                                        <span className="staff-application-text61">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q11"
                                        cols="60"
                                        rows="3"
                                        placeholder="Your Answer"
                                        className="staff-application-textarea08 textarea"
                                    ></textarea>
                                </div>
                                <span className="staff-application-text63">Section 4</span>
                                <div className="staff-application-question-12">
                                    <span className="staff-application-text64">
                                        <span>
                                            Do you understand lying on these applications will result
                                            in denial and possible disciplinary action in our server?
                                        </span>
                                        <span className="staff-application-text66">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q12"
                                        cols="60"
                                        rows="3"
                                        placeholder="Your Answer"
                                        className="staff-application-textarea09 textarea"
                                    ></textarea>
                                </div>
                                <div className="staff-application-question-13">
                                    <span className="staff-application-text68">
                                        <span>Anything to add? </span>
                                        <span className="staff-application-text70">*</span>
                                        <br></br>
                                    </span>
                                    <textarea
                                        id="q13"
                                        cols="60"
                                        rows="3"
                                        placeholder="Your Answer"
                                        className="staff-application-textarea10 textarea"
                                    ></textarea>
                                </div>
                                <button className="staff-application-button button">
                                    <span>
                                        <span className="staff-application-text73">Submit</span>
                                        <br></br>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <FooterContainer rootClassName="footer-container-root-class-name17"></FooterContainer>
        </div>
    )
}

export default StaffApplication
