"use client";

import Image from'next/image';
import CustomButton  from './CustomButton';
import  SearchBar from './SearchBar'; 
 

const Hero = () => {
    
  return (
    <div className='hero'>
            
        <div className='flex-1 pt-20 padding-x'>
            <div className=' flex items-center mt-20'>
            <SearchBar/>
            <CustomButton 
              title="Search"
              btnType="button"
              containerStyles="text-white rounded-none rounded-r-lg fixed bg-orange-600 min-w-[130px]"
              />
            </div>
 
            <h1 className='hero__title mt-20'>
                Enter Your Car's Details
            </h1>
        </div>
        <div className="hero__image-container">
            <div className='hero__image pt-0'>
                
                <Image src = "/images/suv_mockup_010_619.png " alt='car2' fill className='object-contain'></Image>

            </div>


        </div>
     
    </div>
  )
}

export default Hero
