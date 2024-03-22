import React from "react";
import Image from "next/image";

import { MdAdminPanelSettings } from "react-icons/md";

import Navbar1 from "../Navbar1";
import Footer1 from "../../footer/Footer1";
import Jpanels from "@/Admin/Pages/4.panels.json";

const PanelsList = Jpanels["panel list"];

function PanelsPage() {
  return (
    <main>
      <div className="sticky top-0 z-10">
        <Navbar1 />
      </div>
      <div className="mt-10 overflow-hidden  w-10/12 bg-pink-50  mx-auto max-w-[1440px] rounded-2xl drop-shadow-xl">
        <div className="p-7  text-slate-700 md:p-16 lg:p-20 xl:p-24">
          <div className="flex items-center  gap-3 xl:gap-5">
            <MdAdminPanelSettings className="text-4xl md:text-5xl lg:text-7xl" />
            <h3 className="font-black text-lg md:text-2xl lg:text-4xl">
              PANELS
            </h3>
          </div>
          <div className="pt-4 text-justify md:pt-10 ">
            <p className="text-xs md:text-base xl:text-xl">
              {Jpanels["panel content"]}
            </p>
          </div>
        </div>
      </div>
      <div className="w-4/5 mx-auto py-20 max-w-[1440px]">
        <div className=" grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5 lg:gap-10">
          {PanelsList.map((panel) => (
            <div
              key={panel.id}
              className="   p-2 bg-white overflow-hidden rounded-xl  drop-shadow-md  transform transition duration-500 hover:scale-105"
            >
              <div className="  relative h-40 lg:h-48  ">
                <Image
                  src={panel.img}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="p-5 flex flex-col justify-between text-center">
                <h2 className="font-bold text-xs  lg:text-base xl:text-lg  ">
                  {panel.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer1 />
    </main>
  );
}

export default PanelsPage;
