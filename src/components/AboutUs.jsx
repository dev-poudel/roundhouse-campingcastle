import React from 'react'

const Aboutus = () => {
  return (
    <>
    <h1 className='text-center text-[#E1971B] font-playfair font-bold text-lg mt-6 sm:text-2xl'>About Us </h1>
   <div className=' justify-center gap-4 mt-15 flex flex-col w-full sm:flex-row sm:px-0'>
   <div className=' sm:w-[35rem]'><img src="./ab.png" alt="image_ab" className=' w-full sm:h-[38rem] rounded-xl object-cover p-2'/></div>
   <div className='sm:text-left mt-6 sm:mt-16 text-center max-w-2xl'>
    <h1 className=' font-extrabold text-2xl font-playfair sm:text-3xl leading-tight'>"Lorem ipsum dolor sit amet,<br />
         consectetur adipisicing.</h1>
         <p className=' mt-5 text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Nobis, in quia officiis accusantium inventore similique <br /> molestias.</p>

          {/* Stats Section */}
          <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
              {[
                { value: '50+', label: 'Luxury Rooms' },
                { value: '60k+', label: 'Happy Guests' },
                { value: '99%', label: 'Satisfaction' }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg  text-center">
                  <div className="text-4xl font-bold text-amber-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            </div>
            </section>
      <div className=' sm:text-left items-center '>
        <h5 className=' font-semibold text-center font-playfair text-[#295757]'>Alexey</h5>
        <h1 className=' text-center text-[#295757] font-playfair'><span className=' font-bold text-xl sm:text-2xl'>Alexey</span> + <span className=' font-bold text-2xl'>HotelOwner</span></h1>
      </div>

   </div>
   </div>
 


   </>
  )
}

export default Aboutus



