import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
const MenuItem = ({ title, price, description, popular }) => {
  return (
    <div className='flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors'>
      <img src="./right.png" alt={title} className='h-16 w-16 object-cover rounded-lg' />
      <div className='flex-1'>
        <div className='flex justify-between items-center'>
          <h5 className='font-semibold text-gray-900 font-playfair'>{title}</h5>
          <div className='flex items-center gap-2'>
            <HiArrowLongRight size={30} className=' text-gray-700'/>
            <span className='font-semibold text-[#295757]'>${price}</span>
          </div>
        </div>
        <div className='mt-1 flex justify-between items-center'>
          <p className='text-sm text-gray-500 font-playfairi'>{description}</p>
          {popular && (
            <span className='px-2 py-1 bg-white font-bold text-[#295757] text-xs rounded-full'>
              Popular
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

const ResturantsMenu = () => {
  return (
    <section className='py-12 px-4'>
      <div className='text-center mb-12'>
        <h2 className='font-semibold font-playfairi text-xl text-[#295757] mb-2'>
          Restaurants menu
        </h2>
        <h1 className='text-4xl font-playfairi font-bold text-gray-900'>
          Discover our Delightful Menu
        </h1>
      </div>

      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-8'>
        {/* Left Column */}
        <div className='space-y-6'>
          <MenuItem
            title="Cheese Burger"
            price={11}
            description="Lorem ipsum dolor sit amet"
            popular
          />
          <MenuItem
            title="Veggie Burger"
            price={9}
            description="Lorem ipsum dolor sit amet"
          />
          <MenuItem
            title="Double Burger"
            price={13}
            description="Lorem ipsum dolor sit amet"
          />
          <MenuItem
            title="Bacon Burger"
            price={12}
            description="Lorem ipsum dolor sit amet"
          />
        </div>

        {/* Right Column */}
        <div className='space-y-6'>
          <MenuItem
            title="Chicken Burger"
            price={10}
            description="Lorem ipsum dolor sit amet"
          />
          <MenuItem
            title="Fish Burger"
            price={11}
            description="Lorem ipsum dolor sit amet"
          />
          <MenuItem
            title="Mushroom Burger"
            price={10}
            description="Lorem ipsum dolor sit amet"
          />
          <MenuItem
            title="BBQ Burger"
            price={12}
            description="Lorem ipsum dolor sit amet"
          />
        </div>
      </div>
    </section>
  )
}

export default ResturantsMenu