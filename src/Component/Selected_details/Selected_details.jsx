import React from 'react';
import { MdOutlineDelete } from "react-icons/md";

const Selected_details = ({item,deleteFunction}) => {
    const{player_category,name,img_link,id}=item
    console.log("After cliked",item)
    return (
        <div className='border mt-3 p-3 rounded-xl'>
            <div className='flex items-center justify-between'>
                <div className='flex gap-2 items-center'>
                    <img className='w-32' src={img_link}  />
                    <div>
                <p className='text-black font-bold text-xl'>{name}</p>
                <p>{player_category}</p>
                </div>
                </div>
                <div>
                    <button onClick={()=>deleteFunction(id)} className='text-red-400'><MdOutlineDelete /></button>

                </div>
                
            </div>
            
        </div>
    );
};

export default Selected_details;