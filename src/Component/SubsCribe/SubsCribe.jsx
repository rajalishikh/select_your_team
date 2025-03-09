import React from 'react';
import bg from "../../assets/img/bg-shadow.png";

const SubsCribe = () => {
    return (
        <div className='bg-[#FFFFFF] flex justify-center items-center h-[256px] m-2 rounded-md' style={{ backgroundImage: `url(${bg})` }}>
            <div className='flex justify-center'>
            <div>
            <h2 className='text-black font-bold text-center text-3xl'>Subscribe to our Newsletter</h2>
            <p className='text-[#131313B3]'>Get the latest updates and news right in your inbox!</p>
            <div className='flex gap-5'>
                <input className=' border w-72 p-1 rounded-xl' type="text" name="" id="" placeholder='write your email' />
                <button className='text-black p-1 rounded-md bg-orange-500 font-bold'>Subscribe</button>
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default SubsCribe;