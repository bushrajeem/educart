import {
  PlayCircleIcon,
  StarIcon
} from "lucide-react";
import { Link } from "react-router-dom";


function Coursescard({ details }) {
 

  return (
    <div className="py-8 px-5 w-[280px] h-[530px] gap-5 ml-5 rounded-lg shadow-md bg-gradient-to-r hover:from-blue-300 hover:to-orange-100 hover:shadow-xl">
      <img src={details.image ?? ""} alt="" />
      <div className="flex gap-2 text-[14px] py-3">
        {details.rating ?? ""}
        <span className="text-[10px] text-primary flex">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </span>
        {details.hour ?? ""}
      </div>

     <Link to={`/course-Details/${details.id ?? "nai"}`}>
      <span className="text-[16px] text-secondary font-bold hover:text-black">
        {details.title}
      </span>
     </Link>


      <div className="flex gap-3 font-thin text-gray-500 text-[14px] py-3">
        <PlayCircleIcon />
        {details?.video ?? ""}
        <span>{details.lesson ?? ""}</span>
      </div>
      <div className=" h-[2px] w-full bg-slate-500 mt-5"></div>
      <div className="flex text-[28px] font-bold items-center justify-between">
        <div className="flex items-center gap-2 justify-center text-[11px] font-light">
          <div className="mt-5 bg-[#669BBC] h-[50px] w-[50px] rounded-full"></div>
          {details.name ?? ""}
        </div>
        <span className=" hover:text-primary">{details.price ?? ""}</span>
      </div>
    </div>
  );
}

export default Coursescard;
