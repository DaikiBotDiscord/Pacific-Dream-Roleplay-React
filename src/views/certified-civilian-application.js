import React, { useEffect, useState } from 'react'

import Header from '../components/header'
import UserHeader from '../components/user-header'
import FooterContainer from '../components/footer-container'
import './certified-civilian-application.css'
import { Helmet } from 'react-helmet'
import config from './config/config'
import { ToastContainer, toast } from 'react-toastify';

const CertifiedCivilianApplicaiton = (props) => {
    return (
        <div className="certified-civilian-applicaiton-container">
            <div className="certified-civilian-applicaiton-container1">
                <Header rootClassName="header-root-class-name12"></Header>
                <img
                    alt="image"
                    src="https://pinalcountyroleplay.com/CIV_title.png"
                    className="certified-civilian-applicaiton-image"
                />
                <div className="certified-civilian-applicaiton-hero">
                    <div className="certified-civilian-applicaiton-container2">
                        <div className="certified-civilian-applicaiton-container3">
                            <img
                                alt="image"
                                src="https://pinalcountyroleplay.com/CIV_background.png"
                                className="certified-civilian-applicaiton-image1"
                            />
                            <span className="certified-civilian-applicaiton-text">
                                The Official Pinal County Roleplay Civilian APP.
                            </span>
                            <span className="certified-civilian-applicaiton-text01">
                                <span className="certified-civilian-applicaiton-text02">
                                    * Indicates required question
                                </span>
                                <br></br>
                            </span>
                            <form className="certified-civilian-applicaiton-form">
                                <div className="certified-civilian-applicaiton-question-1">
                                    <span className="certified-civilian-applicaiton-text04">
                                        <span>What is your Discord username? ex.scopex07 </span>
                                        <span className="certified-civilian-applicaiton-text06">
                                            *
                                        </span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q1"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="certified-civilian-applicaiton-textinput input"
                                    />
                                </div>
                                <div className="certified-civilian-applicaiton-question-2">
                                    <span className="certified-civilian-applicaiton-text08">
                                        <span>How long have you been in the server? </span>
                                        <span className="certified-civilian-applicaiton-text10">
                                            *
                                        </span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q2"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="certified-civilian-applicaiton-textinput1 input"
                                    />
                                </div>
                                <div className="certified-civilian-applicaiton-question-3">
                                    <span className="certified-civilian-applicaiton-text12">
                                        <span>How old are you? </span>
                                        <span className="certified-civilian-applicaiton-text14">
                                            *
                                        </span>
                                        <br></br>
                                    </span>
                                    <select
                                        required="true"
                                        id="q3"
                                        className="certified-civilian-applicaiton-select"
                                    >
                                        <option></option>
                                        <option value="14-15">14-15</option>
                                        <option value="16-17">16-17</option>
                                        <option value="18+">18+</option>
                                    </select>
                                </div>
                                <div className="certified-civilian-applicaiton-question-4">
                                    <span className="certified-civilian-applicaiton-text16">
                                        <span>What is Fail RP? </span>
                                        <span className="certified-civilian-applicaiton-text18">
                                            *
                                        </span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q4"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="certified-civilian-applicaiton-textinput2 input"
                                    />
                                </div>
                                <div className="certified-civilian-applicaiton-question-5">
                                    <span className="certified-civilian-applicaiton-text20">
                                        <span>What is Meta Gaming? </span>
                                        <span className="certified-civilian-applicaiton-text22">
                                            *
                                        </span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q5"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="certified-civilian-applicaiton-textinput3 input"
                                    />
                                </div>
                                <div className="certified-civilian-applicaiton-question-6">
                                    <span className="certified-civilian-applicaiton-text24">
                                        <span>
                                            What makes you a Good Dispatcher? What makes you the best
                                            fit for the position?
                                        </span>
                                        <span className="certified-civilian-applicaiton-text26">
                                            *
                                        </span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q6"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="certified-civilian-applicaiton-textinput4 input"
                                    />
                                </div>
                                <div className="certified-civilian-applicaiton-question-7">
                                    <span className="certified-civilian-applicaiton-text28">
                                        <span>
                                            Please provide an in-depth description of a roleplay scene
                                            you could do in game.
                                        </span>
                                        <span className="certified-civilian-applicaiton-text30">
                                            *
                                        </span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q7"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="certified-civilian-applicaiton-textinput5 input"
                                    />
                                </div>
                                <div className="certified-civilian-applicaiton-question-8">
                                    <span className="certified-civilian-applicaiton-text32">
                                        <span>
                                            Do you understand lying on these applications will result
                                            in automatic denial?
                                        </span>
                                        <span className="certified-civilian-applicaiton-text34">
                                            *
                                        </span>
                                        <br></br>
                                    </span>
                                    <select
                                        id="q8"
                                        required="true"
                                        className="certified-civilian-applicaiton-select1"
                                    >
                                        <option></option>
                                        <option value="Yes">No</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="certified-civilian-applicaiton-question-9">
                                    <span className="certified-civilian-applicaiton-text36">
                                        <span>Anything you would like to Add? </span>
                                        <span className="certified-civilian-applicaiton-text38">
                                            *
                                        </span>
                                        <br></br>
                                    </span>
                                    <input
                                        type="text"
                                        id="q9"
                                        required="true"
                                        placeholder="Your Answer"
                                        className="certified-civilian-applicaiton-textinput6 input"
                                    />
                                </div>
                                <button className="certified-civilian-applicaiton-button button">
                                    <span>
                                        <span className="certified-civilian-applicaiton-text41">
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
            <FooterContainer rootClassName="footer-container-root-class-name12"></FooterContainer>
        </div>
    )
}

export default CertifiedCivilianApplicaiton
