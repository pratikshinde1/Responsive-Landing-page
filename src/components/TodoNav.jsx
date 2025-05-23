 import React from "react";
import {Link } from "react-router-dom";
import Signup from "./Signup";
export const TodoNav = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-8">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
            >
              <rect width="24" height="24" rx="4" fill="#FE5A59" />
              <path
                d="M7 12L10 15L17 8"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xl">do List</span>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="#" className="transition-colors hover:text-gray-600">
            About Us
          </Link>
          <Link to="#" className="transition-colors hover:text-gray-600">
            Features
          </Link>
          <Link to="#" className="transition-colors hover:text-gray-600">
            More Option
          </Link>
          <Link to="#" className="transition-colors hover:text-gray-600">
            Contact
          </Link>
          
        </nav>

        <div className="flex items-center gap-2">
          <button className="h-10 px-4 py-2 border border-gray-200 rounded-md bg-white text-sm font-medium hover:bg-gray-50">
            Log in
          </button>
           <div> 
          <button className="h-10 px-4 py-2 rounded-md bg-[#FE5A59] hover:bg-[#FE5A59]/90 text-white text-sm font-medium"
            onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
            >
            Sign up
          </button>
               <Signup/>
             </div>
          
                 
         </div>
      </div>
    </header>
  );
};
