"use client";

import "@/app/globals.css";
import { Inter } from "@next/font/google";
import Head from "next/head";


import Navbar1 from "@/app/component/navbar/Navbar1";
import Promotion1 from "./component/promotion/Promotion1";
import Panels1 from "./component/panel/Panels1";
import Services from "./component/services/Services";
import MapLocation from "./component/mapLocation/MapLocation";
import Hero2 from "./component/hero/Hero2";
import Footer1 from "./component/footer/Footer1";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={inter.className}>
      {/* ----------------------Header Section--------------------------------------- */}

      <Head>
        <title>KlinikHanita</title>
        <meta name="description" content="Website Klinik Hanita" />
      </Head>

      {/* ----------------------Navbar Section--------------------------------------- */}

      <div className="sticky top-0 z-10 drop-shadow-lg">
        <Navbar1 />
      </div>

      {/* ----------------------Hero Section--------------------------------------- */}

      <Hero2 />

      {/* ----------------------Promotion Section--------------------------------------- */}

      <Promotion1 />

      {/* ----------------------Services Section--------------------------------------- */}

      <Services />

      {/* ----------------------Panels Section--------------------------------------- */}

      <Panels1 />

      {/* ----------------------Map Location Section--------------------------------------- */}

      <MapLocation />

      {/* ----------------------Footer Section--------------------------------------- */}
      <div className="lg:-mt-40">
        <Footer1 />
      </div>
    </main>
  );
}
