import React from "react";
import Image from "next/image";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";

import Screening_1 from "@/public/Services/Screening Package/Screening 1.png";
import Screening_2 from "@/public/Services/Screening Package/Screening 2.png";
import Screening_3 from "@/public/Services/Screening Package/Screening 3.png";
import Screening_4 from "@/public/Services/Screening Package/Screening 4.png";
import Screening_5 from "@/public/Services/Screening Package/Screening 5.png";


const whatsappNumber = "60132401055";
const treatments = [
  {
    id: 1,
    name: " Thyroid Screening  ",
    img: Screening_1 ,
    list: "Thyroid Function Tests (FT3, FT4 TSH)",
    whatsapp:
      "https://wa.me/" +
      whatsappNumber +
      "?text=Hi Im interested in conducting Thyroid Screening Package. ",
  },
  {
    id: 2,
    name: " Thyroid Autoimmune Special  ",
    img: Screening_2 ,
    list: "FT3, FT4, TSH, Anti-Thyroid Peroxidase, Anti- Thyroglobulin",
    whatsapp:
      "https://wa.me/" +
      whatsappNumber +
      "?text=Hi Im interested in conducting Thyroid Autoimmune Special Package. ",
  },
  {
    id: 3,
    name: " Renal Profile  ",
    img: Screening_3 ,
    list: "Urea, Creatinine, Calcium, Phosphate, Uric Acid, Sodium, Potassium Chloride, Albumin, eGFR",
    whatsapp:
      "https://wa.me/" +
      whatsappNumber +
      "?text=Hi Im interested in conducting Renal Profile Package. ",
  },
  {
    id: 4,
    name: " Thalassemia Screening  ",
    img: Screening_4 ,
    list: "Ferritin, Hb Analysis",
    whatsapp:
      "https://wa.me/" +
      whatsappNumber +
      "?text=Hi Im interested in conducting Thalassemia Screening Package. ",
  },

  {
    id: 5,
    name: "Antenatal Screen 4KB & HIV ",
    img: Screening_5 ,
    list: "FBC, HBsAg & Ab, RPR (VDRL & Titre), Rubella IgG Ab, HIV I&II Ab",
    whatsapp:
      "https://wa.me/" +
      whatsappNumber +
      "?text=Hi Im interested in conducting Antenatal Screen 4KB & HIV Package. ",
  },
];

function ScreenSec() {
  return (
    <main className=" sm:grid grid-cols-2 lg:grid-cols-3 gap-10 ">
      {treatments.map((treatment3) => (
        <div
          key={treatment3.id}
          className="  my-10 md:my-0 bg-blue-100  overflow-hidden rounded-xl  drop-shadow-md  transform transition duration-500 hover:scale-105"
        >
          <div className="  relative  h-80">
            <Image
              className=" "
              src={treatment3.img}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="p-5 flex flex-col justify-between h-[250px] 2xl:h-[350px] xl:p-10">
            <div>
              <h2 className="font-bold text-lg  lg:text-xl pb-5">
                {treatment3.name}
              </h2>
              <h3 className="text-xs md:text-base">{treatment3.list}</h3>
            </div>
            <a href={treatment3.whatsapp}>
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

export default ScreenSec;
