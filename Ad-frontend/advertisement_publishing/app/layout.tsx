import type { Metadata } from "next";
import "@uploadthing/react/styles.css";
import "./globals.css";
import  {Navbar,Footer}  from "@/components";


export const metadata: Metadata = {
  title: "Car Seek",
  description: "Find your dream car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='relative'>
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
