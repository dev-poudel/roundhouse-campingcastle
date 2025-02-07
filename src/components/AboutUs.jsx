import React from 'react'
// import { HiArrowRight } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
const Aboutus = () => {
  return (
    <>
    <h1 className='text-center font-playfair font-bold text-lg mt-6 sm:text-2xl'>About Us </h1>
   <div className=' justify-center gap-4 mt-15 flex flex-col w-full sm:flex-row sm:px-0'>
   <div className=' sm:w-[35rem]'><img src="./ab.png" alt="image_ab" className=' w-full sm:h-[38rem] rounded-xl object-cover'/></div>
   <div className='sm:text-left mt-6 sm:mt-16 text-center max-w-2xl'>
    <h1 className=' font-extrabold text-2xl font-playfair sm:text-3xl leading-tight'>"Lorem ipsum dolor sit amet,<br />
         consectetur adipisicing.</h1>
         <p className=' mt-5 text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Nobis, in quia officiis accusantium inventore similique <br /> molestias.</p>

         <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white rounded-lg ">
              <h3 className="text-4xl font-bold text-[#295757] mb-2">50+</h3>
              <p className="text-[#295757] font-playfair">Luxury Rooms</p>
            </div>
            <div className="p-6 bg-white rounded-lg ">
              <h3 className="text-4xl font-bold text-[#295757] mb-2">60,000+</h3>
              <p className="text-[#295757] font-playfair">Happy Guests</p>
            </div>
            <div className="p-6 bg-white rounded-lg ">
              <h3 className="text-4xl font-bold text-[#295757] mb-2">99%</h3>
              <p className="text-[#295757] font-playfair">Guest Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <div className=' sm:text-left items-center '>
        <h5 className=' font-semibold text-center font-playfair text-[#295757]'>Alexey</h5>
        <h1 className=' text-center text-[#295757] font-playfair'><span className=' font-bold text-xl sm:text-2xl'>Alexey</span> + <span className=' font-bold text-2xl'>HotelOwner</span></h1>
      </div>


    

   </div>
   </div>
   {/* <section className="py-10 rounded-3xl h-6 mt-6 ml-32 bg-[#295757] w-[77rem] text-center items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {['Breakfast included', 'Swimming pool', 'Fast Wi-Fi', 'Spa & Wellness'].map((amenity) => (
              <div key={amenity} className="flex items-center  p-4  rounded-lg ">
                
                <span className="text-white font-bold text-lg">{amenity}</span>
                <FaStar/>
              </div>
            ))}
          </div>
        </div>
      </section> */}

     
  <section className="py-6 rounded-xl mt-6 mx-auto bg-[#295757] w-[83%] text-center">
        <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-4  sm:grid-cols-4 gap-6 font-playfairi text-white">
          {["Breakfast included", "Swimming pool", "Fast Wi-Fi", "Spa & Wellness"].map(
            (amenity, index) => (
              <div key={index} className="flex items-center justify-center gap-2">
                <h1>{amenity}</h1>
                <FaStar />
              </div>
            )
          )}
        </div>
      </section>

   </>
  )
}

export default Aboutus



