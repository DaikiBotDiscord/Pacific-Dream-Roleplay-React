import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Pacific Dream Roleplay</title>
        <meta property="og:title" content="Pacific Dream Roleplay" />
      </Helmet>
    </div>
  )
}

export default Home
