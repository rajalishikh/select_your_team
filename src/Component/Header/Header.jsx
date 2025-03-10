
import React from 'react';
import coin from "../../assets/img/coin_11280638.png";
import profile from "../../assets/img/logo.png";

const Header = ({money}) => {
    return (
        <div className='flex justify-between '>
            <div className='flex items-center'>
                
                <img src={profile}  />
                
            </div>
            <div className='flex gap-2 items-center text-[#131313B3] text-sm'>
                <p>Home</p>
                <p>Fixture</p>
                <p>Teams</p>
                <p>Schedules</p>
                <div className='border border-[#1313131A] p-2 rounded-xl'>
                <div className="flex flex-col sm:flex-row  gap-2   items-center">
               <div> <button className="text-black font-semibold">{money} Coin</button></div>
               <div> <img className="w-4" src={coin}  /></div>
                </div>

                </div>
                
            </div>
            
        </div>
    );
};

export default Header;