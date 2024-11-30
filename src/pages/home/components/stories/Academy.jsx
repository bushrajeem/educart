import React from "react";
import SectionTitle from "../../../../shared/components/SectionTitle";

function Academy() {
  return (
    <div className="bg-[#faf5f5]">
      <div className="container px-5">
        <div className="grid grid-cols-12 py-[100px]">
          <div className=" col-span-6">
            <h2 className="text-[30px] text-secondary font-bold">
              Our Academy <span className="text-primary">Started From</span>{" "}
              2005
            </h2>
            <div className=" bg-[#669BBC] w-[550px] h-[585px] absolute mt-10">

            </div>
          </div>
          <div className=" col-span-6">
            <p className="text-[13px]">
              Donec auctor risus nec tellus finibus posuere. Curabitur lacinia,
              dui at malesuada lobortis, turpis quamve <br />
              nenatis nisi, vel lobortis sapien enim id arcu. Nullam accumsan id
              massa id bibendum. Suspendisse pretiu <br />
              urna sit amet lorem viverra imperdiet. Etiam quis varius nibh.
              <br />
              <br />
              Integer hendrerit varius tincidunt. Nulla non libero rhoncus,
              maximus sem vel, feugiat elit. Curabitur vulput <br />
              orci ut ligula accumsan hendrerit. Aliquam suscipit elementum
              ipsum.
            </p>

            <div className="w-[450px] h-[350px]text-center ml-4">
              <div className="grid grid-cols-2 py-[60px] mt-5">
                <div className="col-span-1">
                  <div className="grid grid-rows-2">
                    <div className="row-span-1 ">
                      <p className="text-secondary font-bold text-[40px]">
                        89K
                      </p>
                      <p>Students Enrolled</p>
                    </div>
                    <div className="row-span-1">
                      <p className="text-secondary font-bold text-[40px]">
                        56M
                      </p>
                      <p>Completed Courses</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="row-span-1 ">
                    <p className="text-primary font-bold text-[40px]">76%</p>
                    <p>Registered Instructors</p>
                  </div>
                  <div className="row-span-1">
                    <p className="text-secondary font-bold text-[40px]">
                      100%
                    </p>
                    <p>Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Academy;
