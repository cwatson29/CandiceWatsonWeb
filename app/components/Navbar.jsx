"use client";
import React, { useState } from "react";
import { Whisper } from "next/font/google";
import Home, { goToSection } from "../page";

const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="navbar" className="relative border-gray-200 bg-transparent">
      <div className="bg-white flex items-center px-4 py-2">
        <div className="justify-self-start text-lg font-cursive text-gray-800 ml-4 my-3">
          <div className={`${whisper.className} text-4xl`}>Candice Watson</div>
        </div>
        <div className="sm:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className=" justify-self-end text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden ml-auto justify-self-end sm:block">
          <ul className="flex">
            <li className="ml-4 hidden hover:shadow-[rgba(0,0,0,1)_0px_5px_6px_-5px] hover:shadow-sky-500/50">
              <a href="#" onClick={() => goToSection("interests")}>
                Interests
              </a>
            </li>
            <li className="ml-4 hover:shadow-[rgba(0,0,0,1)_0px_5px_6px_-5px] hover:shadow-sky-500/50">
              <a href="#" onClick={() => goToSection("contact")}>
                Contact
              </a>
            </li>
            <li className="ml-4 hover:shadow-[rgba(0,0,0,1)_0px_5px_6px_-5px] hover:shadow-sky-500/50">
              <a href="#" onClick={() => goToSection("projects")}>
                Projects
              </a>
            </li>
            <li className="ml-4 hover:shadow-[rgba(0,0,0,1)_0px_5px_6px_-5px] hover:shadow-sky-500/50">
              <a href="#" onClick={() => goToSection("resume")}>
                Resume
              </a>
            </li>
            <li className="ml-4 hover:shadow-[rgba(0,0,0,1)_0px_5px_6px_-5px] hover:shadow-sky-500/50">
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay menu for mobile */}
      {isOpen && (
        <div
          id="overlay-menu"
          className="bg-white ml-auto mr-0 flex w-40 h-screen justify-end sm:hidden op"
        >
          <div className="overlay-menu-inner mr-4">
            <nav>
              <ul>
                <li className="my-4 hidden text-center hover:shadow-[rgba(0,0,0,1)_0px_5px_4px_-5px] hover:shadow-sky-500/50">
                  <a href="#" onClick={() => goToSection("interests")}>
                    Interests
                  </a>
                </li>
                <li className="my-4 text-center hover:shadow-[rgba(0,0,0,1)_0px_5px_4px_-5px] hover:shadow-sky-500/50">
                  <a href="#" onClick={() => goToSection("contact")}>
                    Contact
                  </a>
                </li>
                <li className="my-4 text-center hover:shadow-[rgba(0,0,0,1)_0px_5px_4px_-5px] hover:shadow-sky-500/50">
                  <a href="#" onClick={() => goToSection("projects")}>
                    Projects
                  </a>
                </li>
                <li className="my-4 text-center hover:shadow-[rgba(0,0,0,1)_0px_5px_4px_-5px] hover:shadow-sky-500/50">
                  <a href="#" onClick={() => goToSection("resume")}>
                    Resume
                  </a>
                </li>
                <li className="my-4 text-center hover:shadow-[rgba(0,0,0,1)_0px_5px_4px_-5px] hover:shadow-sky-500/50">
                  <a href="/">Home</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
