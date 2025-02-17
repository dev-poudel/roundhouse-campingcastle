import React from 'react'

const DetailsOfYourStay = () => {
  return (
    <>
<div className=' relative  mx-auto'>
<img src="./right.png" alt="" className=' h-64  w-full object-cover' />
<div className=' absolute inset-0 flex items-center justify-center'>
    <h2 className=' text-white text-5xl font-extrabold'>Booking</h2>
</div>
</div>
      <div className=' flex flex-col items-center justify-center mt-5 p-4'>
        <h2 className=' text-2xl font-semibold text-[#4B4B4B] mb-6 text-center'>Details of your stays</h2>
        <div className=' bg-white p-6 rounded-lg  w-full max-w-2xl sm:w-11/12'>
        <div className=' grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
                <div>
                    <label htmlFor="" className=' block text-[#000000] mb-1'>Customer Name</label>
                    <input type="text" placeholder='customer name' className=' text-[#000000] w-full p-2 border rounded-lg focus:outline-none bg-[#C1C1C1] focus:ring-blue-500' />
                </div>

                <div>
                    <label htmlFor="" className=' block text-[#000000] mb-1'>Email/Phone</label>
                    <input  type="text" placeholder='email/phone' className=' text-[#000000] w-full p-2 border bg-[#C1C1C1] rounded-lg focus:outline-none focus:ring-blue-500' />
                </div>

            </div>

            <div className=' grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
                <div>
                    <label htmlFor="" className=' block text-[#000000] mb-1'>Check-in date</label>
                    <input type="date" className=' w-full p-2 border rounded-lg focus:outline-none bg-[#C1C1C1] focus:ring-blue-500' />
                </div>

                <div>
                    <label htmlFor="" className=' block text-[#000000] mb-1'>Check-out date</label>
                    <input  type="date" className=' w-full p-2 border bg-[#C1C1C1] rounded-lg focus:outline-none focus:ring-blue-500' />
                </div>

            </div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
                <div>
                    <label htmlFor="" className=' block text-[#000000] mb-1'>Stays in room</label>
                    <select className=' w-full p-2 border rounded-lg bg-[#C1C1C1] focus:outline-none focus:ring-blue-500'>
                        <option value="">2adults</option>
                        <option value="">2</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="" className=' block mb-1 text-[#000000]'>Stays in room</label>
                    <select className=' w-full bg-[#C1C1C1] p-2 border rounded-lg focus:outline-none focus:ring-blue-500'>
                        <option value="">Add a child</option>
                        <option value="">No children</option>
                    </select>
                </div>
                <div className=' flex gap-4'>
                    <h1 className=' text-[#7B2922]'>Extra Room</h1>
                    <h6 className=' text-[#000000]'>+</h6>
                </div>

            </div>
<div className=' items-center text-center'>

            <button className=' bg-[#E1971B] text-white  rounded-3xl hover:bg-yellow-600 py-2 px-14'>Book</button>
</div>
        </div>

      </div>
      </>
  
  )
}

export default DetailsOfYourStay