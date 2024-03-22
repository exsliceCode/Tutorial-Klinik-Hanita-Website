import React from "react";
import Image from "next/image";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";

import Medical_1 from "@/public/Services/Medical Package/Medical 1.png";
import Medical_2 from "@/public/Services/Medical Package/Medical 2.png";
import Medical_3 from "@/public/Services/Medical Package/Medical 3.png";
import Medical_4 from "@/public/Services/Medical Package/Medical 4.png";
import Medical_5 from "@/public/Services/Medical Package/Medical 5.png";

const whatsappNumber = "60132401055";

const treatments = [
  {
    id: 8,
    name: " Arthritis Studies ",
    img: Medical_1 ,
    list: "ESR, FBC, Uric Acid, LE Cells Test, RA Factor, ASOT Titre, ANA (SLE), C Reactive Protein (hs-CRP)",
    whatsapp:
      "https://wa.me/" +
      whatsappNumber +
      "?text=Hi Im interested to conduct the Arthritis Studies Package ",
  },
  {
    id: 9,
    name: " Coronary Risk Studies ",
    img: Medical_2 ,
    list: "Lipid Profile, Total Cholesterol, HDL, LDL, TG, Ratio Total/HDL",
    whatsapp:
      "https://wa.me/" +
      whatsappNumber +
      "?text=Hi Im interested to conduct the Coronary Risk Studies Package ",
  },
  {
    id: 10,
    name: " Diabetes Studies ",
    img: Medical_3 ,
    list: "Glucose, HbA1C",
    whatsapp:
      "https://wa.me/" +
      whatsappNumber +
      "?text=Hi Im interested to conduct the Diabetes Studies Package ",
  },

  {
    id: 11,
    name: "Menstrual Cycle Studies ",
    img: Medical_4,
    list: "FSH, LH, Estradiol, Progesterone",
    whatsapp:
      "https://wa.me/" +
      whatsappNumber +
      "?text=Hi Im interested to conduct the Menstrual Cycle Studies Package ",
  },
  {
    id: 12,
    name: "MGTT ",
    img: Medical_5,
    list: "Modified Glucose Tolerance Test: FBS, 2HR Post Prandial",
    whatsapp:
      "https://wa.me/" +
      whatsappNumber +
      "?text=Hi Im interested to conduct the MGTT Package ",
  },
];

function StudiesSec() {
  return (
    <main className=" sm:grid grid-cols-2 lg:grid-cols-3  gap-10 ">
      {treatments.map((treatment4) => (
        <div
          key={treatment4.id}
          className="  my-10 md:my-0 bg-blue-100  overflow-hidden rounded-xl  drop-shadow-md  transform transition duration-500 hover:scale-105"
        >
          <div className="  relative  h-80">
            <Image
              className=" "
              src={treatment4.img}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="p-5 flex flex-col justify-between h-[250px] 2xl:h-[350px] xl:p-10">
            <div>
              <h2 className="font-bold text-lg  lg:text-xl pb-5">
                {treatment4.name}
              </h2>
              <h3 className="text-xs md:text-base">{treatment4.list}</h3>
            </div>
            <a href={treatment4.whatsapp}>
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

export default StudiesSec;
