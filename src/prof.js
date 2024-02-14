import { Typography } from '@mui/material'
import React, { useState } from 'react'

export default function Prof({setProgress,progress,setData,data}) {
    // const [data,setData]=useState({
    //     name:'',
    //     dPass:'',
    //     dPercentage:'',
    //     pgName:'',
    //     specialization:"",
    //     college:'',
    //     pgPass:'',
    //     pgPercentage:''
    //   })
      const [pg, setPg] = useState(false);
    const handleProSubmit=(e)=>{
        e.preventDefault()
        console.log(data)
        setProgress({professional:true,basic:true})
    }
  return (
 
        <form className="gap-4 flex flex-col " onSubmit={handleProSubmit}>
    <Typography>Degree</Typography>
        <input
          type="text"
          placeholder="Enter Degree"
          className="w-full h-[2.4rem] border-black border-2 p-2"
          required
          onChange={(e)=>setData({...data,name:e.target.value})}
        />
          <div className="flex gap-4">
          <div className="flex flex-col  gap-2 w-[40%] mr-4 ">
            <Typography>Year Of Graduation</Typography>

            <select name="" id=""  required className="border-2 h-[2.5rem] border-black" onChange={(e)=>setData({...data,dPass:e.target.value})}>
              <option value="" defaultValue={""} selected="">
                YYYY
              </option>
              <option value="2024">2024</option>
              <option value="2024">2023</option>
              <option value="2024">2022</option>
              <option value="2024">2021</option>
              <option value="2024">2020</option>
              <option value="2024">2019</option>
              <option value="2024">2018</option>
              <option value="2024">2017</option>
              <option value="2024">2018</option>
            </select>
         </div>
         <div className="gap-4 ">
            <Typography className="pt-2">CGPA / Percentage</Typography>
            <input
              onChange={(e)=>setData({...data,dPercentage:e.target.value})}
              type="number"
              placeholder="Enter your percentage"
              className="w-[100%] h-[2.4rem] border-black border-2"
              required
             
            />
          </div>
        </div>
        <div className="flex gap-y-5">
          <h1 className="pr-4">Postgraduation (If Any)</h1>
          <h1 onClick={()=>setPg(()=>!pg)} className="text-sky-600 cursor-pointer">{!pg ? `Add Details` : "Remove"}</h1>
        </div>
        {pg && <div className="flex flex-col gap-3">
         
         <div className="flex flex-col w-full gap-3">
           <div className="flex flex-col gap-3">
             <Typography>Degree</Typography>

             <select name="" id="" className="w-full h-[2.5rem] p-2 border-2 border-black"
             onChange={(e)=>setData({...data,pgName:e.target.value})} required>
               <option value="" defaultValue={""} selected="">
                 Degree
               </option>
               <option value="M,Sc">M,Sc</option>
               <option value="MCA">MCA</option>
               <option value="BE">BE</option>
               <option value="M,Tech">M,Tech</option>
               <option value="M,Com">M,Com</option>
               <option value="MBA">MBA</option>
             </select>
           </div>
           <div>
                <Typography>Specialization</Typography>
                <input
                onChange={(e)=>setData({...data,specialization:e.target.value})}
                  type="text"
                  placeholder="Ex. Computer Science"
                  className="w-full h-[2.4rem] border-black border-2 p-2"
                  required
                />
              </div>
              <div>
              <div className="flex gap-5">
                <div className="flex flex-col">
                  <Typography>Year Of Graduation</Typography>

                  <select name="" id=" " onChange={(e)=>setData({...data,pgPass:e.target.value})} className="w-[100%] h-[2.5rem] p-2 border-2 border-black"  required>
                    <option value="" defaultValue={""} selected="">
                      YYYY
                    </option>
                    <option value="2024">2024</option>
                    <option value="2024">2023</option>
                    <option value="2024">2022</option>
                    <option value="2024">2021</option>
                    <option value="2024">2020</option>
                    <option value="2024">2019</option>
                    <option value="2024">2018</option>
                    <option value="2024">2017</option>
                    <option value="2024">2018</option>
                  </select>
                </div>
                <div>
                  <Typography>CGPA / Percentage</Typography>
                  <input
                  onChange={(e)=>setData({...data,pgPercentage:e.target.value})}
                    type="number"
                    placeholder="Enter your percentage"
                    className="w-full h-[2.4rem] border-black border-2 p-2"
                    required
                  />
                </div>
              </div>
              </div>
           </div>
           </div>}
   {!progress.professional && <button className='border-2 px-[2rem] py-[1rem] bg-sky-400 text-white font-bold uppercase'>submit</button>}
      </form>
 
  )
}
