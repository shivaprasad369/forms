import React from 'react'
import Header from '../Home/Header'
import Banner from '../ABout.jsx/Banner'
import Details from './Details'
import Footer from '../Home/Footer'
import Footer1 from '../Home/Footer1'
import Header1 from '../Home/Header1'
import BannerAbove from '../Home/BannerAbove'
import Banner3 from '../Home/Banner3'
import Banner1 from '../Home/Banner1'

export default function BlogsDetail() {
  return (
    <>
     {/* <Header1/>
     <Banner
     title='Blog Title'  
     description="Antibodies Used For Children Health"     
     />  */}
     <div className="w-[100vw] bg5 ">
      {/* <BannerAbove/> */}
     <Header/> 
     <Banner1/>
     {/* <Banner
     title='Blog Title'  
     description="Antibodies Used For Children Health"     
     />  */}
     {/* <Banner3/> */}
    </div>
     <Details/>
     <Footer1/>
    </>
  )
}
