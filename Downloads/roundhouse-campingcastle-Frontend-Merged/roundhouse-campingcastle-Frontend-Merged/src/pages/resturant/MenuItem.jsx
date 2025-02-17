import { HiArrowLongRight } from "react-icons/hi2"

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

export default MenuItem