import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";

const ResturantsMenu = () => {
  return (
    <>
    <div className=' justify-center text-center mt-5'>
        <h2 className=' font-semibold text-xl text-[#295757] font-playfairi'>Resturants menu</h2>
        <h1 className=' font-extrabold text-3xl text-[#000] font-playfairi'>Discover our Delightful Menu</h1>
    </div>
    <div className=' flex justify-center items-center mt-10'>
        <div className=' grid grid-rows-4 gap-3'>
{/* //left */}
<div className='flex gap-3'>
<img src="./bu.png" alt="left_image1" className=' h-[4rem] rounded-lg' />
<div className=' grid grid-rows-2 gap-3'>
   <div className=' grid grid-cols-3'> 
    <h5 className=' font-playfairi font-semibold'>Cheese burger</h5>
   <HiArrowLongRight size={30}/>
   <span>$11</span>
<div className=''>
    <h1>Lorem, ipsum dolor sit amet </h1>
    <button className='rounded-lg border border-spacing-2 border-r-black'>Popular</button>
</div>
   </div>

</div>
</div>

<div className='flex gap-3'>
<img src="./bu.png" alt="left_image1" className=' h-[4rem] rounded-lg' />
<div className=' grid grid-rows-2 gap-3'>
   <div className=' grid grid-cols-3'> 
    <h5 className=' font-playfairi font-semibold font-playfair'>Cheese burger</h5>
   <HiArrowLongRight size={30}/>
   <span>$11</span>
<div className=''>
    <h1>Lorem, ipsum dolor sit amet </h1>
    <button className='rounded-lg border border-spacing-2 border-r-black'>Popular</button>
</div>
   </div>

</div>
</div>


<div className='flex gap-3'>
<img src="./bu.png" alt="left_image1" className=' h-[4rem] rounded-lg' />
<div className=' grid grid-rows-2 gap-3'>
   <div className=' grid grid-cols-3'> 
    <h5 className=' font-playfairi font-semibold'>Cheese burger</h5>
   <HiArrowLongRight size={30}/>
   <span>$11</span>
<div className=''>
    <h1>Lorem, ipsum dolor sit amet </h1>
    <button className='rounded-lg border border-spacing-2 border-r-black'>Popular</button>
</div>
   </div>

</div>
</div>


<div className='flex gap-3'>
<img src="./bu.png" alt="left_image1" className=' h-[4rem] rounded-lg' />
<div className=' grid grid-rows-2 gap-3'>
   <div className=' grid grid-cols-3'> 
    <h5 className=' font-playfairi font-semibold'>Cheese burger</h5>
   <HiArrowLongRight size={30}/>
   <span>$11</span>
<div className=''>
    <h1>Lorem, ipsum dolor sit amet </h1>
    <button className='rounded-lg border border-spacing-2 border-r-black'>Popular</button>
</div>
   </div>

</div>
</div>


<div className='flex gap-3'>
<img src="./bu.png" alt="left_image1" className=' h-[4rem] rounded-lg' />
<div className=' grid grid-rows-2 gap-3'>
   <div className=' grid grid-cols-3'> 
    <h5 className=' font-playfairi font-semibold'>Cheese burger</h5>
   <HiArrowLongRight size={30}/>
   <span>$11</span>
<div className=''>
    <h1>Lorem, ipsum dolor sit amet </h1>
    <button className='rounded-lg border border-spacing-2 border-r-black'>Popular</button>
</div>
   </div>

</div>
</div>



        </div>


        
        <div>
{/* //right */}
<div>
    <img src="./right.png" alt="" className=' h-[4rem] rounded-lg'/>
</div>
<div></div>
<div></div>
<div></div>
        </div>
    </div>
    </>
  )
}

export default ResturantsMenu