import { Star, StarHalfIcon } from "lucide-react";
import SectionTitle from "../../../shared/components/SectionTitle";

function Instructor() {
  
  return (
    <div className="py-5">
      <div className="text-secondary text-[25px] font-bold">Instructors</div>

      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-1 ">
          <div className="bg-[#5c91b3] rounded-xl h-[350px] w-[280px] mt-5"></div>
        </div>
        <div className="col-span-2 px-6 py-5">
          <span className="text-[25px]">
            {" "}
            <SectionTitle bluetitle="Ester" orangetitle="Howard" />
          </span>
          <p className="text-[12px] py-1">Marketing Manager</p>
          <p className="text-[20px] font-bold py-2 mt-2">About Me</p>
          <p className="text-[12px]">
            Donec laoreet quam in arcu tempor, ut aliquet diam sagittis. Morbi
            id elit sodales, facilisis enim sollicitudin, pellentesque quam.
            Donec tempor metus felis, nec egestas ligula convallis a. Duis
            rutrum, massa non vehicula sodales.
          </p>

          <div className="grid grid-cols-2 py-5 text-[14px]">
           <div className="col-span-1">
                <div className="py-2">
                    <span className="font-bold">Experience:</span>{"  "}
                    5 years
                </div>
                <div className="py-2">
                    <span className="font-bold">Phone:</span>{"  "}
                    +25 145 545 4562
                </div>
                <div className="py-2">
                    <span className="font-bold">Email:</span>{"  "}
                    Esther@teacher@gmail.com
                </div>
           </div>

           <div className="col-span-1 px-2">
           <div className="py-2">
                    <span className="font-bold">Price/Hour:</span>{"  "}
                    $25.00
                </div>
                <div className="py-2">
                    <span className="font-bold">Social Media:</span>{"  "}
                    +25 145 545 4562
                </div>
                <div className="flex text-primary items-center py-2 gap-3">
                    <span className="font-bold text-black">Ratings:</span>{" "}
                    <div className="flex ">

                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <StarHalfIcon /> 4.5
                    </div>
                </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
