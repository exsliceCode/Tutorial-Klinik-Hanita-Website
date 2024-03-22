"use client";
import React from "react";
import Image from "next/image";
import Navbar1 from "../Navbar1";
import TreatmentCard from "./Treatment/TreatmentCard";

import PromoSec from "./LabtestCard/PromoSec";
import ScreenSec from "./LabtestCard/ScreenSec";
import StudiesSec from "./LabtestCard/StudiesSec";

import Dropdown from "rsuite/Dropdown";
import { NextPage } from "next";
import Link from "next/link";
import { Footer } from "rsuite";
import Footer1 from "../../footer/Footer1";

import { FaHandHoldingMedical } from "react-icons/fa";

import Jservice from "@/Admin/Pages/3.services.json";

function ServicePage() {
  return (
    <main>
      <div className="sticky top-0 z-10">
        <Navbar1 />
        <div className="bg-white text-slate-700 flex justify-around sticky top-16 z-10  text-center py-5  shadow-lg text-xs lg:text-xl">
          <button className=" transform transition duration-500 hover:scale-110 ">
            <Link rel="stylesheet" href="#treatment">
              TREATMENT
            </Link>
          </button>

          <div>
            <Dropdown
              title="LAB INVESTIGATION"
              className="relative transform transition duration-500 hover:scale-110"
            >
              <div className="absolute right-0  top-full min-w-full w-max bg-white shadow-md mt-10 rounded-xl">
                <Link rel="stylesheet" href="#promo">
                  <Dropdown.Item className="px-10 py-5 hover:bg-gray-100 hover:rounded-xl">
                    Promo-Package
                  </Dropdown.Item>
                </Link>
                <Link rel="stylesheet" href="#screening">
                  <Dropdown.Item className="px-10 py-5 hover:bg-gray-100 hover:rounded-xl">
                    Screening and Diagnostic Tests
                  </Dropdown.Item>
                </Link>
                <Link rel="stylesheet" href="#studies">
                  <Dropdown.Item className="px-10 py-5 hover:bg-gray-100 hover:rounded-xl">
                    Medical Studies and Evaluations
                  </Dropdown.Item>
                </Link>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>

      {/* ----------------------Header Section--------------------------------------- */}
      <div className="mt-10">
        <div>
          <div className="overflow-hidden  w-10/12 bg-pink-50  mx-auto max-w-[1440px] rounded-2xl drop-shadow-xl">
            <div className="p-7  text-slate-700 md:p-16 lg:p-20 xl:p-24">
              <div className="flex items-center  gap-3 xl:gap-5">
                <FaHandHoldingMedical className="text-4xl md:text-5xl lg:text-7xl" />
                <h3 className="font-black text-lg md:text-2xl lg:text-4xl">
                  {Jservice["service title"]}
                </h3>
              </div>
              <div className="pt-4 text-justify md:pt-10 ">
                <p className="text-xs md:text-base xl:text-xl">
                  {Jservice["service content"]}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1920px] mx-auto ">
          {/* ----------------------Treatment and lab Section--------------------------------------- */}
          <div id="treatment" className="w-4/5 mx-auto py-10">
            <h1 className="uppercase text-slate-800 pt-20 pb-3 text-center text-lg font-bold md:text-2xl md:pt-40 md:pb-28 lg:text-4xl">
              {Jservice["treatment title"]}
            </h1>
            <TreatmentCard />
          </div>

          <div id="promo" className="w-4/5 mx-auto py-10">
            <h1 className="uppercase text-slate-800 pt-20 pb-3 text-center text-lg font-bold md:text-2xl md:pt-40 md:pb-28 lg:text-4xl">
              {Jservice["promotion title"]}
            </h1>
            <PromoSec />
          </div>
          <div id="screening" className="w-4/5 mx-auto py-10">
            <h1 className="uppercase text-slate-800 pt-20 pb-3 text-center text-lg font-bold md:text-2xl md:pt-40 md:pb-28 lg:text-4xl">
              Screening and Diagnostic Tests
            </h1>
            <ScreenSec />
          </div>
          <div id="studies" className="w-4/5 mx-auto py-10">
            <h1 className="uppercase text-slate-800 pt-20 pb-3 text-center text-lg font-bold md:text-2xl md:pt-40 md:pb-28 lg:text-4xl">
              Medical Studies and Evaluations
            </h1>
            <StudiesSec />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer1 />
      </div>
    </main>
  );
}

export default ServicePage;
