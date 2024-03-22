import React from "react";
import Image from "next/image";

import Jhome from "@/Admin/Pages/1.home.json";

import Link from "next/link";

function Panels1() {
  return (
    <div className=" text-center mx-auto max-w-[1440px] w-10/12 ">
      {/* <MdAdminPanelSettings className="hidden text-purple lg:text-4xl xl:text-6xl mx-auto lg:block " /> */}
      <h1 className="text-slate-800 pt-20 pb-10 text-center text-lg font-bold md:text-2xl md:pt-40 md:pb-28 lg:text-4xl">
        {Jhome["panel title"]}
      </h1>
      <div className=" bg-white drop-shadow-lg  rounded-2xl mx-auto">
        <div className="min-w-xs max-w-2xl  mx-auto px-5 lg:px-10">
          <Image
            className="mx-auto  "
            src={Jhome.panel_img}
            width={1000}
            height={1000}
            alt=""
            sizes=""
          />
        </div>
        <div className="py-10">
          <p className="w-8/12 mx-auto text-xs md:text-base  xl:text-xl py-10 ">
            {Jhome["panel content"]}
          </p>
          {/* <SearchPanels /> */}

          <div className="py-10">
            <Link legacyBehavior href="/component/navbar/panelsPage">
              <button className="  rounded-full bg-blue-700 hover:bg-blue-500 hover:shadow-md text-white px-5   py-3   ">
                <h3 className="text-xs md:text-base xl:text-lg">MORE PANELS</h3>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panels1;
