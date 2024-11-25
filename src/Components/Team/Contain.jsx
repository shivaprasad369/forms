import React from 'react'
import Header from '../Home/Header'
import Banner from '../ABout.jsx/Banner'
import Footer1 from '../Home/Footer1'
import Teams from './Teams'
import Header1 from '../Home/Header1'
import BannerAbove from '../Home/BannerAbove'
import Banner3 from '../Home/Banner3'

export default function Contain() {
  return (
    <>
     {/* <Header1/>
     <Banner title={'Our Team'}
     description={'Meet our team'}/>  */}
     <div className="w-[100vw] bg5 ">
      <BannerAbove/>
     <Header/> 
     {/* <Banner/> */}
     <Banner3/>
    </div>
     <Teams/>
     <Footer1/>
    </>
  )
}
