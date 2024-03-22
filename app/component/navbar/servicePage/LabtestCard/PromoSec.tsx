import React from "react";
import Image from "next/image";

import { AiOutlineWhatsApp } from "react-icons/ai";

import Jpromo from "@/Admin/Pages/3.services.json";

const treatments = Jpromo.promotion;

function PromoSec() {
  return (
    <main className=" sm:grid grid-cols-2 lg:grid-cols-3 gap-10 ">
      {treatments.map((treatment2) => (
        <div
          key={treatment2.id}
          className="  my-10 md:my-0 bg-blue-100  overflow-hidden rounded-xl  drop-shadow-md  transform transition duration-500 hover:scale-105"
        >
          <div className="  relative ">
            <Image
              className=" "
              src={treatment2.img}
              alt=""
              width={1000}
              height={1000}
              layout="contain"
              objectFit="cover"
            />
          </div>

          <div className="p-5 flex flex-col justify-between h-[400px] lg:h-[450px]  2xl:h-[450px] xl:p-10">
            <div>
              <h2 className="font-bold text-lg  lg:text-xl pb-5">
                {treatment2.name}
              </h2>
              <h3 className="text-xs md:text-base">
                <ul>
                  {treatment2.promoContent.map((list, id) => (
                    <div key={id}>
                      <div>
                        <ul>
                          <li>{list}</li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </ul>
              </h3>
            </div>
            <a href={treatment2.whatsapp}>
              <div className="flex justify-center items-center gap-2 w-full rounded-lg bg-blue-700 hover:bg-blue-500 hover:shadow-md text-white px-3 py-2 mt-5">
                <div className="text-lg">
                  <AiOutlineWhatsApp />
                </div>
                <button className=" text-base">Book Now</button>
              </div>
            </a>
          </div>
        </div>
      ))}
    </main>
  );
}

export default PromoSec;
