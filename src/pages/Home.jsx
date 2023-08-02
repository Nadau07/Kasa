import React from 'react'
import Banner from '../components/Banner'
import '../styles/Home.css'
import ImgBanner from '../components/ImgBanner'
import LogementContainer from '../components/LogementContainer'
import Footer from '../components/Footer'


function Home() {
  return (
  <> 
  <Banner />
  <ImgBanner />
  <LogementContainer />
  <Footer />
  </>
  )

}

export default Home