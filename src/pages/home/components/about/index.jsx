import React from "react";
import { ArrowBigLeft, ArrowRight } from "lucide-react";
import AboutCard from "./Aboutcard";

function About() {
    const cardDetails = [
        {
          title: "Browse Courses Expert Contributors",
          icon: "/aboutshape8.svg",
        },
        {
          title: "Purchase Quickly And Securely.",
          icon: "/aboutshape7.svg",
        },
        {
          title: "Start Learning Right Away.",
          icon: "/aboutshape6.svg",
        },
        {
          title: "Purchase Quickly And Securely.",
          icon: "/aboutshape8.svg",
        },
      ];
  return (
    <div className="bg-white py-32 w-full">
      <div className="container px-5">
        <div className=" grid grid-cols-12">
            <div className="col-span-5">
              <div>
                <p className="text-primary">About teacher</p>
                <h2 className="text-secondary text-[40px] font-bold">
                  Meet{" "}
                  <span className="text-primary">
                    Jack Martin Your <br />
                  </span>{" "}
                  Course Teacher
                </h2>
                <p className=" text-[14px] text-gray-600 mt-5">
                  Rrow itself, let it be sorrow let him love it let him pursue
                  it, ishing for its acquisitiendum. Because he will ab hold,
                  uniess but through concer, and also of those who resist. Now a
                  pure snore disturbeded sum dust. He ejjnoyes, in order that
                  somewon, also with a severe one, unless of life.
                </p>
                <button className="bg-secondary h-[50px] w-[190px] rounded-full text-white mt-5 text-sm px-6 flex items-center">
                  About this teacher <ArrowRight />
                </button>

                <div className="mt-[95px]">
                  <h2 className="text-secondary text-[35px] font-bold">
                    10K+ Unique{" "}
                    <span className="text-primary">
                      Online Course <br />
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-span-7">
              <div className=" relative">
                <img
                  className=" absolute size-[340px] ml-32 z-10"
                  src="/aboutshape1.svg"
                  alt=""
                />

                <img
                  className=" size-[250px] absolute top-[220px] left-8"
                  src="/aboutshape2.svg"
                  alt=""
                />

                <img
                  className="size-[220px] absolute top-10 right-5 z-10"
                  src="/aboutshape4.svg"
                  alt=""
                />

                <img
                  className="size-[210px] absolute top-9 right-2"
                  src="/aboutshape3.svg"
                  alt=""
                />

                <div className=" top-[270px] left-[80px] absolute z-20 h-[150px] w-[150px]">
                  <img src="/aboutshape5.svg" alt="" />
                  <img
                    className=" absolute top-11 left-[60px]"
                    src="/playbutton.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
        </div>
          <div className=" flex items-center justify-between ">
              {cardDetails.map((item, i) => (
                  <>
                  <AboutCard details={item} />
                  {i==3?"":
               <span className=" w-[2px] h-[100px] bg-slate-500 "></span>
                  }
               </>
              ))}
          </div>
      </div>
    </div>
  );
}

export default About;
