import React from 'react';
import { FaFontAwesomeFlag } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";

const Player_details = ({details}) => {
    const {name,img_link,batting_hand,price,button,player_type,country}=details
    return (
        <div className='border p-3 rounded-xl'>
            <img className='w-full h-80 rounded-xl' src={img_link} alt="" srcSet="" />
            <h2 className='flex mt-2 text-black font-bold'><GrUserManager />{name}</h2>
            <div className='flex justify-between items-center border-b'>
                <div className='flex'>
                <FaFontAwesomeFlag />
                {country}

                </div>
                <div className='bg-[#1313130D] p-1 rounded-xl mb-2'>
                    <p className='text-sm'>{player_type}</p>
                </div>
            </div>
            <p>Rating</p>
            <div className='flex justify-between'>
                <p className='tex-sm font-bold'>{batting_hand}</p>
                <p className='text-[#131313B3] text-sm'>{batting_hand}</p>
            </div>
            <div className='flex justify-between'>
                <p className='tex-sm font-bold'>PRICE:${price}</p>
                <button className='text-[#131313B3] text-sm border p-1 rounded-xl' >{button}</button>
            </div>
            
        </div>
    );
};

export default Player_details;