
import React, { useState } from "react";

import Basic from "./Basic";

export default function Form() {
    // eslint-disable-next-line
    const [errors,setErrors]=useState({
        name:'',
        number:"",
        email:"",
        interest:"",
        course:'',
        campus:""
    })
   
     
    
  return (
    <div className="flex max-md:flex-col justify-center gap-6 overflow-x-hidden">
    <div className={`flex flex-col flex-wrap gap-2 border-[0] shadow-md rounded-md m-2  max-md:mr-2  `}>
  
   <Basic  errors={errors} />
    
    </div>
   
    </div>
  );
}
