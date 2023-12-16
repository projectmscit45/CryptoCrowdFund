// Footer.js
import React from 'react';
import Image from 'next/image';
import { logo } from '../public/images';
import { Link as ScrollLink, Element } from 'react-scroll';
import { useRouter } from 'next/router';


const Footer = () => {
  const router = useRouter();

  const handleNavigation = (href) => {
     // If it's a scroll link, use the react-scroll library to scroll smoothly
     if (href.startsWith('#')) {
      const targetElement = document.getElementById(href.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(href);
    }
  };

  return (
    <footer className=" bg-gradient-to-br from-[#010000] to-[#050508]">
      <div className="max-w-screen-xl px-4 py-9 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        
          <div>
            <Image src={logo} height={50} width={50} alt="logo" /> 
            <p className="max-w-2xs mt-4 text-sm font-semibold text-[#ebe6e6cb] text-justify">
                CryptoCrowdfund is your gateway to the future of finance. 
                Discover and support innovative blockchain projects on our secure platform. 
                Join us in revolutionizing decentralized finance (DeFi) and shaping the next era of crypto crowdfunding.
            </p>
          </div>

          {/* Navigation Sections */}
          <div className="grid grid-cols-1 gap-8 lg:col-span-1 sm:grid-cols-2 lg:grid-cols-1">

            {/* Helpful Links Section */}
            <div className='text-center mt-2'>
              <p className="font-medium text-[#efeff6b7]"> Useful Links </p>
              <nav className="flex flex-col mt-4 space-y-3 text-sm text-white">
                
                <a className="hover:opacity-75" href="/">
                  Home
                </a>
                <ScrollLink
                  to="container3"
                  spy={true}
                  smooth={true}
                  offset={20} // Adjust this offset based on your layout
                  duration={500}
                  onClick={() => handleNavigation('#container3')}
                  className="hover:opacity-75"
                >
                  How it Works
                </ScrollLink>
                <ScrollLink
                  to="ContactUs"
                  spy={true}
                  smooth={true}
                  offset={100} // Adjust this offset based on your layout
                  duration={500}
                  onClick={() => handleNavigation('#container3')}
                  className="hover:opacity-75"
                >
                  Contact Us
                </ScrollLink>
              </nav>
            </div>

          </div>
        </div>

        {/* Copyright Section */}
        <p className="mt-7 text-sm text-white font-light">© 2023 CryptoCrowdFund</p>
      </div>
    </footer>
  );
};

export default Footer;
