import React from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineWhatsApp } from "react-icons/ai";

import Jhome from "@/Admin/Pages/1.home.json";
import Jservice from "@/Admin/Pages/3.services.json";

const whatsappNumber = Jhome.whatsappNumber;

const treatments = Jservice.treatment;

const treatments1 = [
  {
    id: 1,
    name: " CONSULTATION  ",
    img: "https://img.freepik.com/free-photo/asian-female-physician-consulting-woman-office_1098-20395.jpg?",
    list: (
      <div>
        <li className="list-none">
          <ul>1. Health Screening</ul>
          <ul>2. Acute Illness (URTI, Diarrhea, etc)</ul>
          <ul>3. Chronic Illness (Diabetes, Hypertensions)</ul>
          <ul>4. Emergency (Injury, MVA, etc)</ul>
          <ul>5. Family Planning</ul>
          <ul>6. Antenatal Check-Up</ul>
          <ul>7. Medical Check-Up</ul>
          <ul>8. GDL/PSV Check-Up</ul>
          <ul>9. University Check-Up</ul>
          <ul>10. Pre-FOMEMA Check-Up</ul>
          <ul>11. Pre-Employment Check-Up</ul>
          <ul>12. Hajj Medical Check-Up</ul>
          <ul>13. Medication</ul>
        </li>
      </div>
    ),
    whatsapp:
      "https://wa.me/" +
      whatsappNumber +
      "?text=Hi, could you provide more information.",
  },
  // {
  //   id: 2,
  //   name: " Lab Investigation   ",
  //   img: "https://img.freepik.com/free-photo/young-doctor-is-holding-hypodermic-syringe-with-vaccine-vial-rubber-gloves-gray-wall_1150-21803.jpg?",
  //   list: (
  //     <div>
  //       <li className="list-none">
  //         <ul>1. Blood Test</ul>
  //         <ul>- Promo A</ul>
  //         <ul>- Promo B</ul>
  //         <ul>- Promo Cancer (Women & Men)</ul>
  //         <ul>- Thyroid Screening</ul>
  //         <ul>- Thyroid Autoimmune Special</ul>
  //         <ul>- Renal Profile</ul>
  //         <ul>- Thalassemia Screening</ul>
  //         <ul>- Arthritis Studies</ul>
  //         <ul>- Coronary Risk Studies</ul>
  //         <ul>- Diabetes Studies</ul>
  //         <ul>- Antenatal Screen 4KB & HIV</ul>
  //         <ul>- Menstrual Cycle Studies</ul>
  //         <ul>- MGTT</ul>
  //         <ul>2. Influenza, Covid 19, RSV</ul>
  //       </li>
  //     </div>
  //   ),
  //   whatsapp:
  //     "https://wa.me/" +
  //     whatsappNumber +
  //     "?text=Hi Im interested in the Lab Investigation.",
  // },
  {
    id: 3,
    name: "Procedure",
    img: "https://img.freepik.com/free-photo/coronavirus-blood-samples-assortment-lab_23-2149107255.jpg?",
    list: (
      <div>
        <li className="list-none">
          <ul>1. Pap Smear</ul>
          <ul>2. Would Dressing</ul>
          <ul>3. STO</ul>
          <ul>4. Small Surgery</ul>
          <ul>5. Diabetic Foot Dressing</ul>
          <ul>6. ECG</ul>
          <ul>7. Nebuliser / Oxygen</ul>
          <ul>8. X-Ray</ul>
          <ul>9. Ultrasound</ul>
          <ul>10. Ear Syringe</ul>
        </li>
      </div>
    ),
    whatsapp:
      "https://wa.me/" +
      whatsappNumber +
      "?text=Hi Im interested in the Diagnostic Tests and Screenings Treatment Category.",
  },
  {
    id: 4,
    name: " immunization",
    img: "https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    list: (
      <div>
        <li className="list-none">
          <ul>1. Meningococcal</ul>
          <ul>2. Influenza</ul>
          <ul>3. Pneumococcal</ul>
          <ul>4. Typhoid</ul>
          <ul>5. Measles</ul>
          <ul>6. MMR</ul>
          <ul>7. DTaP-IPV-Hep B- Hib</ul>
          <ul>8. Hepatitis B</ul>
          <ul>9. Depo Provera</ul>
          <ul>10. Hajj and Umrah Vaccination</ul>
        </li>
      </div>
    ),
    whatsapp:
      "https://wa.me/" +
      whatsappNumber +
      "?text=Hi Im interested in the Immunization.",
  },
];

function TreatmentCard() {
  return (
    <main className=" sm:grid grid-cols-2 lg:grid-cols-3 gap-10 ">
      {/* 2xl:grid-cols-4  */}
      {treatments.map((treatment) => (
        <div
          key={treatment.id}
          className="  my-10 md:my-0 bg-gray-100  overflow-auto rounded-xl  drop-shadow-md  transform transition duration-500 hover:scale-105"
        >
          <div className="  relative ">
            <Image
              className=" "
              src={treatment.img}
              alt=""
              width={1000}
              height={1000}
              layout="contain"
              objectFit="cover"
            />
          </div>

          <div className="p-5 flex flex-col justify-between md:h-[500px] lg:h-[650px]   2xl:h-[550px] xl:p-10">
            <div>
              <h2 className="font-bold text-lg uppercase  lg:text-xl pb-5">
                {treatment.name}
              </h2>
              <h3 className="text-xs md:text-base ">
                <ul>
                  {treatment.treatmentcontent.map((list) => (
                    <div key={treatment.id}>
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
            <Link href={treatment.whatsapp}>
              <div className="flex justify-center items-center gap-2 w-full rounded-lg bg-blue-700 hover:bg-blue-500 hover:shadow-md text-white px-3 py-2 mt-5">
                <div className="text-lg">
                  <AiOutlineWhatsApp />
                </div>
                <button className=" text-base ">Book Now</button>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
}

export default TreatmentCard;
