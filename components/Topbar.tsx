"use client";

import { Facebook, Linkedin, Mail, Phone } from "lucide-react";

const Topbar = () => {
  return (
    <div className="bg-gray-900 text-white py-2 px-4 flex justify-between items-center md:text-sm text-xs">
      {/* Left Side - Social Media Icons */}
     <div className="flex gap-4">
        <a
          href="https://facebook.com/KKubaniandco"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <Facebook size={18} />
        </a>
        {/* <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <Linkedin size={18} />
        </a>  */}
        {/* <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
          <Whatsapp size={18} />
        </a> */}
      </div> 

      {/* Right Side - Contact Details */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <div className="flex items-center gap-2">
          <Phone size={18} />
          <span>
            <span className="border rounded-2xl px-1 bg-orange-500 hover:bg-yellow-200 capitalize font-bold text-gray-900">
              {" "}
              call 
            </span>{" "}
            (234) 809 900 0582
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={18} />
          <span>info@kkubaniandco.com</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
