import React from 'react';
import CARD_2 from "../../assets/images/card2.png";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return <div className="flex w-full h-screen">
    <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h1 className="text-lg font-medium text-black"><b>Expense Tracker</b></h1>
        {children}
    </div>

    <div className="w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
        <div className="w-48 h-48 rounded-[40px] bg-[#44679F] absolute -top-7 -left-5" />
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-[#C0D9E5] absolute top-[30%] right-[30%]"></div>
        <div className="w-48 h-48 rounded-[40px] bg-[#3B577D] absolute -bottom-7 -left-5"></div>

        <div className="grid grid-cols-1 z-20">
            <StatsInfoCard
                icon = {<LuTrendingUpDown />}
                label="Track your Income and Expense"
                value="4,30,000"
                color="bg-[#44679F]"
            />
        </div>

        <img
            src={CARD_2}
            alt='Dashboard Preview'
            className="w-full max-w-xl absolute top-55 bottom-10 right-2 shadow-blue-400/15 rounded-3xl"
        />
    </div>
  </div>
}

export default AuthLayout;

const StatsInfoCard = ({icon, label, value, color}) =>{
    return <div className="flex gap-6 bg-white p-4 rounded-2xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-10">
        <div className={`w-14 h-14 flex items-center justify-center text-[260px] text-white ${color} rounded-full drop-shadow-xl`}>
            {icon}

        </div>
        <div>
            <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
            <span className="text-[20px]">${value}</span>
        </div>
    </div>
}