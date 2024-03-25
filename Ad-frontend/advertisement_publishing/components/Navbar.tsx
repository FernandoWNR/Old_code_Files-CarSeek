 "use client"
 import Link from 'next/link';
 import Image from 'next/image';
 import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
 import {useState} from "react";
 import CustomButton  from './CustomButton';
 


const Navbar = () => {
  const[menuOpen,setMenuOpen] = useState(false)
  const handleNav = ()=>{
      setMenuOpen(!menuOpen);
  }
  return (
      
        <nav className="fixed-w-full h-24 shadow-xl bg-indigo-950">
          <div className='flex justify-between item-center h-full w-full px-4 2xl:px-16'>
          <Link href="/" className="flex justify-center items-center">
                <Image src="/images/logo.png" alt='carseek logo' width={118} height={20} className="object-contain"/>
            </Link>
            <div className='hidden sm:flex'>
            <ul className='hidden sm:flex p-10'>
              <Link href="/Sell-My-Car">
                <li className='ml-10 uppercase text-white hover:border-b text-l'>Sell My Car</li>
              </Link>
              <Link href="/Ads-Prices">
                <li className='ml-10 uppercase text-white hover:border-b text-l'>Ads. Prices</li>
              </Link>
              <Link href="/Value-Your-Car">
                <li className='ml-10 uppercase text-white hover:border-b text-l'>Value Your Car</li>
              </Link>
              <Link href="/">
                <li className='ml-10 uppercase text-white hover:border-b text-l'>Post Your Ad.</li>
              </Link>

            </ul>
            </div>
 
            <div onClick={handleNav} className='md:hidden cursor-pointer pl-24'>
                  <AiOutlineMenu size={25}/>
            </div>
            <div className={
              menuOpen
              ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-slate-600 p-10 ease-in duration-500"
              :"fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }>
              <div className='flex w-full items-center justify-end'>
                <div onClick={handleNav} className='cursor-pointer'>
                  <AiOutlineClose size={25}/>
                   
                </div>
              </div>
              <div className="flex-col py-4">
                <ul>
                  <Link href="/Sell-My-Car">
                    <li 
                      onClick={()=> setMenuOpen(false)}
                      className='py-4 cursor-pointer'
                    >
                      Sell My Car
                    </li>
                  </Link>
                  <Link href="/Ads-Prices">
                    <li 
                      onClick={()=> setMenuOpen(false)}
                      className='py-4 cursor-pointer'
                    >
                      Ads. Prices
                    </li>
                  </Link>
                  <Link href="/Value-Your-Car">
                    <li 
                      onClick={()=> setMenuOpen(false)}
                      className='py-4 cursor-pointer'
                    >
                       Value Your Car
                    </li>
                  </Link>
                  <Link href="/">
                    <li 
                      onClick={()=> setMenuOpen(false)}
                      className='py-4 cursor-pointer'
                    >
                      Post Your Ad.
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
           
             
          
            
         
             
            
          
        </nav>
        
     
  )
}

export default Navbar
