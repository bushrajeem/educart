// import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import {
  ArrowBigDown,
  Clock,
  Clock1,
  Clock11,
  FileText,
  GraduationCap,
  IdCard,
  Info,
  Newspaper,
  PlayCircleIcon,
  Search,
  StarHalf,
  StarIcon,
  User,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { coursesDetails } from "../../home/components/courses";

import "./course.css";
import Layout from "../../../layout";

// const AccordionItem = ({ header, ...rest }) => (
//   <Item
//     {...rest}
//     header={
//       <>
//         {header}
//         <ArrowBigDown />
//       </>
//     }
//   />
// );
function CourseDetails() {
  const param = useParams();
  console.log(param.id);

  const [details, setDetails] = useState({});

  useEffect(() => {
    let details = coursesDetails.find(
      (course) => course.id === parseInt(param.id)
    );
    setDetails(details);
  });

  return (
    <Layout>
      <div className="bg-gradient-to-r from-secondary/15 to-primary/10 w-full relative h-[210px]">
        <div className=" container px-5">
          <div className="py-[30px] px-[35px]">
            <h1 className="text-[45px] font-bold text-secondary py-2">
              Courses Details
            </h1>
            <div className="flex items-center font-medium gap-5">
              <div>Home</div>
              <div className="h-[15px] w-[2px] bg-black"></div>
              <div className=" text-primary">Courses Detail</div>
            </div>
          </div>

          <img
            className="h-[160px] w-[160px] absolute right-[280px] top-10 z-10"
            src="/shape1.svg"
            alt=""
          />

          <img
            className="absolute h-[190px] w-[190px] right-[160px] top-10"
            src="/shape3.svg"
            alt=""
          />
        </div>
      </div>

      <div className="container px-5">
        <div className=" bg-[#669BBC] h-[320px] w-[1150px] py-5 rounded-xl mt-20 ml-8"></div>
        <div className="flex justify-between  py-5">
          <h1 className="text-[30px] font-bold text-secondary">
            {details.title}
          </h1>
          <div className="text-primary flex">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon /> <StarHalf /> {details.rating}
          </div>
        </div>
        <p className="text-[12px]">
          Vivamus varius, mi vitae tincidunt faucibus, nunc risus fermentum
          diam, vitae luctus dui dui in lorem. Duis condimentum neque eu
          faucibus ultricies. <br /> Mauris hendrerit quis mauris id lacinia.
          Vestibulum eros diam, lacinia ac euismod a, faucibus at tellus Fusce.
        </p>

        <div className="flex justify-between py-6">
          <div className="flex justify-center items-center gap-5">
            <PlayCircleIcon /> {details.video}
            <div className="h-[15px] w-[2px] bg-black"></div>
            <Clock /> {details.hour}
            <div className="h-[15px] w-[2px] bg-black"></div>
            <FileText /> {details.lesson}
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className=" border-2 border-gray-500 rounded-3xl h-[40px] w-[80px] text-center py-2">
              {details.price}
            </div>
            <div className="bg-primary text-white rounded-3xl h-[40px] w-[150px] text-center py-2">
              Sales Marketing
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-primary"></div>
        <div className="py-10 flex gap-6 items-center text-secondary font-bold">
          <div className="text-primary flex gap-2">
            <User />
            Cirriculum
          </div>
          <div className="flex gap-2">
            {" "}
            <Info /> About us
          </div>
          <div className="flex gap-2">
            {" "}
            <GraduationCap />
            Members
          </div>
          <div className="flex gap-2">
            <IdCard />
            Instructors
          </div>
          <div className="flex gap-2">
            <Newspaper />
            News
          </div>
          <div className="flex gap-2">
            <Search />
            Reviews
          </div>
        </div>

        <div className=" grid grid-cols-3">
          <div className="col-span-2">
            <div className="bg-secondary rounded-xl h-[200px] w-fit">
              <div className="grid grid-cols-2">
                <div className="col-span-1 text-white py-6 px-8">
                  <h1 className="text-[17px] font-bold">Basics</h1>

                  <div className="flex items-center gap-2 text-[13px] mt-3">
                    <GraduationCap />
                    Course Qualification:
                    <span className="font-bold">Master Degree</span>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] mt-3">
                    <Clock11 />
                    Entry Score:
                    <span className="font-bold">7.8</span>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] mt-3">
                    <Clock1 />
                    Duration:
                    <span className="font-bold">3 Semester</span>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="bg-[#669BBC] rounded-full h-[160px] w-[376px] mt-5 mr-5"></div>
                </div>
              </div>
            </div>

            <p className="text-[12px] py-5">
              Mauris finibus eleifend ante quis scelerisque. Nunc rutrum eget
              dui quis pulvinar. Curabitur et tincidunt lectus, gravida
              elementum ligula. Duis vehicula, lectus ut ultrices rutrum, ante
              erat malesuada orci, tincidunt condimentum turpis ipsum eu orci.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Pellentesque dictum est in risus congue
              dictum.
            </p>

            {/* <Accordion transition transitionTimeout={250}>
              <AccordionItem header="What is Lorem Ipsum?" initialEntered>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionItem>

              <AccordionItem header="Where does it come from?">
                Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
                vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
                vitae.
              </AccordionItem>

              <AccordionItem header="Why do we use it?">
                Suspendisse massa risus, pretium id interdum in, dictum sit amet
                ante. Fusce vulputate purus sed tempus feugiat.
              </AccordionItem>
            </Accordion> */}
          </div>

          <div className="col-span-1">2</div>
        </div>
      </div>
    </Layout>
  );
}

export default CourseDetails;
