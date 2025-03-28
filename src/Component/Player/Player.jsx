import React, { useEffect, useState } from 'react';
import Player_details from '../Player_details/Player_details';

const Player = ({show,display,display2,chosePlayer,myMoney,number_player,playerId}) => {
    const [player,setPlayer]=useState([])
    useEffect(()=>{
        fetch("player.json")
        .then(res=>res.json())
        .then(data=>setPlayer(data))
        
    },[])
    
    return (
        <div className='mt-10'>
            {/* available player section  */}
            <div className='flex justify-between mb-4'>
                {
                   show || <div><h2 className='text-black font-bold text-2xl'>Available Players</h2></div>
                }
                {
                    show && <div><h2 className='text-black font-bold text-2xl'>Selected Player{number_player}/11</h2></div>
                }
                <div className='border border-[#1313131A] p-2 rounded-xl '>
                    <button onClick={display} className='hover:bg-[#E7FE29] p-3 rounded-xl font-bold '>Available</button>
                    <button onClick={display2} className='hover:bg-[#E7FE29] p-3 rounded-xl font-bold'>Selected 11/<span>{number_player}</span></button>
                </div>
            </div>
            {/* player container section  */}

            {
                show || <div className='grid  md:grid-cols-3 lg:grid-cols-3 gap-4 '>
                {
                    player.map(item=><Player_details key={item.id} details={item} chosePlayer={chosePlayer} myMoney={myMoney} number_player={number_player} playerId={playerId}></Player_details>)
                }

            </div>
            }
            
        </div>
    );
};

export default Player;