import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn, CiMail } from "react-icons/ci";

export default function Header() {
  return (
    <div className="bg-[#7b2922] text-white py-3 px-5 justify-around items-center  font-sans overflow-auto hidden md:flex ">
      {/* Contact Info Section */}
      <div className="flex flex-wrap items-center justify-evenly space-x-8 md:space-x-15 gap-40">
        {/* Phone Number */}
        <div className="flex items-center space-x-3 md:space-x-3">
          <FiPhoneCall className="text-xl font-bold" />
          <span className="font-light text-[14px] md:text-[16px]">
            061-522346 ,56044033
          </span>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-3 md:space-x-5">
          <CiMail className="text-xl font-bold " />
          <span className="font-light text-[14px] md:text-[16px]">
            roundhousecamping@gmail.com
          </span>
        </div>

        {/* Address */}
        <div className="flex items-center space-x-3 md:space-x-5">
          <CiLocationOn className="text-xl font-bold " />
          <span className="font-light text-[14px] md:text-[16px]">
            Pokhara-22,Kalimati
          </span>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex items-center space-x-4">
        <a href="https://www.facebook.com/share/1DqGTS3WPh/" target="blank">
          <SlSocialFacebook className="cursor-pointer hover:text-gray-300 text-xl font-bold" />
        </a>
        <FaInstagram className="cursor-pointer hover:text-gray-300" />
      </div>
    </div>
  );
}
