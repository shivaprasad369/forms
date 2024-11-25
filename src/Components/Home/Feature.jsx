import React from 'react'
import Container from './Container'

export default function Feature() {
  return (
    <Container>
      <div className='w-[100%] flex items-center justify-center flex-col gap-5'>
      <h1 className="text-[#2ec4ff] text-4xl font-bold tracking-wider">
      Innovative Quality & Feature
        </h1>
        <span className="text-lg tracking-[0.3em]">
          {" "}
          SAFEGUARDS HEALTH
        </span>

        <div className='w-[100%] grid grid-cols-3 px-[5%] gap-0 mt-10 items-center justify-center'>
            <div className='w-[110%] flex flex-col gap-20'>
                <div className='flex gap-2  items-center '>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl text-right font-bold text-[#252525] tracking-wider'>Bodysuit Gown</h1>
                        <p className='text-right text-gray-500'>
                        Est ante in nibh mauris. Ullamcorper morbi tincidunt ornare massa eget egestas purus
                        </p>
                    </div>
                    <img src={require('../../Assets/icon-7_feture-1.png')} alt="" className='w-[5rem]' />

                </div>
                <div className='flex gap-2  items-center '>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl text-right font-bold text-[#252525] tracking-wider'>3 Ply mask</h1>
                        <p className='text-right text-gray-500'>
                        Est ante in nibh mauris. Ullamcorper morbi tincidunt ornare massa eget egestas purus
                        </p>
                    </div>
                    <img src={require('../../Assets/icon-7_feture-1.png')} alt="" className='w-[5rem]' />

                </div>
                <div className='flex gap-2  items-center '>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-2xl text-right font-bold text-[#252525] tracking-wider'>Surgical Cap</h1>
                        <p className='text-right text-gray-500'>
                        Est ante in nibh mauris. Ullamcorper morbi tincidunt ornare massa eget egestas purus
                        </p>
                    </div>
                    <img src={require('../../Assets/icon-7_feture-1.png')} alt="" className='w-[5rem]' />

                </div>
            </div>
            <div className='w-[100%] flex items-center justify-center'>
                <img src={require('../../Assets/feature.webp')} className='w-[65%] ' alt="medical devices" />
            </div>
            <div className='w-[110%] flex flex-col gap-20'>
                <div className='flex gap-2  items-center '>
                <img src={require('../../Assets/icon-7_feture-1.png')} alt="" className='w-[5rem]' />
                    
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl text-left font-bold text-[#252525] tracking-wider'>Goggles</h1>
                        <p className='text-left text-gray-500'>
                        Est ante in nibh mauris. Ullamcorper morbi tincidunt ornare massa eget egestas purus
                        </p>
                    </div>

                </div>
                <div className='flex gap-2  items-center '>
                <img src={require('../../Assets/icon-7_feture-1.png')} alt="" className='w-[5rem]' />
                    
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl text-left font-bold text-[#252525] tracking-wider'>Gloves</h1>
                        <p className='text-left text-gray-500'>
                        Est ante in nibh mauris. Ullamcorper morbi tincidunt ornare massa eget egestas purus
                        </p>
                    </div>

                </div>
                <div className='flex gap-2  items-center '>
                <img src={require('../../Assets/icon-7_feture-1.png')} alt="" className='w-[5rem]' />
                    
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl text-left font-bold text-[#252525] tracking-wider'>Full Bodysuit</h1>
                        <p className='text-left text-gray-500'>
                        Est ante in nibh mauris. Ullamcorper morbi tincidunt ornare massa eget egestas purus
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Container>
  )
}
