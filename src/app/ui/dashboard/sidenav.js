import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { LuFiles } from "react-icons/lu";
import { FaPeopleLine } from "react-icons/fa6";
import Link from "next/link";

export default function SideNav({ chlidren }) {
  return (
    <>
      <div className="logo-section bg-blue-300 border-solid h-44 flex justify-center items-center  ">
        <div className="flex items-center justify-start p-2 h-full  ">
          {/* Add Hero Images Here */}
          <Image
            src="/global.png"
            width={200}
            height={200}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
            loading="lazy"
          />
        </div>
      </div>
      <ul className="list-none md:w-full h-auto m-0  p-0">
        <li className="w-full h-12 mb-3 uppercase text-sm cursor-pointer hover  hover:bg-blue-300 flex items-center justify-start  p-2">
          <AiOutlineHome className="mr-2" size={20} /> Home
        </li>
        <li className="w-full h-12 mb-3 uppercase text-sm cursor-pointer hover  hover:bg-blue-300 flex items-center justify-start p-2">
          
            <LuFiles className="mr-2" size={20} /> Invoices
         
        </li>
        <li className="w-full h-12 mb-1 uppercase text-sm cursor-pointer hover  hover:bg-blue-300 flex items-center justify-start p-2">
          <FaPeopleLine className="text-lg mr-2" size={20} /> customers
        </li>
      </ul>
    </>
  );
  
}