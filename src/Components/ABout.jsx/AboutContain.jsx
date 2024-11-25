import React from 'react'
import Container from '../Home/Container'
import Header from '../Home/Header'
import Banner from './Banner'
import Who from './Who'
import We from './We'
import Hygine from './Hygine'
import Equipment from './Equipment'
import Footer from '../Home/Footer'
import Testimonials from './Testimonials'
import Client from './Client'
import Footer1 from '../Home/Footer1'
import Certificate from './Certificates'
import Certi from './Certi'
import Team from './Team'
import About1 from '../Home/About1'
import Header1 from '../Home/Header1'
import BannerAbove from '../Home/BannerAbove'
import Banner3 from '../Home/Banner3'
import Banner1 from '../Home/Banner1'
import About from '../Home/About'

export default function AboutContain() {
  return (
   <>
    {/* <Header1/>
    <Banner/> */}
    <div className="w-[100vw] bg5 ">
      {/* <BannerAbove/> */}
     <Header/> 
     {/* <Banner3/> */}
     <Banner1/>

    </div>
    <About/>
    <Who/>
    <We/>
    <Certi/>
    {/* <Hygine/> */}
    {/* <Equipment/> */}
    <Testimonials/>
    <Team/>
    {/* <Client/> */}
    <Footer1/>
   </>
  )
}
