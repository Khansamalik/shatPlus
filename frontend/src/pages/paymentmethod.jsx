import React from 'react'
import { SiEasyeda } from "react-icons/si";
import { MdAccountBalance } from "react-icons/md";
import Footer from '../components/Footer';
import {
  FaPhoneAlt,
  FaCreditCard,
  FaMobileAlt,
  FaHospital
} from "react-icons/fa";
export default function Methods() {
  const paymentMethods = [
    //  { 
    //    name: "Credit/Debit Cards", 
    //    icon: <FaCreditCard className="text-3xl text-[#6C0B14]" /> 
    //  },
    {
      name: "EasyPaisa",
      icon: <SiEasyeda className="text-3xl text-[#6C0B14]" />
    },
    {
      name: "JazzCash",
      icon: <FaMobileAlt className="text-3xl text-[#6C0B14]" />
    },
    {
      name: "Bank Transfer",
      icon: <MdAccountBalance className="text-3xl text-[#6C0B14]" />
    }
  ];
  return (
    <div className=" min-h-screen bg-gray-50 flex items-center justify-center p-3">
    <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-lg transition-transform duration-300 hover:scale-105">
    <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-[#6C0B14] mb-12">
          Payment methods
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {paymentMethods.map((method, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition min-w-[150px]"
            >
              <div className="mb-3">
                {method.icon}
              </div>
              <span className="font-medium text-center">{method.name}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
     </div>
  )
}