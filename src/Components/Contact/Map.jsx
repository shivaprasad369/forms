import React from 'react'

export default function Map() {
  return (
    <section className='w-[100vw] flex items-center justify-center'>
        <div className='w-[100%] max-w-[1400px] flex items-center justify-center py-[5rem] lg:px-[10%]'>
            <div className="w-[100%] h-[35rem]">
            <iframe className='w-[100%] h-[100%] rounded-xl' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15402.700390726199!2d75.1379781!3d15.1761776!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb92fb38d410ef9%3A0x161b146ea39b7377!2sRakshaum%20Medical%20Devices%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1730289308581!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
      
    </section>
  )
}
