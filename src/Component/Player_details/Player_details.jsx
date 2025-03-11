import React from 'react';
import { FaFontAwesomeFlag } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { toast } from 'react-toastify';


const Player_details = ({details,chosePlayer,myMoney,playerId}) => {
    console.log("Total length",playerId.length)
  
    const {name,img_link,batting_hand,price,button,player_type,country,id}=details;
    const notify2 = () => {
        toast("You don't have enough money to buy the player. Please add funds to your account", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            
            });
    };
    
    return (
        <div>
            <div className='border p-3 rounded-xl '>
            <img className='w-full h-80 rounded-xl' src={img_link}   />
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
            <div className='flex justify-between items-center'>
                <p className='tex-sm font-bold'>PRICE:${price}</p>
                <div> 
                    <button className='text-[#131313B3] text-sm border p-2 rounded-md hover:bg-orange-600 hover:text-white font-medium'
                     onClick={()=>myMoney >= price? chosePlayer(price,batting_hand,name,img_link,id):notify2()}  >
                        {button}

                    </button>
                    </div>
            </div>
            
            
        </div>
        
        </div>
    );
};

export default Player_details;