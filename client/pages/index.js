import React from "react";
import {Navbar, Footer, HomePage, Container2, Container3, ContactUs} from "../components" 

const index = () => {
  return (
    <>
    <div className=' min-h-screen'>
    <div className=" bg-[#010000]"><Navbar /></div>
    <div ><HomePage /></div>
    <div><Container2 /></div> 
    <div><Container3 /></div>
    </div>
    <ContactUs />
    <Footer />
    
    </>
  )
}
export default index;
