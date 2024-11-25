import React from "react";
import { FaShoppingBag, FaStar } from "react-icons/fa";

export default function Productss({ img, title }) {
  return (
    <a href="/products">
      <div className="bg-slate-100 relative items-center rounded-2xl p-3 flex gap-3 w-[100%]">
        <div className="w-[3rem] h-[3rem] bg-[#3fb4e2] items-center rounded-full border-[4px] text-white border-white flex justify-center absolute right-0 bottom-0 ">
          <FaShoppingBag />
        </div>
        <div className="w-[40%] bg-white rounded-xl  overflow-hidden">
          <img src={img} alt="" />
        </div>
        <div className="w-[60%]  flex flex-col gap-5">
          <h1 className="text-xl font-bold tracking-wider">{title}</h1>
          <div className="flex gap-1 text-[#c9e42f] text-xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          {/* <div className='flex gap-2'>
                                            <h1 className='text-gray-600   text-lg font-semibold'>
                                            $60.00
                                            </h1>
                                            <h1 className='text-[#3fb4e2] underline-offset-1 text-lg font-bold'>
                                           $80.00
                                            </h1>

                                        </div> */}
        </div>
      </div>
    </a>
  );
}
