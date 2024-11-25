import React from 'react'
import Header from '../Home/Header'
import Banner from '../ABout.jsx/Banner'
import Footer from '../Home/Footer'
import Map from './Map'
import ContactPage from './ContactPage'
import Footer1 from '../Home/Footer1'
import Header1 from '../Home/Header1'
import Banner3 from '../Home/Banner3'
import BannerAbove from '../Home/BannerAbove'
import Banner1 from '../Home/Banner1'


export default function ContactContainer() {
  return (
    <>
    <div className="w-[100vw] bg5 ">
      {/* <BannerAbove/> */}
     <Header/> 
     {/* <Banner/> */}
     <Banner1/>
    </div>
     {/* <Header1/> */}
     {/* <Banner title={'Contact us'}
     description={'Contact'}/>  */}
     <ContactPage/>
     <Map/>
     <Footer1/>
    </>
  )
}
