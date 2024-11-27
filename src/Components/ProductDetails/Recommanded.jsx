import React, { useEffect, useState } from 'react'
import Container from '../Home/Container'
import { useParams } from 'react-router-dom'
import Productdata from '../Constant/Products';
import Arrivals from '../Ui/Arrivals'
export default function Recommanded() {
    const [recom,setRecom]=useState([]);
    const [load,setLoad]=useState(false)
    const {type}=useParams();
    console.log(Number(type))
    useEffect(()=>{
        const p=Productdata.filter((data)=>data.typeId===Number(type))
        setRecom(p)
        setLoad(true)
        console.log(recom)
    },[type])
  return (
    <Container>
      <div className='w-[100%] px-[5%] pb-[4rem] items-center justify-center flex'>
        <div className='w-[100%] flex flex-col gap-5 items-center justify-center'>
            <h1 className='text-4xl text-center font-bold tracking-wider text-[#3fb4e2]'>
            Recommended Products

            </h1>
            {load && <div className='w-[100%] grid max-lg:grid-cols-2 max-md:grid-cols-1 lg:grid-cols-4 gap-5'>
                {recom.slice(0,4).map((data,i)=>
                <a href={`/products/${data.id}/${data.typeId}/${data.name}`}>

                    <Arrivals key={data.id} data={data}/>
                </a>
                )}
            </div>}

        </div>

      </div>
    </Container>
  )
}
