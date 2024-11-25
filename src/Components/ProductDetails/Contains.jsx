import React from 'react'
import Header from '../Home/Header'
import Banner from '../ABout.jsx/Banner'
import Footer from '../Home/Footer'
import { useParams } from 'react-router-dom'
import Gallary from './Gallary'
import Recommanded from './Recommanded'
import Footer1 from '../Home/Footer1'
import Header1 from '../Home/Header1'
import BannerAbove from '../Home/BannerAbove'
import Banner3 from '../Home/Banner3'
import Banner1 from '../Home/Banner1'

export default function Contains() {
     const {name}=useParams()
  return (
    <>
     {/* <Header1/>
     <Banner
     title={'Product'} 
     description={name}/> */}
     <div className="w-[100vw] bg5 ">
      {/* <BannerAbove/> */}
     <Header/> 
     <Banner1/>
     {/* <Banner
     title={'Product'} 
     description={name}/> */}
     {/* <Banner1/> */}
    </div>
     <Gallary/>
     <Recommanded/>
     <Footer1/>
    </>
  )
}
