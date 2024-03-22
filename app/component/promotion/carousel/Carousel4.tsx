import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import Link from "next/link";
import Image from "next/image";

import Jhome from "@/Admin/Pages/1.home.json";

const slides1 = [
  {
    id: 1,
    title: Jhome.promo1_title,
    img: Jhome.promo1_img,
    info: Jhome.promo1_info,
    whatsapp: Jhome.promo1_whatsapp,
  },
  {
    id: 2,
    title: Jhome.promo2_title,
    img: Jhome.promo2_img,
    info: Jhome.promo2_info,
    whatsapp: Jhome.promo2_whatsapp,
  },
  {
    id: 3,
    title: Jhome.promo3_title,
    img: Jhome.promo3_img,
    info: Jhome.promo3_info,
    whatsapp: Jhome.promo3_whatsapp,
  },
];

export const Carousel4 = () => {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides1.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === slides1.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className="  lg:flex  w-10/12 2xl:w-auto mx-auto drop-shadow-lg bg-white overflow-hidden rounded-2xl">
      <div>
        <div className="overflow-hidden relative mx-auto  ">
          <div className=" flex  ">
            <Image
              src={slides1[curr].img}
              alt=""
              width={1500}
              height={1500}
              sizes="100vw"
              objectFit="cover"
            ></Image>
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-4 ">
            <div
              onClick={prev}
              className=" bg-white/0 h-full items-center flex place-items-cente"
            >
              <button className="p-1 rounded-full shadow-xl bg-white text-blue-500 hover:bg-white text-2xl lg:text-5xl">
                <BsChevronLeft stroke-width="1" />
              </button>
            </div>
            <div
              onClick={next}
              className=" bg-white/0 h-full items-center flex place-items-cente"
            >
              <button className="p-1 rounded-full shadow-xl bg-white text-blue-500 hover:bg-white text-2xl lg:text-5xl">
                <BsChevronRight stroke-width="1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="  w-8/12 text-center mx-auto md:p-10 xl:p-20 lg:w-10/12">
        <div className=" pt-5">
          <div className="flex items-center justify-center gap-2">
            {slides1.map((_: any, id: number) => (
              <div
                key={id}
                className={`
              transition-all w-2 h-2 lg:w-3 lg:h-3 bg-blue-500 rounded-full
              ${curr === id ? "p-1.5 lg:p-2.5" : "bg-opacity-50"}
            `}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="py-5 font-bold text-lg text-center md:text-2xl lg:text-4xl">
            {slides1[curr].title}
          </h3>
        </div>
        <div className=" text-xs md:text-base  xl:text-xl ">
          {slides1[curr].info}
        </div>
        <div className=" py-5 flex flex-col mx-auto w-fit items-center">
          <Link legacyBehavior href={slides1[curr].whatsapp}>
            <button className=" w-fit rounded-full bg-blue-700 hover:bg-blue-500 hover:shadow-md text-white px-5  mt-5 py-3 ">
              <h3 className="text-xs md:text-base xl:text-lg">BOOK NOW</h3>
            </button>
          </Link>
          <Link legacyBehavior href="/component/navbar/servicePage">
            <button className="  px-5  mt-5 py-3 underline ">
              <h3 className=" text-xs md:text-base xl:text-lg">
                MORE PROMOTION
              </h3>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
