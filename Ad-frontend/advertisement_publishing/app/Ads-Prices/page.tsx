import Image from "next/image";
import {Hero, CustomFilter, SearchBar} from '@/components';


export default function Home() {
  return (
    <main className=" overflow-hidden">
      <Hero/> 

      <div className="  padding-x padding-y max-width  bg-slate-300" id="discover">
        <div className="home__text-container  " >
          <div className="home__filters">
          
          </div>
          <div className="home__filter-container  ">
            <CustomFilter/>
            <div className="w-full h-200 bg-no-repeat bg-cover bg-banner-bg" >
          
          </div>
           
          <div className="w-70% h-80%  p-10 bg-white columns-3 rounded-lg">
            Advertisement Prices
           </div>
            
            
          </div>
          </div>


        </div>

    
    </main>
  );
}
