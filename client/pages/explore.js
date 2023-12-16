import React from "react";

import { Route, Routes } from "react-router-dom";

const Explore = () => {
    return (
        <div className="relative sm:-8 p-4 bg-[#010000] min-h-screen flex flex-row">
            <div className="sm:flex hidden mr-10 relative text-white">
                Sidebar
            </div>
            <div className="flex-1 text-white max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
                Navbar


            </div>
        </div>
    )
}
export default Explore;