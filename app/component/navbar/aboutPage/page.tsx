import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar1 from "../Navbar1";

import JaboutUs from "@/Admin/Pages/2.aboutUs.json";

import { HiMiniInformationCircle } from "react-icons/hi2";
import { IoIosEye } from "react-icons/io";
import { TbTargetArrow } from "react-icons/tb";
import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import "@/app/globals.css";
import TeamCard from "./TeamCard";
import Footer1 from "../../footer/Footer1";

function AboutPage() {
  return (
    <main className="">
      <div className="sticky top-0 z-10">
        <Navbar1 />
      </div>
      <div>
        <div className="bg-pink-50 bg-opacity-50 py-12 lg:py-28">
          {/* ----------------------About Section--------------------------------------- */}

          <div>
            <div className="overflow-hidden h-[450px] md:h-[670px] lg:h-[770px] xl:h-[970px]  w-10/12 bg-pink-50  mx-auto max-w-[1440px] rounded-2xl drop-shadow-xl">
              <div className="p-7  text-slate-700 md:p-16 lg:p-20 xl:p-24">
                <div className="flex items-center  gap-3 xl:gap-5">
                  <HiMiniInformationCircle className="text-4xl md:text-5xl lg:text-7xl" />
                  <h3 className="font-black text-lg md:text-2xl lg:text-4xl">
                    {JaboutUs["about us title"]}
                  </h3>
                </div>
                <div className="pt-4 text-justify md:pt-10 ">
                  <p className="text-xs md:text-base xl:text-xl">
                    {JaboutUs["about us content"]}
                  </p>
                </div>
              </div>

              <div className=" relative transform transition duration-500 hover:scale-105 h-48 md:h-96 lg:h-[500px] xl:h-[750px] 2xl:h-[850px] ">
                <Image
                  className="object-top "
                  src={JaboutUs["about us img"]}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          {/* ----------------------Vision and Mission Section--------------------------------------- */}
          <div className="max-w-[1440px] mx-auto">
            <div className="mx-auto w-4/6 mt-12 md:mt-24 ">
              <div className="flex items-center gap-2">
                <IoIosEye className="text-2xl md:text-4xl lg:text-6xl" />
                <h3 className="font-bold text-lg md:text-2xl lg:text-4x">
                  VISION
                </h3>
              </div>
              <div className=" pt-2 text-xs md:text-base md:pt-5 xl:text-xl">
                <p>"{JaboutUs["vision content"]}"</p>
              </div>
            </div>
            <div className="mx-auto w-4/6 mt-12 text-right md:mt-24 md:text-left">
              <div className="flex items-center gap-2 ">
                <TbTargetArrow className="text-2xl ml-auto md:ml-0 md:text-4xl lg:text-6xl" />
                <h3 className="font-bold text-lg md:text-2xl lg:text-4x">
                  MISSION
                </h3>
              </div>
              <div className="  pt-2 text-xs md:text-base md:pt-5 xl:text-xl">
                <p>"{JaboutUs["mission content"]}"</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto w-10/12 ">
          {/* ----------------------About Dr Section--------------------------------------- */}
          <div className="">
            <h1 className="text-slate-800 pt-20 pb-10 text-center text-lg font-bold md:text-2xl md:pt-40 md:pb-28 lg:text-4xl">
              {JaboutUs["ceo title"]}
            </h1>
            <div className=" mx-auto shadow-xl bg-slate-300   lg:flex   rounded-xl  overflow-hidden  xl:h-[700px]  mb-10">
              <div className=" lg:flex lg:w-fit">
                <div className="relative h-[500px] md:h-[900px] lg:h-full lg:w-1/2 xl:w-2/5">
                  <Image
                    src={JaboutUs["ceo image"]}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  ></Image>
                </div>
                <div className="p-7  flex-1  md:p-16 xl:p-24">
                  <div className="pb-5 lg:pb-5">
                    <h1 className=" text-lg font-bold   md:text-xl xl:text-4xl">
                      {JaboutUs["ceo name"]}
                    </h1>
                    <p className="text-xs font-bold text-gray-400 lg:text-xs">
                      {JaboutUs["ceo position"]}
                    </p>
                  </div>
                  <p className="text-xs md:text-base  xl:text-lg">
                    {JaboutUs["ceo content"]}
                  </p>
                  <div className="flex flex-col gap-1 list-none md:gap-3 pt-5 lg:py-10 lg:space-y-0 ">
                    <li>
                      <Link
                        className="text-base flex gap-1 items-center md:text-2xl md:gap-3 transform transition duration-500 hover:scale-105"
                        href={JaboutUs["ceo insta"]}
                      >
                        <FaInstagram />
                        <h3 className="text-xs font-bold md:text-lg">
                          Instagram
                        </h3>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-base flex gap-1 items-center  md:text-2xl md:gap-3 transform transition duration-500 hover:scale-105"
                        href={JaboutUs["ceo facebook"]}
                      >
                        <FaFacebookSquare />
                        <h3 className="text-xs font-bold md:text-lg">
                          Facebook
                        </h3>
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------Everyone Section--------------------------------------- */}
          <div>
            <h1 className="text-slate-800 pt-20 pb-10 text-center text-lg font-bold  md:text-2xl md:pt-40 md:pb-28 lg:text-4xl">
              MEET OUR TEAM
            </h1>
            <div className="justify-center">
              <TeamCard />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer1 />
      </div>
    </main>
  );
}

export default AboutPage;
