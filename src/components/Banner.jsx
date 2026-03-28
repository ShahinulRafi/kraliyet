import React from 'react';
import banner from '../assets/banner.png'
const Banner = () => {
    return (
        <div>
            {/* <div className='py-8'>
                <h2 className='text-4xl text-center'>Get Your Cap</h2>
            </div> */}
            <div>
                <img src={banner} alt="banner" className='w-full'/>
            </div>
        </div>
    );
};

export default Banner;