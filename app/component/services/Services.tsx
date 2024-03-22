import React from "react";
import Image from "next/image";
import Link from "next/link";

import Jhome from "@/Admin/Pages/1.home.json";

function Services() {
  return (
    <main className="max-w-[1440px] mx-auto w-10/12">
      <div className="">
        <h1 className="text-slate-800 pt-20 pb-10 text-center text-lg font-bold md:text-2xl md:pt-40 md:pb-28 lg:text-4xl">
          {Jhome["service title"]}
        </h1>
      </div>
      <div className=" mx-auto overflow-hidden rounded-2xl drop-shadow-lg  bg-white ">
        <div>
          {/* ----------------------Image Section--------------------------------------- */}
          <div className=" flex flex-col  md:flex-row md:h-[400px] xl:h-[600px]">
            <div className="relative h-[200px] md:h-auto md:w-1/3 ">
              <Image
                src={Jhome.service_img1}
                alt=""
                layout="fill"
                objectFit="cover"
              />
              <h3 className="absolute bottom-0 right-0 p-3 text-white text-xs">
                {Jhome.service_text1}
              </h3>
            </div>
            <div className="relative h-[200px] md:h-auto md:w-1/3 ">
              <Image
                src={Jhome.service_img2}
                alt=""
                layout="fill"
                objectFit="cover"
                className="scale-x-[-1]"
              />
              <h3 className="absolute bottom-0 right-0 p-3 text-white text-xs">
                {Jhome.service_text2}
              </h3>
            </div>
            <div className="relative h-[200px] md:h-auto md:w-1/3 ">
              <Image
                src={Jhome.service_img3}
                alt=""
                layout="fill"
                objectFit="cover"
              />
              <h3 className="absolute bottom-0 right-0 p-3 text-white text-xs">
                {Jhome.service_text3}
              </h3>
            </div>
          </div>
          {/* ----------------------Info Section--------------------------------------- */}
          <div className="text-center w-8/12 mx-auto  py-10">
            <h3 className="font-bold text-lg text-center md:text-2xl lg:text-4xl">
              {Jhome["service topic"]}
            </h3>
            <p className=" text-xs md:text-base  xl:text-xl py-10 ">
              {Jhome["service content"]}
            </p>
            <div className="py-10">
              <Link legacyBehavior href="/component/navbar/servicePage">
                <button className="  rounded-full bg-blue-700 hover:bg-blue-500 hover:shadow-md text-white px-5  py-3  ">
                  <h3 className="text-xs md:text-base xl:text-lg">
                    MORE SERVICES
                  </h3>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Services;
