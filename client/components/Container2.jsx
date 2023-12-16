import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import Image from "next/image";
import { container1, container2 } from '../public/images';

const Container2 = () => {
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

  return (
    <Element name="container2" className="bg-[#010000] text-white relative w-full h-auto bg-gradient-to-bl from-[#010000] from-50% via-indigo-500 to-[#1CB4CC]">
      <div className=" pr-6 pl-6 md:pr-16 md:pl-16">
        <div
          className={`justify-center ${shouldAnimate ? "animate-flipUp" : ""} pt-10 pb-10 md:pt-10 md:pb-24 font-inter leading-tight text-4xl md:text-6xl font-extrabold text-center`}
        >
          Features that Enhance Your Crowdfunding Experience
        </div>
      </div>


      <div className="md:flex-col">
        <div className="flex md:flex-row flex-col w-full h-auto">
          <div className="order-1 md:order-1 mb-5 pl-12 pr-12 md:pl-28 md:pr-8 rounded-lg overflow-hidden">
            <Image src={container1} width={500} height={500} className="rounded-lg"/>
            <p className="mt-4  md:mt-5 md:pl-1 align-center font-inter text-xl md:text-3xl font-semibold">
            Ultra-Secure Transactions with Blockchain
          </p>
          </div>
          <div className="order-2 md:order-2 pl-12 pr-12  md:pl-10 md:pr-28 md:pb-20  overflow-hidden">
            <Image src={container2} width={495} height={500} className="rounded-lg"/>
            <p className=" mt-4  md:mt-5 align-center font-inter text-xl md:text-3xl font-semibold">
            Diverse Projects Across Multiple Categories
          </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Container2;
