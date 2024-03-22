import React from "react";
import { MdMedicalServices } from "react-icons/md";
import ServicesMap from "./ServicesMap";
import { BsArrowUpRightCircle } from "react-icons/bs";

function Services() {
  return (
    <div className="hidden lg:block mx-auto lg:p-10  xl:p-20 2xl:p-32 ">
      <div>
        <div className="mx-auto  text-center text-2xl max-w-[1920px] ">
          <MdMedicalServices className=" text-purple lg:text-4xl xl:text-6xl mx-auto " />

          <h1 className="text-purple  font-black tracking-widest  lg:text-4xl lg:py-5 xl:text-6xl xl:py-10">
            SERVICES
          </h1>
          <p className="text-xs px-10  mx-auto leading-loose lg:text-lg lg:max-w-4xl xl:text-2xl  ">
            Our primary care services focus on preventive care, health
            screenings, and general wellness. We're here to be your first point
            of contact for any health concerns.
          </p>
        </div>
      </div>
      <ServicesMap />
      <div>
        <a href="#">
          <div className="transform transition duration-500 hover:scale-110 hover:shadow-xl flex justify-center gap-2 py-3 px-10  rounded-full my-20 items-center bg-blue-600 text-white w-fit mx-auto lg:my-20 lg:py-5 ">
            <h1 className="text-xs lg:text-2xl">MORE SERVICES ....</h1>
            <BsArrowUpRightCircle className="text-sm lg:text-2xl" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Services;
