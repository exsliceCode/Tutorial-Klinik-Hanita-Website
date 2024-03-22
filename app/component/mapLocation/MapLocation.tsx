import React from "react";

import Jhome from "@/Admin/Pages/1.home.json";

function MapLocation() {
  return (
    <div className="hidden lg:block">
      <div className="   max-w-[1920px] text-center mx-auto ">
        <div className=" text-purple text-2xl  mb-10 ">
          {/* <FaLocationDot className=" text-purple lg:text-4xl xl:text-6xl mx-auto  " /> */}
          <h1 className="text-slate-800 pt-20 pb-10 text-center text-lg font-bold md:text-2xl md:pt-40 md:pb-28 lg:text-4xl">
            {Jhome["location title"]}
          </h1>
        </div>
      </div>
      <iframe
        className=" w-screen h-96"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.721212609644!2d101.70231597605952!3d2.8964712546516833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb7dfd103a019%3A0x7b94b595268e5bae!2sKlinik%20Hanita!5e0!3m2!1sen!2smy!4v1692914840335!5m2!1sen!2smy"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default MapLocation;
