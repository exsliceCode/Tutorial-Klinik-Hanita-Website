import React, { useState } from "react";

// import { Carousel3 } from "./carousel/Carousel3";
import { Carousel4 } from "./carousel/Carousel4";
import Jhome from "@/Admin/Pages/1.home.json"

function Promotion1() {
  return (
    <div className="   max-w-[1440px] mx-auto ">
      <div>
        <div>
          <h1 className="text-slate-800 pt-20 pb-10 text-center text-lg font-bold md:text-2xl md:pt-40 md:pb-28 lg:text-4xl">
            {Jhome["promotion title"]}
          </h1>
        </div>
        <div className=" mx-auto">
          <Carousel4 />
        </div>
      </div>
    </div>
  );
}

export default Promotion1;
