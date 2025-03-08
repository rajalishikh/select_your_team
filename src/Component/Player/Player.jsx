import React, { useEffect, useState } from 'react';
import Player_details from '../Player_details/Player_details';

const Player = () => {
    const [player,setPlayer]=useState([])
    useEffect(()=>{
        fetch("player.json")
        .then(res=>res.json())
        .then(data=>setPlayer(data))
        
    },[])
    console.log(player)
    return (
        <div className='mt-10'>
            {/* available player section  */}
            <div className='flex justify-between'>
                <div><h2 className='text-black font-bold text-2xl'>Available Players</h2></div>
                <div className='border border-[#1313131A] p-2 rounded-xl '>
                    <button className='hover:bg-yellow-400 p-2 rounded-xl '>Available</button>
                    <button className='hover:bg-yellow-400 p-2 rounded-xl '>Selected <span>(0)</span></button>
                </div>
            </div>
            {/* player container section  */}

            <div className='grid  md:grid-cols-3 lg:grid-cols-3 gap-4 '>
                {
                    player.map(item=><Player_details key={item.id} details={item}></Player_details>)
                }

            </div>
            
        </div>
    );
};

export default Player;