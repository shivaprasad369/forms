import React, { useState } from "react";

export default function Supplys({ name, no }) {
  const [card, setCard] = useState(false);
  return (
    <div
      onMouseEnter={() => setCard(true)}
      onMouseLeave={() => setCard(false)}
      className={`w-[100%]  gap-5 p-[2rem] flex flex-col items-center justify-center bg-white rounded-md transition-all duration-500 ${
        card && "shadow-xl"
      }`}
    >
      <div
        className={`w-[3.5rem] h-[3.5rem] text-xl text-white font-bold bg-[#3fb4e2] rounded-full flex items-center justify-center  transition-all duration-300 ${
          !card && " bg-gray-200 text-black"
        }`}
      >
        {no}
      </div>
      <h1 className="text-3xl font-bold text-[#3fb4e2] "> Lorem ipsum</h1>
      <p className="leading-[1.8rem]  text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
        corrupti ea commodi magnam distinctio quasi quibusdam, necessitatibus
        enim accusamus aut repellendus
      </p>
      <span className="text-lg mt-3 font-bold  cursor-pointer">
        Read More {">"}
      </span>
    </div>
  );
}
