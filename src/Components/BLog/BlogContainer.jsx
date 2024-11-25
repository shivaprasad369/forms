import React from 'react'
import Header from '../Home/Header'
import Banner from '../ABout.jsx/Banner'
import Blogs from './Blogs'
import Footer from '../Home/Footer'
import Footer1 from '../Home/Footer1'
import Header1 from '../Home/Header1'
import BannerAbove from '../Home/BannerAbove'
import Banner3 from '../Home/Banner3'
import Banner1 from '../Home/Banner1'


export default function BlogContainer() {
  return (
    <>
     {/* <Header1/>
     <Banner
     title="NEWS"
     description="Blogs"
     />  */}
     <div className="w-[100vw] bg5 ">
      {/* <BannerAbove/> */}
     <Header/> 
     {/* <Banner
     title="NEWS"
     description="Blogs"
     />  */}
     <Banner1/>
    </div>
     <Blogs/>
     <Footer1/>
    </>
  )
}
