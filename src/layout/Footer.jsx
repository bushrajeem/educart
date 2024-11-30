import React from "react";
import Button from "../shared/components/Button";

function RequestCall() {
  return (
    <div className="bg-[#d9effd]">
      <div className="container px-5 py-5">
        <div className="grid grid-cols-12">
          <div className="col-span-6 relative">
            <img
              className="absolute w-[390px] h-[390px] mt-[130px] ml-[120px] z-10"
              src="/footershape1.svg"
              alt=""
            />

            <img
              className="absolute top-36 right-[100px] h-[110px] w-[110px] z-20"
              src="/footershape2.svg"
              alt=""
            />
            <img
              className="absolute top-[110px] left-6 h-[260px] w-[260px]"
              src="/footershape3.svg"
              alt=""
            />
            <img
              className="w-[200px] h-[200px] absolute top-[400px] left-[72px]"
              src="/aboutshape3.svg"
              alt=""
            />
            <img
              className="absolute -bottom-16 right-10 h-[260px] w-[260px]"
              src="/footershape4.svg"
              alt=""
            />
          </div>

          <div className="col-span-6">
            <h1 className="text-[40px] font-bold text-secondary py-5 mt-14">
              Request A <span className="text-primary">Call Back</span>
            </h1>
            <p className="text-[#434343] text-[14px]">
              Curabitur a porta ligula, eget interdum ipsum. Mauris blandit urna
              in magna rhoncus
              <br /> volutpat. Proin consequat rhoncus dui, ut tincidunt nulla.
            </p>

            <div className="py-6">
              <div className=" flex gap-5">
                <input
                  className="h-[30px] w-[290px] px-8 py-5"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="h-[30px] w-[290px] px-8 py-5"
                  type="text"
                  placeholder="Email ID"
                />
              </div>
              <input
                className="h-[30px] w-[600px] px-8 py-5 mt-3"
                type="text"
                placeholder="Phone Number"
              />
              <input
                className="h-[200px] w-[600px] px-8 py-5 mt-3"
                type="text"
                placeholder="Phone Number"
              />
              <div className="py-6">
                <Button text="Send Request" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Ending() {
  return (
    <div className="bg-secondary relative">
      <div className="container px-5">
        <div className="grid grid-rows-12">
          <div className="row-span-4">
            <div
              className="bg-[#9f8ffa] w-[1020px] h-[120px] p-8 text-white 
              rounded-xl top-20 ml-[110px] mt-[80px]"
            >
              <div className="flex items-center justify-center gap-8">
                <div>
                  <p>Let Help Us</p>
                  <h2 className="text-[25px] font-bold">
                    Finding Your Right Courses
                  </h2>
                </div>
                <Button text="Get Started Now" />
                <p className="text-[40px] font-bold">+180 45874 8789</p>
              </div>
              <img
                className="absolute top-[100px] left-[117px] h-[90px] w-[90px]"
                src="/endshape.svg"
                alt=""
              />
            </div>
            <img
              className="absolute right-[92px] top-[162px] h-[90px] w-[90px]"
              src="/endshape2.svg"
              alt=""
            />
          </div>

          <div className="row-span-8 py-4 mt-14">
            <div className="grid grid-cols-12">
              <div className="col-span-6">
                <h1 className="text-[40px] font-bold text-white ">
                  Edu
                  <span className="text-primary">kart</span>
                </h1>
                <p className="text-[14px] text-white py-3">
                  Integer venenatis consequat elit. Curabitur eget laoreet nibh.
                  Cras <br /> euismod, tellus vitae luctus ultricies, lacus erat
                  sagittis nulla, id ornare <br /> velit ligula congue etiam
                  rhoncus urna.
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <input
                    className="w-[317px] h-[50px] bg-transparent rounded-3xl border-white border-2 px-3"
                    type="text"
                    placeholder="Your mail id here"
                  />
                  <Button text="Send Message" />
                </div>
              </div>
              <div className="col-span-2 text-white text-[16px]">
                <h3 className="text-[22px] text-primary font-bold">
                  Contact Us
                </h3>
                <p className="mt-5">
                  856 Quired Street Vectoria Road, New York
                </p>
                <p className="mt-5">
                  +180 385 2854 <br />
                  +758 6987 478
                </p>
                <p className="mt-5">contact@example.com</p>
              </div>

              <div className="col-span-2 text-white text-[16px]">
                <h3 className="text-[22px] text-primary font-bold">
                  Explore Courses
                </h3>
                <div className="mt-5">
                  <p> Microsoft develop</p>
                  <p className="py-2"> Modern art </p>
                  <p> Managment businesss </p>
                  <p className="py-2"> Art science</p>
                  <p> Games </p>
                </div>
              </div>

              <div className="col-span-2 text-white text-[16px]">
                <h3 className="text-[22px] text-primary font-bold">
                  Use Full Links
                </h3>
                <div className="mt-5">
                  <p> About Us</p>
                  <p className="py-2"> upcoming Events </p>
                  <p> Faq Questions</p>
                  <p className="py-2"> Privacy Policy </p>
                  <p> Gallery </p>
                  <p className="py-2"> Contact us </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white h-[2px] w-full"></div>
        <div className="flex items-center justify-between text-white py-5 text-[14px]">
          <p>Copyright © 2023. All Rights Reserved | WeDesignTech</p>
          <p>FB | TW | YU | IN</p>
        </div>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <>  
        <RequestCall />
        <Ending />
    </>
  );
}

export default Footer;
