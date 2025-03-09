import React from 'react';
import logo from '../../assets/img/logo-footer.png';

const Footer = () => {
    return (
        <div className='bg-[#06091A] mt-3 flex justify-center min-h-svh items-center'>
            <div>
            <div className='flex justify-center items-center'>
                <div>
                    <img src={logo} alt="" srcset="" />

                </div>
            </div>
            <div className='flex flex-col md:flex-row  lg:flex-row md:gap-14 lg:gap-64 mt-8'>
                <div>
                    <p className='text-[#FFFFFF]'>About Us</p>
                    <p className='text-[#FFFFFF99] text-sm'>We are a passionate team <br />
                        providing the best <br />
                         services to our customers.</p>
                    
                </div>
                <div>
                    <p className='text-[#FFFFFF]'>Quick Links</p>
                    <ul className='text-[#FFFFFF99] text-sm'>
                    
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <p className='text-[#FFFFFF]'>Subscribe</p>
                    <p className='text-[#FFFFFF99] text-sm'>
                    Subscribe to our newsletter for the <br />latest updates.
                    </p>
                    <div className='flex'>
                        <input className='bg-[#FFFFFF] text-[#13131366] p-2 rounded-l-xl' type="text" name="" id="" placeholder='Enter your email' />
                        <button className='text-black bg-orange-600 p-2 rounded-r-xl'>Subscribe</button>

                    </div>
                </div>
                
            </div>
            </div>
            
        </div>
    );
};

export default Footer;