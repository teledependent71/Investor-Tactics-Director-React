import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Investor Tactics Director</title>
        <meta property="og:title" content="Investor Tactics Director" />
      </Helmet>
    </div>
  )
}

export default Home
