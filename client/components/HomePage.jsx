import React from "react";
import Image from "next/image";
import { fundraising, bg_home } from '../public/images';


const HomePage = () => {
    return (
      <div className=" relative isolate px-5 pt-0  lg:px-8 ">
      <div className="mx-auto max-w-1xl py-16 px-8 sm:py-30 lg:py-30">
        
        <div className="flex flex-col lg:flex-row items-center">
          <div className="text-left lg:w-2/3">
            
            <div class="bgAnimation" id="bgAnimation">
              
              <svg 
                preserveAspectRatio="none" width="700" height="700"
                viewBox="120 200 950 1323" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0 text-white  ">
                <g filter="url(#filter0_f_14_9)">
                  <path vectorEffect="non-scaling-stroke" d="M150.22 713.44C150.901 457.305 474.158 -124.33 469.114 302.818C464.071 729.966 514.826 255.865 793.028 453.622C1071.23 651.38 779.39 1173.66 534.528 1173.01C289.665 1172.36 149.538 969.574 150.22 713.44Z" fill="#1CB4CC" fill-opacity="0.50"/>
                  <path vectorEffect="non-scaling-stroke" d="M150.72 713.441C150.89 649.492 171.199 565.178 201.514 481.326C231.826 397.481 272.124 314.148 312.234 252.17C332.29 221.179 352.288 195.545 370.954 177.857C389.645 160.146 406.902 150.498 421.485 151.255C435.982 152.008 448.083 163.079 456.415 187.48C464.745 211.874 469.245 249.437 468.614 302.812C467.984 356.207 468.225 395.532 469.674 423.851C471.122 452.143 473.778 469.527 478.02 478.979C480.145 483.716 482.706 486.547 485.796 487.707C488.885 488.867 492.373 488.306 496.238 486.558C500.104 484.809 504.421 481.838 509.218 478.061C513.68 474.547 518.584 470.315 523.951 465.681C524.358 465.33 524.768 464.976 525.18 464.62C548.601 444.411 580.785 417.118 624.451 407.186C668.086 397.26 723.278 404.655 792.738 454.03C931.542 552.697 928.229 732.383 859.47 887.515C825.099 965.061 774.397 1036.41 717.006 1088.32C659.608 1140.24 595.571 1172.67 534.529 1172.51C412.25 1172.18 316.147 1121.39 250.687 1038.72C185.218 956.033 150.379 841.422 150.72 713.441Z" stroke="black"/>
                </g>
                <defs>
                  <filter id="filter0_f_14_9" x="0.217407" y="0.713501" width="1056.07" height="1322.29" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"> 
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_14_9"/>
                  </filter>
                </defs>
            </svg>
            
            </div>
            <h1 className="text-6xl tracking-normal text-white sm:text-6xl font-martian font-extrabold">
            Transforming </h1>
          <h1 class="font-martian font-extrabold tracking-tight mt-1 sm:text-6xl text-6xl [text-wrap:balance] bg-clip-text text-transparent">
            <span class="text-[#FF8600] inline-flex flex-col h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] sm:h[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] overflow-hidden">
              <ul class="block animate-text-slide text-left leading-tight [&_li]:block">
                <li>CrowdFunding</li>
                <li>Education</li>
                <li>Healthcare</li>
                <li>Art</li>
                <li>Technology</li>
                <li aria-hidden="false">CrowdFunding</li>
                </ul>
          </span>
          </h1>
          <h1 className=" text-6xl font-martian font-extrabold text-left mt-1 tracking-tight text-white sm:text-6xl">
            Through Blockchain</h1>
          <h1 className=" text-6xl font-martian font-extrabold tracking-tight mt-2 text-left text-white sm:text-6xl">
            Innovation.</h1>
          <div className="mt-10 flex justify-left px-3">
            <a
              href="#"
              className="rounded-md font-martian font-bold bg-[#1CB4CC] px-6 py-3 text-md  text-[#08080c] shadow-sm hover:bg-[#8B7BCF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-indigo-600"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="lg:w-1/3 lg:order-1 right-0 top-0 lg:mt-0 lg:ml-auto lg:block hidden py-3">
        <svg 
          preserveAspectRatio="none" width="800" height="700" 
          viewBox="0 70 900 1000" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 top-0">
        <g filter="url(#filter0_f_14_11)">
        <path vectorEffect="non-scaling-stroke" d="M853 478.433C853 661.891 553.844 1079.1 557.478 773.149C561.111 467.194 515.087 806.866 255.899 665.752C-3.28806 524.638 266.8 150 494.497 150C722.195 150 853 294.975 853 478.433Z" fill="#6366f1" fillOpacity="0.50"/>
        <path vectorEffect="non-scaling-stroke" d="M852.5 478.433C852.5 524.188 833.839 584.582 805.86 644.693C777.887 704.79 740.628 764.542 703.492 809C684.924 831.23 666.398 849.622 649.09 862.321C631.768 875.031 615.736 881.989 602.139 881.473C588.608 880.96 577.365 873.036 569.589 855.648C561.801 838.232 557.524 811.373 557.978 773.155C558.432 734.909 558.11 706.735 556.692 686.445C555.983 676.299 554.998 668.114 553.697 661.619C552.396 655.13 550.772 650.3 548.768 646.884C546.759 643.459 544.349 641.43 541.484 640.609C538.633 639.791 535.414 640.192 531.828 641.451C524.94 643.868 516.452 649.543 506.153 656.428C505.761 656.69 505.366 656.954 504.969 657.219C483.246 671.735 453.384 691.348 412.789 698.548C372.209 705.745 320.849 700.545 256.139 665.313C191.47 630.105 159.857 580.363 152.311 525.565C144.761 470.742 161.293 410.795 193.051 355.206C224.806 299.622 271.763 248.438 324.995 211.152C378.23 173.863 437.706 150.5 494.497 150.5C608.238 150.5 697.732 186.707 758.788 245.779C819.844 304.852 852.5 386.826 852.5 478.433Z" stroke="black"/>
        </g>
        <defs>
        <filter id="filter0_f_14_11" x="0" y="0" width="1003" height="1032" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_14_11"/>
        </filter>
        </defs>
        </svg>
              <div className="relative isolate bg-white shadow-md  border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                <Image className="rounded-t-lg" src={fundraising} width={450} height={450} alt=""></Image>
                </a>
              <div className="p-5">
            
              <p className="font-nunito text-gray-700 mb-2 dark:text-gray-400 text-justify font-normal ">
              Welcome to CryptoCrowdFund, your gateway to a revolutionary approach to
              project funding. Dive into a world where your contributions drive
              innovation and change across Education, Healthcare, Art, and Technology.
                </p>        
        </div>
      </div>
    </div>
      </div>
      </div>    
      </div>  
    )
  }
  export default HomePage