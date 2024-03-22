import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar1 from "@/app/component/navbar/Navbar1";
import Footer1 from "@/app/component/footer/Footer1";

import { CgWorkAlt } from "react-icons/cg";
import { FiMail } from "react-icons/fi";

import Jcareer from "@/Admin/Pages/5.career.json";

const emailContact = "mailto:" + Jcareer["career email"];

const careers = Jcareer.career_list;

function CareerPage() {
  return (
    <main>
      <div className="sticky top-0 z-10">
        <Navbar1 />
      </div>
      <div className="py-12">
        {/* ----------------------About Section--------------------------------------- */}

        <div>
          <div className="  w-10/12 bg-pink-50  mx-auto max-w-[1440px] rounded-2xl drop-shadow-xl ">
            <div className="p-7  text-slate-700 md:p-16 lg:p-20 xl:p-24">
              <div className="flex items-center  gap-3 xl:gap-5">
                <CgWorkAlt className="text-4xl md:text-5xl lg:text-7xl" />
                <h3 className="font-black text-lg md:text-2xl lg:text-4xl">
                  {Jcareer["career title"]}
                </h3>
              </div>
              <div className="pt-4 text-justify md:pt-10 ">
                <p className="text-xs md:text-base xl:text-xl">
                  {Jcareer["career content1"]}
                  <span className="font-bold">
                    <Link href={emailContact}>{Jcareer["career email"]}.</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* ----------------------Career Section--------------------------------------- */}

          <div id="treatment" className="w-4/5 mx-auto py-10">
            <h1 className="uppercase text-slate-800 pt-20 pb-3 text-center text-lg font-bold md:text-2xl md:pt-40 md:pb-28 lg:text-4xl">
              CAREER
            </h1>
          </div>

          <div className="  w-10/12  mx-auto max-w-[1440px] rounded-2xl drop-shadow-xl ">
            <div className=" sm:grid grid-cols-2  gap-10 ">
              {/* 2xl:grid-cols-4  */}
              {careers.map((career, index) => {
                return (
                  <div
                    key={index}
                    className="  my-10 md:my-0 bg-gray-100  overflow-auto rounded-xl  drop-shadow-md  transform transition duration-500 hover:scale-105"
                  >
                    <div className="relative">
                      <Image
                        className=" "
                        src={career.img}
                        width={1000}
                        height={1000}
                        alt=""
                        layout="contain"
                        objectFit="cover"
                      />
                    </div>

                    <div className="p-5 flex flex-col justify-between  xl:p-10">
                      <div>
                        <h2 className="font-bold text-lg uppercase  lg:text-xl pb-5">
                          {career.title}
                        </h2>
                        <h3 className="text-xs md:text-base ">
                          {career.jobScope.map((list) => (
                            <div key={index}>
                              <div className="font-bold">{list.jobTitle1}</div>
                              <br />
                              <div>
                                <ul>
                                  {list.jobContent.map((content) => (
                                    <li key={index}>{content}</li>
                                  ))}
                                </ul>
                              </div>
                              <br />
                            </div>
                          ))}
                        </h3>
                      </div>
                      <Link legacyBehavior href={emailContact}>
                        <div className="flex justify-center items-center gap-2 w-full rounded-lg bg-blue-700 hover:bg-blue-500 hover:shadow-md text-white px-3 py-2 mt-5">
                          <div className="text-lg">
                            <FiMail />
                          </div>
                          <button className=" text-base ">Email Us Now</button>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
    </main>
  );
}

export default CareerPage;
