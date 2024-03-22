import Image from "next/image";

import JaboutUs from "@/Admin/Pages/2.aboutUs.json";

const teams = JaboutUs["team card"];

function TeamCard() {
  return (
    <main className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 drop-shadow">
      {teams.map((team) => (
        <div key={team.id} className="overflow-hidden relative  rounded-xl ">
          <Image
            className="scale-[170%] transform transition duration-500 hover:scale-[200%]"
            src={team.img}
            width={500}
            height={500}
            alt=""
          />

          <div className="absolute bottom-0 p-3 w-full text-white md:p-5 ">
            <h2 className="text-xs font-bold md:text-base">{team.name}</h2>
            <h3 className="text-xxs md:text-xs">{team.position}</h3>
          </div>
        </div>
      ))}
    </main>
  );
}

export default TeamCard;
