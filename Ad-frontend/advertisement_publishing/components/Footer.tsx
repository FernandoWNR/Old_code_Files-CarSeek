 import Image from "next/image";
 import Link from "next/link";
import CustomButton from "./CustomButton";
import {footerLinks} from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-indigo-950 text-white mt-5 border-t border-gray-100">
        <div className="flex-max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
            <div className="flex flex-col justify-start items-center gap-6">
                <Image src="/images/logo.png" alt='carseek logo' width={150} height={40} className="object-contain"/>
                <p className="text-4xl text-white font-bold items-center justify-center">
                    Get Latest Updates, News and Offers from CarSeek
                </p>
                <CustomButton 
                    title="Subscribe"
                    btnType="button"
                    containerStyles="text-white rounded-lg bg-orange-600 min-w-[130px]"
                />
                <div className="flex items-center gap-5">
                <Image src="/images/Instagram.png" alt='Instagram logo' width={40} height={40} className="object-contain"/>
                <Image src="/images/Facebook.png" alt='Facebook logo' width={40} height={40} className="object-contain"/>
                <Image src="/images/Twitter.png" alt='Twitter logo' width={40} height={40} className="object-contain"/>
                </div>
                <div className="footer__links">
                    {footerLinks.map((Link)=>(
                        <div key={Link.title}
                        className = "footer__links">
                            <h3 className="font-medium ">{Link.title}</h3>
                             
                            </div>
                    ))}

                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer
