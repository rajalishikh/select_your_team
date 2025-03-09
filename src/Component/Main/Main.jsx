import React from 'react';
import Ba from "../../assets/img/banner-main.png";
import background from "../../assets/img/bg-shadow.png";

const Main = () => {
    return (

        <div 
  className="bg-no-repeat bg-cover bg-center flex items-center justify-center sm:h-auto md:h-auto lg:h-[576px]  bg-[#131313] rounded-xl mt-3" 
  style={{ backgroundImage: `url(${background})` }}
>
  <div className="flex flex-col items-center justify-center text-center  p-4">
    <img src={Ba} alt="Banner" className="mb-4" />
    <h2 className="text-[#FFFFFF] font-bold sm:text-xl md:text-2xl lg:text-4xl">Assemble Your Ultimate Dream 11 Cricket Team</h2>
    <p className="text-[#FFFFFFB3]">Beyond Boundaries Beyond Limits</p>
    <div className='border border-[#E7FE29] rounded-xl'>
                <button className='text-[#131313] bg-[#E7FE29] m-2 p-1 font-bold rounded-xl'>
                Claim Free Credit
                </button>
   </div>
  </div>
</div>

            
            
        
    );
};

export default Main;