import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { container3,container4 } from '../public/images';
import Image from "next/image";


const Container3 = () => {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollThreshold = 200;
        const scrollPosition = window.scrollY;
        setShouldAnimate(scrollPosition > scrollThreshold);
      };
  
      // Attach the scroll event listener
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup the event listener when the component is unmounted
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []); // Empty dependency array ensures the effect runs once on mount  
  

    return(
        <Element name="container3" className="bg-[#010000] text-white relative w-full h-auto bg-gradient-to-br from-[#1CB4CC] from-1% via-indigo-500  to-[#010000] to-50%">
            <div className=" pr-6 pl-6 md:pr-40 md:pl-40">
                <div className={`justify-center ${shouldAnimate ? "animate-flipUp" : ""} pt-10 md:pt-10   font-inter leading-tight text-4xl md:text-5xl font-extrabold text-center`}
                >
                Explore How We're Enhancing Crowd Funding with Decentralization 
                </div>
                <p className="md:pb-24 pb-10 font-inter leading-tight md:pl-44 md:pr-44 mt-5 text-center">
                    Our platform uses Ethereum-based smart contracts to ensure transparency, accountability, and security in your fundraising endeavors. Connect with like-minded investors and creators globally. </p>
            </div>

            <div className="relative flex flex-col md:flex-row w-full h-auto">
              <div className="order-1 pl-12 pr-12 md:order-1  md:pl-28 md:pr-5">
                <Image src={container3} width={750} height={500} className="rounded-lg"></Image>
              </div>
              <div className="order-2 md:order-2 md:pl-5  md:pr-28">
                <p className="pl-12 pr-5 mt-4  md:mt-24 align-center font-martian text-xl md:text-3xl font-semibold inline-block">
                Find Transparency in each Transaction
                </p>
                <p className="pl-12 pr-5 mb-10 font-inter mt-2 md:mt-4 text-sm md:text-md font-light">
                  Each transaction made on our platform is logged and transparent, thanks to Ethereum-based smart contracts. 
                  Say goodbye to hidden fees and unfulfilled promises.
                </p>
              </div>
            </div>

            <div className="pt-20 md:pt-20 relative flex flex-col md:flex-row max-w-1200 w-full h-auto">
              <div className="order-2 md:order-1  md:pl-20 md:pr-5">
                <p className="pl-12 pr-12 mt-4  md:mt-28 align-center font-martian text-xl md:text-3xl font-semibold inline-block">
                    Connect with a Global Community
                </p>
                <p className="pl-12 pr-12 font-inter mt-2 md:mt-4 text-sm md:text-md font-light">
                  Our blockchain platform is not confined by borders. 
                  This is global crowdfunding, connect with international investors and creators pursuing breakthrough ideas.
                </p>
              </div>
            <div className="order-1 pl-12 pr-12 md:pl-10 md:pr-40 md:pb-20">
              <Image src={container4} width={750} height={550} className="rounded-lg"></Image>
            </div>
          </div>

        </Element>
    );
};

export default Container3;