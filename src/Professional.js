
import React from "react";
import Prof from "./prof";

export default function Professional({setProgress,progress ,setData,data}) {
return (
    <div className=" flex flex-col  w-full pt-[2rem] px-[2rem] ">
      <div className="border-t-3 border-black" />
      <div className="gap-8 flex flex-col w-full ">
     
        <div className="flex flex-col">
          <h1 className="text-3xl text-sky-600 font-bold">Education</h1>
          <p className="w-[80%] text-md text-gray-500">
            We need your education details to check if you meet the eligibility
            criteria. You'll need a minimum of 60% in any undergraduate program.
          </p>
          <div  className="gap-3"/>
          <h3 className="text-2xl text-sky-400">Undergraduation</h3>
          <p className="text-gray-500"> Add your undergraduate details.</p>
        </div>
        <Prof setProgress={setProgress} progress={progress} setData={setData} data={data}/>
      </div>
    </div>
  );
}
