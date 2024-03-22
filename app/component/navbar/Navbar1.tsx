"use client";

import Head from "next/head";
import Link from "next/link";
import { use, useState } from "react";
import Image from "next/image";
import Logo from "@/public/Logo.png";

export default function Navbar1() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className=" bg-purple shadow xl:px-10  mx-auto ">
        <div className="max-w-[1440px] justify-between px-4 mx-auto  md:items-center md:flex md:px-8">
          <div>
            <div className=" flex items-center justify-between py-3  md:block ">
              <a href="/">
                <Image
                  src={Logo}
                  alt=""
                  className="w-[66px]  md:w-20 lg:w-28"
                />
              </a>
              <div className="md:hidden">
                <button className="p-2" onClick={() => setNavbar(!navbar)}>
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-6 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0 text-sm lg:text-base xl:text-xl xl:space-x-10 ">
                <li className="text-white  hover:text-yellow-300 ">
                  <Link legacyBehavior href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="text-white  hover:text-yellow-300">
                  <Link legacyBehavior href="/component/navbar/aboutPage">
                    <a>About Us</a>
                  </Link>
                </li>
                <li className="text-white  hover:text-yellow-300">
                  <Link legacyBehavior href="/component/navbar/servicePage">
                    <a>Services</a>
                  </Link>
                </li>
                <li className="text-white  hover:text-yellow-300">
                  <Link legacyBehavior href="/component/navbar/panelsPage">
                    <a>Panels</a>
                  </Link>
                </li>
                <li className="text-white  hover:text-yellow-300">
                  <Link legacyBehavior href="/component/navbar/careerPage">
                    <a>Career</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
