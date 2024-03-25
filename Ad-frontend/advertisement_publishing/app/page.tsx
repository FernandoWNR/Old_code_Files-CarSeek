"use client"
import Image from "next/image";
import {Hero, CustomFilter, SearchBar,CustomButton} from '@/components';
import ImageUpload from "@/components/image-upload";
import React, { useState, useEffect } from 'react';
import Districts from "@/constants/filterData/district.json";
import RegYears from "@/constants/filterData/regYears.json";
import Brands from "@/constants/filterData/brand.json";
import Mileage from "@/constants/filterData/mileage.json";
import Models from "@/constants/filterData/model.json";
import Type from "@/constants/filterData/bodyType.json";


export default function Home() {
   

  // interface district{
  //   username:String;
  //   id: number;
  //   street:String;
  //   email:String;
    
  // }
  
  
    // const [districts, setDistricts] = useState< []>([]);
  
    // useEffect(() => {
    //   fetch('https://fakestoreapi.com/users')
    //     .then((res) => res.json())
    //     .then((data: []) => {
    //       console.log(data);
    //       setDistricts(data);
    //     });
    // }, []);
  return (
    <main className=" overflow-hidden">
      <Hero/> 

      <div className="  padding-x padding-y max-width-90% bg-slate-300" id="discover">
        <div className="home__text-container w-70% h-80%  p-10 bg-white rounded-none mb-0  " >
           
          <div className="  xl:columns-3 lg:columns-3 md:column-2 sm:columns-1 item-center">

          <div className="inline flex-row items-center  m-2 min-w-[100px] h-[300px] rounded-lg">
              <select className='bg-slate-300 p-4 ml-5 w-full flex items-center text-slate-500 justify-between font-medium text-lg rounded-lg tracking-wider border-transparent active:border-green-400 duration-300  '>Select Brand
              <option className='leading-5' disabled selected>Location</option>
              {Districts.map(district=>{
                return <option value={district.id}>{district.name_en}</option>
              })}
              </select> 
          </div> 
            
          <div className="inline flex-row items-center m-2 max-w-[100px] h-[300px] rounded-lg">
              <select className='bg-slate-300 p-4 ml-5 w-full flex items-center text-slate-500 justify-between font-medium text-lg rounded-lg tracking-wider border-transparent active:border-green-400 duration-300  '>Select Brand
              <option className='leading-5' disabled selected>Select Registration Year</option>
                {RegYears.map(registrationYear=>{
                return <option >{registrationYear.year}</option>
              })}
              </select> 
          </div>

          <div className="inline flex-row items-center m-2 max-w-[100px] h-[300px] rounded-lg">
              <select className='bg-slate-300 p-4 ml-5 w-full flex items-center text-slate-500 justify-between font-medium text-lg rounded-lg tracking-wider border-transparent active:border-green-400 duration-300  '>Select Brand
                <option className='leading-5' disabled selected>Select Your Ownership</option>
                <option value={"1"}>1st Owner</option>
                <option value={"2"}>2nd Owner</option>
                <option value={"3"}>3rd Owner</option>
              </select> 
          </div>

          <div className="inline flex-row items-center m-2 max-w-[100px] h-[300px] rounded-lg">
              <select className='bg-slate-300 p-4 ml-5 w-full flex items-center text-slate-500 justify-between font-medium text-lg rounded-lg tracking-wider border-transparent active:border-green-400 duration-300  '>Select Brand
                <option className='leading-5' disabled selected>Select Condition</option>
                <option value={"new"}>New Vehicle</option>
                <option value={"reconditional"}>Reconditional Vehicle</option>
                <option value={"used"}>Used Vehicle</option>
              </select> 
          </div>
          
          <div className="inline flex-row items-center m-2 max-w-[100px] h-[300px] rounded-lg">
              <select className='bg-slate-300 p-4 ml-5 w-full flex items-center text-slate-500 justify-between font-medium text-lg rounded-lg tracking-wider border-transparent active:border-green-400 duration-300  '>Select Brand
       
                <option className='leading-5' disabled selected>Select Brand</option>
                {Brands.map(brand=>{
                return <option >{brand.brand}</option>
              })}
                 
              </select> 
          </div> 
          <div className="inline flex-row items-center m-2 max-w-[100px] h-[300px] rounded-lg">
              <select className='bg-slate-300 p-4 ml-5 w-full flex items-center text-slate-500 justify-between font-medium text-lg rounded-lg tracking-wider border-transparent active:border-green-400 duration-300  '>Select Brand
       
                <option className='leading-5' disabled selected>Select Mileage Range (km)</option>
                {Mileage.map(mlage=>{
                return <option>{mlage.mileage}</option>
              })}
              </select> 
          </div> 

          <div className="inline flex-row items-center m-2 max-w-[100px] h-[300px] rounded-lg">
              <select className='bg-slate-300 p-4 ml-5 w-full flex items-center text-slate-500 justify-between font-medium text-lg rounded-lg tracking-wider border-transparent active:border-green-400 duration-300  '>Select Brand
       
                <option className='leading-5' disabled selected>Select Transmission</option>
                <option value={"Manual"}>Manual</option>
                <option value={"Autmatic"}>Automatic</option>
                <option value={"Tiptronic"}>Tiptronic</option>
              </select> 
          </div> 
          
          <div className="inline flex-row items-center m-2 max-w-[100px] h-[300px] rounded-lg">
              <select className='bg-slate-300 p-4 ml-5 w-full flex items-center text-slate-500 justify-between font-medium text-lg rounded-lg tracking-wider border-transparent active:border-green-400 duration-300  '>Select Brand
       
                <option className='leading-5' disabled selected>Select Fuel Type</option>
                <option value={"Diesel"}>Diesel</option>
                <option value={"Petrol"}>Petrol</option>
                <option value={"Hybrid"}>Hybrid</option>
                <option value={"Electric"}>Electric</option>
              </select> 
          </div>
 
          <div className="inline flex-row items-center m-2 max-w-[100px] h-[300px] rounded-lg">
              <select className='bg-slate-300 p-4 ml-5 w-full flex items-center text-slate-500 justify-between font-medium text-lg rounded-lg tracking-wider border-transparent active:border-green-400 duration-300  '>Select Brand
       
                <option className='leading-5' disabled selected>Select Model</option>
                {Models.map(model=>{
                return <option value={model.brand} >{model.models}</option>
              })}
              
              </select> 
          </div>
           
          <div className="inline flex-row items-center m-2 max-w-[100px] h-[300px] rounded-lg">
              <select className='bg-slate-300 p-4 ml-5 w-full flex items-center text-slate-500 justify-between font-medium text-lg rounded-lg tracking-wider border-transparent active:border-green-400 duration-300  '>Select Brand
       
                <option className='leading-5' disabled selected>Select Body Type</option>
                {Type.map(bodyType=>{
                return <option >{bodyType.bt}</option>
              })}
              </select> 
          </div>
          <div  className="ml-5 w-full">
              <input type='text' placeholder='Enter engine capacity in (cc)'>
  
              </input>
          </div>
          <div className="ml-5 w-full mt-5" >
              <input type='text' placeholder='Enter Car Price in(SL Rs.)'>
  
              </input>
          </div>   
            </div> 
          </div>
          <div className="w-70% h-80%  p-10 bg-white rounded-none mt-0 mb-0">
              <h2>
                Upload Your Car Images
              </h2>
              <ImageUpload/>
              
            </div>
            <div className="w-70% h-80%  p-10 bg-white rounded-none mt-0 ">
              <h2>
                Enter Contact Details
              </h2>
              <div  className="text-black mt-8">
              <input type='text' placeholder='Name'>
  
              </input>
          </div>
          <div className="text-black mt-8">
              <input type='text' placeholder='Email'>
  
              </input>
          </div>
           
          <div className="text-black mt-8 border-solid border-2 border-black p-10">
              <input type='text' placeholder='Contact Number'>
  
      
              </input>
              <div className="flex columns-3 items-end mt-10">
                
 
                <input type="checkbox"  className="w-6 h-6 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                <label className="ms-2 text-sm font-medium mr-20 text-black"> Hide Phone Number(s)</label>
 

                <CustomButton 
                    title="Add"
                    btnType="button"
                    containerStyles="text-white rounded-lg bg-blue-950 min-w-[130px] "
                    />
              </div>

          </div>
           
          <div className="mt-20 ">
             
          <CustomButton 
              title="Post Your Ad."
              btnType="button"
              containerStyles="text-white rounded-lg bg-orange-600 min-w-[130px] "
              />
               
          </div>
            </div>
           
          </div>
         
          
          

      
  

    
    </main>
  );
            }
