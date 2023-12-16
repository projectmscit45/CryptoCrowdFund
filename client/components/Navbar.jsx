import { Disclosure, Menu, Transition } from '@headlessui/react'
import {  XMarkIcon } from '@heroicons/react/24/outline'
import { logo, menugif } from '../public/images';
import Image from 'next/image';
import { Link as ScrollLink, Element } from 'react-scroll';
import { useRouter } from 'next/router';

const navigation = [
  { name: 'Home', href: '/', current: true},
  { name: 'How it Works', href: '#container3' , current: false },
  { name: 'Explore Projects', href: '/explore', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
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
    <Disclosure as="nav" >
      {({ open }) => (
        <>
          <div className="  bg-[#010000] mx-auto max-w-8xl px-2 lg:px-8">
            <div className=" flex h-16 items-center justify-between">
              <div className=" inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Image src={menugif} className="block h-9 w-9" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center text-white font-martian font-extrabold text-xl">
                  <Image
                    className="h-12 w-12 "
                    src={logo}
                    alt="CryptoCrowdFund"/><a href='/' aria-label='CryptoCrowdFund' >CryptoCrowdFund
                </a>
                </div>
              </div> 
              
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 font-martian font-light sm:static sm:inset-auto sm:ml-8 sm:pr-0">
              <div className="hidden sm:ml sm:block">
                  <div className="flex space-x-2">
                    {navigation.map((item) => (
                                    <div key={item.name}>
                                    {item.href.startsWith('#') ? (
                                      <ScrollLink
                                        to={item.href.substring(1)}
                                        spy={true}
                                        smooth={true}
                                        offset={20} // Adjust this offset based on your layout
                                        duration={500}
                                        onClick={() => handleNavigation(item.href)}
                                        className={classNames(
                                          item.current
                                            ? 'bg-gray-800 text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                          'rounded-md px-3 py-2 font-nunito text-sm font-bold'
                                        )}
                                      >
                                        {item.name}
                                      </ScrollLink>
                                    ) : (
                                      <a
                                        onClick={() => handleNavigation(item.href)}
                                        className={classNames(
                                          item.current
                                            ? ' text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                          'rounded-md px-3 py-2 font-nunito text-sm font-bold'
                                        )}
                                      >
                                        {item.name}
                                      </a>
                                    )}
                                  </div>
                                ))}
                  </div>
                </div>                
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-3 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                {item.href.startsWith('#') ? (
                  <ScrollLink
                    to={item.href.substring(1)}
                    spy={true}
                    smooth={true}
                    offset={20} // Adjust this offset based on your layout
                    duration={500}
                    onClick={() => handleNavigation(item.href)}
                    className={classNames(
                      item.current
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 font-nunito text-sm font-bold'
                    )}
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  >
                     {item.name}                
                </Disclosure.Button>
                )}
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
