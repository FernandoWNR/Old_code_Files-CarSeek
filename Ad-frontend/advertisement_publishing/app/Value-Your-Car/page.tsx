import Image from "next/image";
import {Hero, CustomFilter, SearchBar,CustomButton} from '@/components';
 
 


export default function Home() {
  return (
    <main className=" overflow-hidden">
      <Hero/> 

      <div className="  text-black mt-5 border-t border-gray-100">
        <div className=" justify-between gap-5 sm:px-16 px-6 py-10">
            <div className="flex flex-col items-center gap-6">
                
                <h1 className="text-4xl text-black font-bold items-center justify-center">
                    How much is your car worth right now?
                </h1>
                <p className="text-m text-black font-bold items-center justify-center">
                    Get a valuation in second. It could be worth more than you think.
                </p>
                <div  className="items-center inline-flex mt-10">
                  <div> 
                <label className="  ml-20 text-sm font-medium   text-black"> Registration Number</label>
              <input type='text' placeholder='' className=" mr-10 mt-0">
  
              </input>
              </div>
              <div> 
              <label className=" ml-20  text-sm font-medium  text-black"> Current Mileage</label>
              <input type='text' placeholder='' className="ml-5 mt-0">
  
              </input>
              </div>
          </div>
                <CustomButton 
                    title="Get My instant value"
                    btnType="button"
                    containerStyles="text-white rounded-lg bg-orange-600 min-w-[130px] mt-20"
                />
               
              </div>
              <div className="flex flex-col items-center gap-6 mt-20">
           
                <h2 className="text-4xl text-black font-bold items-center ">
                    Factors That Can Affect a Car Value
                </h2>
                <p className="text-m text-black font-bold items-centerr">
                    The following factors are not included in our valuations but can increase or decrease car values
                </p>
                
                
                <div className="xl:columns-2 lg:columns-2 md:column-1 sm:columns-1 items-center inline-flex">
                  <div className="bg-slate-100 rounded-md p-10 m-20 items-center width-50%">
                  <p className="text-l text-black font-bold items-center justify-center items-centerr p-10">
                    Increase a car's value by
                </p>
                <Image src="/images/red-car-3.png " alt='Instagram logo' width={300} height={250} className="object-contain mt-10"/>
                 <ul className="list-disc p-10">
                  <li>Modifications</li>
                  <li>Full service history</li>
                  <li>Desirable Colours</li>
                  <li>No Damage</li>
                 </ul>
                  </div>
                  <div className="bg-slate-100 rounded-md p-10 m-20  items-center width-50%">
                  <p className="text-l text-black font-bold justify-center items-center p-10">
                     Decrease a car's value by
                </p>
                <Image src="/images/blue-car-3.png" alt='Instagram logo' width={300} height={250} className="object-contain mt-10"/>
                <ul className="list-disc p-10">
                  <li>Significant wear and tear</li>
                  <li>Parts not working</li>
                  <li>Lots of previous owners</li>
                  <li>Gaps in service history and no MOT</li>
                 </ul>
                  </div>

                </div>
                <CustomButton 
              title="Post Your Ad."
              btnType="button"
              containerStyles="text-white rounded-lg bg-orange-600 min-w-[130px]  "
              />
                </div>
              
                
               
          </div>    

                </div>
          
        

    
           
        
          
          

      
  

    
    </main>
  );
}
