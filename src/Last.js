import axios, { Axios } from 'axios'
import React, { useState} from 'react'
import {v4 as uuid} from 'uuid'
 // import firebase from './firebaseConfig'
// import {ref,set,get, update,remove,child } from 'firebase/database'
export default function Last({Basic,prof,setProgress }) {
    const [data,setData]=useState()

    const handleSudmit=async()=>{
        console.log(data,Basic,prof)
        const res= await axios.post('https://form-87465-default-rtdb.firebaseio.com/form.json',
          JSON.stringify({id:uuid,Basic:Basic, Prof:prof,conclusion:data }),
       )
        if(!res.ok){

          console.log(res)
        }
       
        console.log(res)
        setProgress({
          
          basic:true,
          professional:true,
          program:true
      })
      
        alert("Submited successfully")
        setProgress({
          
          basic:'',
          professional:'',
          program:''
      })
    }
   
  return (
    <div className='flex flex-col gap-3 p-4' >
      <div className='gap-3 '>
        <h1 className='text-sky-500 font-bold text-3xl'>Statement of Purpose (Optional)</h1>
        <p className='text-gray-400 '>Help the admissions committee evaluate your candidature. Please answer the following question.</p>
      </div>
      <form onSubmit={handleSudmit} className='gap-2 flex-wrap'>
      <div >
        <p className='pb-2 font-semibold'>Why do you want to learn Data Science? (Optional)</p>
      </div>
      <div className='flex flex-col'>

        <textarea onChange={(e)=>setData(e.target.value)} name="" id="" className='w-full h-[10rem] border-gray border-2 p-2' ></textarea>
        <button type="button" onClick={handleSudmit} className='border-2 p-2 bg-blue-400 mt-4 text-white'>Submit</button>
      </div>
      </form>
 
    </div>
  )
}
