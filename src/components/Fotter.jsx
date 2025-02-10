

import React from 'react'
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-[#7B2922] px-4 py-8'>
      <div className='max-w-6xl mx-auto'>
        {/* Contact Info Section */}
        <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-white mb-8 flex-wrap'>
          <div className='flex items-center gap-2'>
            <CiLocationOn className="flex-shrink-0" size={20} />
            <span className='text-sm md:text-base'>Pokhara-22, Kalimati</span>
          </div>
          <div className='flex items-center gap-2'>
            <FiPhoneCall className="flex-shrink-0" size={18} />
            <span className='text-sm md:text-base'>9800000000, 9800000000, 9811111111</span>
          </div>
          <div className='flex items-center gap-2'>
            <CiMail className="flex-shrink-0" size={20} />
            <span className='text-sm md:text-base'>manwooxzshar@gmail.com</span>
          </div>
          <div className='flex items-center gap-2'>
            <IoEllipsisHorizontalCircle className="flex-shrink-0" size={20} />
            <span className='text-sm md:text-base'>www.roundhouse.com</span>
          </div>
        </div>

        {/* Social Media Section */}
        <div className='flex flex-col items-center justify-center mb-8'>
          
          <div className='flex gap-4'>
            <SlSocialFacebook 
              size={28} 
              className='text-white hover:text-[#E8C8A3] transition-colors cursor-pointer' 
            />
            <FaInstagram 
              size={28} 
              className='text-white hover:text-[#E8C8A3] transition-colors cursor-pointer' 
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className='hidden md:flex md:justify-center items-center gap-4 sm:gap-5 md:gap-6 text-white mb-4'>
          <a href="/" className='hover:text-[#E8C8A3] transition-colors text-sm md:text-base'>Home</a>
          <a href="/" className='hover:text-[#E8C8A3] transition-colors text-sm md:text-base'>Room</a>
          <a href="/" className='hover:text-[#E8C8A3] transition-colors text-sm md:text-base'>Gallery</a>
          <a href="/" className='hover:text-[#E8C8A3] transition-colors text-sm md:text-base'>About</a>
          <a href="/" className='hover:text-[#E8C8A3] transition-colors text-sm md:text-base'>Contact</a>
        </div>

        {/* Copyright/Additional Info (Optional) */}
        <div className='text-center text-white text-xs mt-6 opacity-75'>
          © 2023 Roundhouse. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer