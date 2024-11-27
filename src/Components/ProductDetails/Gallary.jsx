import React, { useEffect } from 'react'
import Container from '../Home/Container'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { FreeMode,  Thumbs } from 'swiper/modules';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Productdata from '../Constant/Products';
import { FaStar } from 'react-icons/fa';
export default function Gallary() {
    const [loading,setLoading]=useState(false)
      const [thumbsSwiper, setThumbsSwiper] = useState(null);
      const [product,setProduct]=useState([])
      const [color,setColor]=useState()
     const {id,type}=  useParams()
    const [detail,setDetail]= useState({
        desc:true,
        shipping:false
     })
  useEffect(()=>{
      const datas=Productdata?.filter((dt)=>dt.id===Number(id));
      const p=datas.filter((data)=>data.typeId===type)
      setProduct(datas[0])
      setLoading(true)
console.log(product)
  },[])
  return (
    <Container>
       <div className='w-[100%] lg:px-[10%] max-lg:px-[3%] mt-[2rem] gap-10 justify-center items-center'> 
     {loading &&  
     <div className='lg:flex max-lf:flex-col gap-20 w-[100%]'>
        <div className='lg:w-[40%] h-[35rem]'>
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
         
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2 h-[25rem] bg-gray-300 "
      >
       {product?.images.map((data)=> <SwiperSlide key={data.id}  className=''>
          <img src={data.img} alt='product' className='w-[100%] h-[100%] object-cover'/>
        </SwiperSlide>)}        
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper w-[100%] h-[8.6rem]"
      >
        {product?.images.map((data)=> <SwiperSlide key={data.id} className='w-[100%] border-[1px] border-[#3fb4e2] h-[100%] object-cover'>
          <img src={data.img} alt='product'  className='w-[100%] h-[100%] object-cover' />
        </SwiperSlide>)}    
       
      </Swiper>
        </div>
        <div className='w-[50%] flex flex-col gap-8'>
            <h1 className='text-4xl capitalize font-bold text-[#3fb4e2]'>{product?.name}</h1>
            <div className='flex items-center gap-2 text-lg text-[#fada24]'>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p className='text-gray-500'>
                {
                    product?.short
                }
            </p>
            {/* <span className='text-4xl font-semibold text-[#3fb4e2]'>
                {product?.price}
            </span> */}
           <div className='flex gap-10 items-center'>
            <h1 className='w-[20%] text-[#3fb4e2] font-bold  text-2xl'>
              Color 
            </h1>
                <div className='flex w-[80%]  gap-3 items-center '> 
                  <div onClick={()=>setColor('white')} className={`${color==='white'? 'border-[#3fb4e2]':'border-black'} w-[2rem] h-[2rem] rounded-full border-[2px]`}/>
                  <div  onClick={()=>setColor('yellow')} className={`${color==='yellow'? 'border-[#3fb4e2]':'border-black'} w-[2rem] h-[2rem] rounded-full bg-yellow-300 border-[2px]`}/>
                  <div  onClick={()=>setColor('red')} className={`${color==='red'? 'border-[#3fb4e2]':'border-black'} w-[2rem] h-[2rem] rounded-full border-[2px] bg-red-300`}/>
                  <div onClick={()=>setColor('blue')} className={`${color==='blue'? 'border-[#3fb4e2]':'border-black'} w-[2rem] h-[2rem] rounded-full border-[2px] bg-blue-300`}/>

                </div>
           </div>
           <div className='flex gap-10 items-center'>
            <h1 className='w-[20%] text-[#3fb4e2] font-bold  text-2xl'>
              Vendor
            </h1>
                <div className='w-[80%] flex gap-3 items-center '> 
                 <h1 className='text-black font-semibold'>
                  vender Name
                 </h1>
                </div>
           </div>
            
           <div className='flex gap-10 items-center'>
            <h1 className='w-[20%] text-[#3fb4e2] font-bold  text-2xl'>
              Type
            </h1>
                <div className='w-[80%] flex gap-3 items-center '> 
                 <h1 className='text-black font-semibold'>
                 Personal Care
                 </h1>
                </div>
           </div>
                <div className="w-[100%] text-center cursor-pointer text-white font-bold text-lg bg-[#3fb4e2] rounded-md py-3">
                  Buy It Now
                </div>

        </div>
       </div>}

    <div className='w-[100%] flex flex-col'>
        <div className='flex w-[100%] gap-2 items-center'>
                <div onClick={()=>setDetail(()=>({desc:true,shipping:false}))} className={` ${ detail.desc ?'bg-blue-500' :'bg-[#3fb4e2]'} transition-all duration-500 cursor-pointer rounded-t-md font-bold px-5 py-3 text-sm text-white `}>
                    <h1>Description</h1>
                </div>
                <div onClick={()=>setDetail(()=>({desc:false,shipping:true}))} className={` ${ detail.shipping ?'bg-blue-500' :'bg-[#3fb4e2]'} transition-all duration-500 cursor-pointer rounded-t-md font-bold px-5 py-3 text-sm text-white `}>
                    <h1>Shipping Information</h1>
                </div>
        </div>
        <div className='p-4 border-[1px] rounded-md border-blue-200 w-[100%]'>
                {loading && detail.desc &&
                    product?.description.map((data1)=>
                        <div key={data1.id} className='w-[100%] flex-col flex gap-4'>
                            <h1 className='text-3xl font-bold mt-5 text-[#3fb4e2]'>
                                {data1.head && data1.head}
                            </h1>
                            <p>
                                {data1.desc.map((data)=>
                                <>
                                  {data1.head!=='Features:'&& data1.head!=='Benefits:' && <p key={data.id}>{data.desc}</p>}
                                  {data1.head==='Features:' &&  <div key={data.id} className='flex mb-2 w-[100%] items-center gap-3'> 
                                    <div className='w-[1rem] h-[1rem] bg-[#3fb4e2]  rounded-full'/>
                                    <p >
                                    
                                    {data.desc}
                                    </p>
                                    </div>}
                                    {data1.head==='Benefits:' &&  <div key={data.id} className='flex mb-2 items-center gap-3'> 
                                    <div className='w-[1rem] h-[1rem] bg-[#3fb4e2] rounded-full'/>
                                    <p>
                                    
                                    {data.desc}
                                    </p>
                                    </div>}


                                </>
                                )}
                            </p>
                        </div>
                    )
                }
                  {loading && detail.shipping &&
                    product?.Shiping.map((data1)=>
                        <div key={data1.id} className='w-[100%] flex-col flex gap-4'>
                            <h1 className='text-3xl font-bold mt-5 text-[#3fb4e2]'>
                                {data1.head && data1.head}
                            </h1>
                            <div className='w-[100%] flex flex-col gap-4'>
                                {data1.desc.map((data)=>
                                <div className='flex flex-col gap-5 '>
                                 <p key={data.id}>{data.desc}</p>
                                 </div>
                                )}
                            </div>
                        </div>
                    )
                }
        </div>

    </div>
    </div>
    </Container>
  )
}
