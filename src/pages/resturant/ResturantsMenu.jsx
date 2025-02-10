import React from 'react'
import MenuItem from './MenuItem'
const ResturantsMenu = () => {
  return (
    <section className='py-12 px-4'>
      <div className='text-center mb-12'>
        <h2 className='font-semibold text-xl text-[#295757] mb-2'>
          Restaurants menu
        </h2>
        <h1 className='text-4xl  font-playfair font-bold text-gray-900'>
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