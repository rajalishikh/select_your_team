
import React from 'react';
import coin from "../../assets/img/coin_11280638.png";
import profile from "../../assets/img/logo.png";

const Header = () => {
    return (
        <div className='flex justify-between '>
            <div className='flex items-center'>
                
                <img src={profile} alt="" srcset="" />
                
            </div>
            <div className='flex gap-2 items-center text-[#131313B3] text-sm'>
                <p>Home</p>
                <p>Fixture</p>
                <p>Teams</p>
                <p>Schedules</p>
                <div className='flex items-center sm:gap-0 md:gap-2 lg:gap-2 border border-[#1313131A] p-2 rounded-xl'>
                <button className='text-black font-semibold'>0 Coin </button>
                <img className='w-3' src={coin} alt="" srcset="" />
                </div>
            </div>
            
        </div>
    );
};

export default Header;