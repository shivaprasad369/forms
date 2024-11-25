import React from 'react'
import { FaPlay, FaShoppingBag, FaStar } from 'react-icons/fa'
import Productss from '../Ui/Productss'
import img1 from '../../Assets/p1.png'
import img2 from '../../Assets/p2.png'
import img3 from '../../Assets/p3.png'

export default function Product() {
  return (
    <section className='w-[100vw] flex items-center justify-center '>
      <div className='w-[100%] max-w-[1400px] py-[4rem]'>
            <div className='w-[100%] -z-10 video-wrapper h-[100%] relative flex items-center justify-center '>
                <img src={require('../../Assets/01 (2).jpg')} className='w-[100%]' alt="" />
            
                        <a className="play-btn popup-youtube" href="#">
                        <FaPlay />
                        </a>
                  
            </div>
            <div className='w-[100%] flex items-center z-20 justify-center mt-[-10rem] '>
                <div className="px-[5%] w-[100%] grid grid-cols-3 gap-5 ">
                    <div className='w-[100%] bg-white flex  rounded-xl flex-col gap-3 p-4'>
                        <h1 className='text-2xl font-bold text-[#252525]'>On Sale</h1>
                        <div className='w-[100%] relative border-t-[1px] border-gray-200 '>
                            <div className="w-[3rem] border-[1px] border-blue-500"></div>
                                </div>
                     <Productss img={img1} title={'10ml Syringe'}/>
                      <Productss img={img2} title={'5ml Syringe'}/>
                     <Productss img={img3} title={'20ml Syringe'}/>


                    </div>
                    <div className='w-[100%] bg-white flex  rounded-xl flex-col gap-3 p-4'>
                        <h1 className='text-2xl font-bold text-[#252525]'>Best Sale</h1>
                        <div className='w-[100%] relative border-t-[1px] border-gray-200 '>
                            <div className="w-[3rem] border-[1px] border-blue-500"></div>
                                </div>
                                <Productss img={img1} title={'25ml Syringe'}/>
                      <Productss img={img2} title={'25ml Syringe'}/>
                     <Productss img={img3} title={'30ml Syringe'}/>

                    </div>
                    <div className='w-[100%] bg-white flex  rounded-xl flex-col gap-3 p-4'>
                        <h1 className='text-2xl font-bold text-[#252525]'>Top Rated</h1>
                        <div className='w-[100%] relative border-t-[1px] border-gray-200 '>
                            <div className="w-[3rem] border-[1px] border-blue-500"></div>
                                </div>
                                <Productss img={img1} title={'10ml Syringe'}/>
                      <Productss img={img2} title={'15ml Syringe'}/>
                     <Productss img={img3} title={'25ml Syringe'}/>


                    </div>
                </div>

            </div>
      </div>
    </section>
  )
}
