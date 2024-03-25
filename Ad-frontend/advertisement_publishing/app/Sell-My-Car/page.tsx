import Image from "next/image";
import {Hero, CustomFilter, SearchBar, CustomButton} from '@/components';


export default function Home() {
  return (
    <main className=" overflow-hidden">
      <Hero/> 

      <div className="  text-black mt-5 border-t border-gray-100">
        <div className=" justify-between gap-5 sm:px-16 px-6 py-10">
            <div className="flex flex-col items-center gap-6">
                
                <h1 className="text-6xl text-black font-bold items-center justify-center">
                    Get top Dollar for your car
                </h1>
                <p className="text-5xl text-black font-bold items-center justify-center">
                    Sell it from home instantly
                </p>
                
                <CustomButton 
                    title="Advertising prices >>"
                    btnType="button"
                    containerStyles="text-white rounded-lg bg-orange-600 min-w-[130px] mt-20"
                />
               
              </div>
              <div className="flex flex-col items-center gap-6 mt-20">
           
                <h2 className="text-3xl text-black font-bold items-center ">
                    How to sell your car with car seek?
                </h2>
                <div  className="items-center inline-flex mt-10">
                   
               
                   </div>
                 
                
                
                 
              
                </div>
              
                
               
          </div>    

                </div>

    
    </main>
  );
}
