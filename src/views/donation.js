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
      <div className="donation-container1">
        <Header />
      </div>
      <FooterContainer rootClassName="footer-container-root-class-name1"></FooterContainer>
    </div>
  )
}

export default Donation
