import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FooterContainer from '../components/footer-container'
import './donation.css'
import Header from '../components/header'

const Donation = (props) => {
  return (
    <div className="donation-container">
      <Helmet>
        <title>Donation - Pacific Dream Roleplay</title>
        <meta property="og:title" content="Donation - Pacific Dream Roleplay" />
      </Helmet>
      <div className="donation-container01">
        <Header rootClassName="header-root-class-name"></Header>
      </div>
      <h1 className="donation-text">Donations Levels</h1>
      <div className="donation-pricing">
        <div className="donation-container02">
          <div className="donation-pricing-card">
            <span className="donation-text01">Basic</span>
            <div className="donation-container03">
              <span className="donation-text02">
                <span>$</span>
                <span></span>
              </span>
              <span className="donation-text05">5</span>
              <span className="donation-text06">
                <span>.00</span>
                <br></br>
              </span>
            </div>
            <div className="donation-container04">
              <span className="donation-text09">✔ Discord Donator Role</span>
              <span className="donation-text10">
                ✔ Discord donator category
              </span>
              <span className="donation-text11">
                ✔ early access Server sneak peeks
              </span>
            </div>
            <button className="donation-button button">Learn More</button>
          </div>
          <div className="donation-pricing-card1">
            <span className="donation-text12">
              <span>premium</span>
              <br></br>
            </span>
            <div className="donation-container05">
              <span className="donation-text15">
                <span>$</span>
                <span></span>
              </span>
              <span className="donation-text18">
                <span>15</span>
                <br></br>
              </span>
              <span className="donation-text21">
                <span>.00</span>
                <br></br>
              </span>
            </div>
            <div className="donation-container06">
              <span className="donation-text24">
                ✔ All Features Basic Includes
              </span>
              <span className="donation-text25">
                ✔ Free Personal civilian Vehicle
              </span>
            </div>
            <button className="donation-button1 button">Learn More</button>
          </div>
          <div className="donation-pricing-card2">
            <span className="donation-text26">
              <span>Diamond</span>
              <br></br>
            </span>
            <div className="donation-container07">
              <span className="donation-text29">
                <span>$</span>
                <span></span>
              </span>
              <span className="donation-text32">
                <span>25</span>
                <br></br>
              </span>
              <span className="donation-text35">
                <span>.00</span>
                <br></br>
              </span>
            </div>
            <div className="donation-container08">
              <span className="donation-text38">
                ✔ All features Premium Includes
              </span>
              <span className="donation-text39">
                <span>✔ Free Personal LEO Vehicle</span>
                <br></br>
              </span>
            </div>
            <button className="donation-button2 button">Learn More</button>
          </div>
        </div>
      </div>
      <h1 className="donation-text42">How to Donate</h1>
      <span className="donation-text43">
        <span>
          Please remember to enter your discord username inside of the note on
          the payment
        </span>
        <br></br>
        <span>So that you can receive your donator benefits </span>
      </span>
      <div className="donation-container09">
        <a
          href="https://www.paypal.com/paypalme/Scopex07"
          target="_blank"
          rel="noreferrer noopener"
          className="donation-link"
        >
          <div className="donation-pricing-card3">
            <img
              alt="image"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/151790f7-6583-4936-911e-8f0137220d74/88fcd8cb-c96c-41bc-bcb1-428293bb423f?org_if_sml=14915&amp;force_format=original"
              className="donation-image"
            />
            <span className="donation-text47">
              <span className="donation-text48">Paypal</span>
            </span>
          </div>
        </a>
        <a
          href="https://cash.app/$scopex07"
          target="_blank"
          rel="noreferrer noopener"
          className="donation-link1"
        >
          <div className="donation-pricing-card4">
            <img
              alt="image"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/151790f7-6583-4936-911e-8f0137220d74/62096b95-ddaf-4d14-aa54-2571c37f94b1?org_if_sml=114047&amp;force_format=original"
              className="donation-image1"
            />
            <span className="donation-text49">
              <span className="donation-text50">cash App</span>
            </span>
          </div>
        </a>
      </div>
      <FooterContainer rootClassName="footer-container-root-class-name1"></FooterContainer>
    </div>
  )
}

export default Donation
