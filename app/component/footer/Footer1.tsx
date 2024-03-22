"use client";

import "@/app/globals.css";
import React from "react";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaTiktok } from "react-icons/fa";
import { BsArrowUpRightCircle } from "react-icons/bs";

import Jfooter from "@/Admin/Footer/footer.json";

function Footer1() {
  return (
    <footer className="mt-40 bg-purple">
      <div className="max-w-[1440px] mx-auto text-white md:py-10 ">
        <div className="  space-y-3 w-3/4 p-10 md:mx-auto md:text-center md:w-1/2 md:space-y-5 xl:w-1/4 xl:space-y-10">
          <h1 className="text-base font-bold  md:text-xl xl:text-3xl">
            Location
          </h1>
          <ul className="text-xs ">
            <div className="hover:cursor-pointer">
              <Link legacyBehavior href={Jfooter.link1}>
                <li className="pb-3 flex gap-4 md:block md:text-xs md:pb-7 xl:text-lg xl:pb-12 items-center">
                  <BsArrowUpRightCircle className="text-6xl md:hidden" />
                  <p>{Jfooter.location1}</p>
                </li>
              </Link>
            </div>
            <div className="hover:cursor-pointer">
              <Link legacyBehavior href={Jfooter.link2}>
                <li className="pb-3 flex gap-4 md:block md:text-xs md:pb-7 xl:text-lg xl:pb-12 items-center">
                  <BsArrowUpRightCircle className="text-6xl md:hidden" />
                  <p>{Jfooter.location2}</p>
                </li>
              </Link>
            </div>
          </ul>
          <h1 className="text-base font-bold  md:text-xl xl:text-3xl ">
            Contact
          </h1>
          <ul className="pb-3 text-xs md:text-xs md:pb-7 xl:text-lg">
            <li>Email : {Jfooter.email}</li>
            <li>Phone : {Jfooter.phone} </li>
            <li>Whatsapp : {Jfooter.whatsapp} </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xxs text-center  md:text-xs  xl:text-lg">
            Follow Us On
          </h3>
          <div className="flex gap-2 py-5 text-2xl justify-center md:text-4xl xl:text-6xl md:py-10 md:gap-5">
            <Link legacyBehavior href={Jfooter.facebook_link}>
              <FaFacebookSquare />
            </Link>
            <Link legacyBehavior href={Jfooter.ticktok_link}>
              <FaTiktok />
            </Link>

            <Link legacyBehavior href={Jfooter.instagram_link}>
              <FaInstagram />
            </Link>
          </div>
          <p className="text-xxs text-center w-1/2 md:text-xs  xl:text-lg  lg:w-1/4 mx-auto pb-16">
            {Jfooter.copy_right}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer1;
