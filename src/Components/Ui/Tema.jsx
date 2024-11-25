import React from 'react'

export default function Tema({name}) {
  return (
    <div className='flex flex-col gap-5 w-[100%]'>
                    <div className='w-[20rem] h-[20rem] rounded-full border-[4px] overflow-hidden border-[#3fb4e2]'>

                    <img src={require('../../Assets/team.jpg')} alt="" />
                    </div>
                    <h1 className='text-4xl font-semibold   '>{name}</h1>
                    <span className="text-md uppercase font-semibold text-[#3fb4e2]"> Possition</span>
                    <p className='w-[90%]'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus sapiente numquam consectetur consequatur voluptatum tenetur ea, deleniti quod alias? Quia exercitationem consequuntur perspiciatis illo quasi impedit consequatur enim alias distinctio!
                    </p>
                    <p className='w-[90%]'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus sapiente numquam consectetur consequatur voluptatum tenetur ea, deleniti quod alias? Quia exercitationem consequuntur perspiciatis illo quasi impedit consequatur enim alias distinctio!
                    </p>
                  

                </div>
  )
}
