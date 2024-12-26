import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import {
  ChevronDown,
  Clock,
  Clock1,
  Clock11,
  Facebook,
  FileText,
  GraduationCap,
  IdCard,
  Info,
  Instagram,
  Newspaper,
  PlayCircleIcon,
  PlusIcon,
  Search,
  StarHalf,
  StarIcon,
  Twitter,
  User,
  Youtube,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Layout from "../../../layout";
import { coursesDetails } from "../../home/components/courses";
import AboutUs from "./AboutUs";
import "./course.css";
import Instructor from "./Instructor";
import Members from "./Members";
import Review from "./Review";

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <div className="accordion-container">
        <span>{header}</span>
        <PlusIcon className="icon-class" />
      </div>
    }
  />
);

function CourseDetails() {
  const param = useParams();
  console.log(param.id);
  const navigate = useNavigate();

  const [details, setDetails] = useState({});

  useEffect(() => {
    let details = coursesDetails.find(
      (course) => course.id === parseInt(param.id)
    );
    setDetails(details);
  }, []);

  const handleCart = (item) =>{
    const oldItem = JSON.parse(localStorage.getItem("course") ?? "[]");

    if (oldItem) {
      localStorage.setItem("course", JSON.stringify([...oldItem, item]));
      navigate("/cart");
    } else{
      localStorage.setItem("course", JSON.stringify([item]));
      navigate("/cart");
    }
  };
  // const handletotalPrice = (item) =>{
  //   const oldPrice = JSON.parse(localStorage.getItem("course"));

  //   if (oldPrice) {
  //     localStorage.setItem("course", JSON.stringify([...oldItem, item]));
  //     localStorage.setItem("course", JSON.stringify([...oldItem + item]));
  //     navigate("/cart");
  //   } else{
  //     localStorage.setItem("course", JSON.stringify([item]));
  //     navigate("/cart");
  //   }
  // };

  return (
    <Layout>
      <div className="bg-gradient-to-r from-secondary/15 to-primary/10 w-full relative h-[210px]">
        <div className=" container px-5">
          <div className="py-[30px] px-[35px]">
            <h1 className="text-[45px] font-bold text-secondary py-2">
              Courses Details
            </h1>
            <div className="flex items-center font-medium gap-5">
              <NavLink to="/">Home</NavLink>
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

      <div className="container px-10">
        <div className=" bg-[#669BBC] h-[320px] w-[1200px] py-5 rounded-xl mt-20"></div>
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

            <button
              onClick={() => handleCart(details)} 
              className="bg-primary text-white rounded-3xl h-[40px] w-[150px] text-center py-2"
            >
              Buy Now
            </button>
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

        <div className=" grid grid-cols-3 gap-4">
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

            <Accordion transition transitionTimeout={500}>
              <AccordionItem header="Revolutionize your learning experience">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionItem>

              <AccordionItem header="Empower your ambition with our learning system">
                Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
                vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
                vitae.
              </AccordionItem>

              <AccordionItem header="Learning for success, the best route to the top">
                Suspendisse massa risus, pretium id interdum in, dictum sit amet
                ante. Fusce vulputate purus sed tempus feugiat.
              </AccordionItem>

              <AccordionItem header="Compass for your journey of learning">
                Suspendisse massa risus, pretium id interdum in, dictum sit amet
                ante. Fusce vulputate purus sed tempus feugiat.
              </AccordionItem>
            </Accordion>

            <p className=" py-5 px-4 flex text-[#403685] font-bold">
              Show less <ChevronDown />
            </p>

            <AboutUs />
            <Instructor />
            <Members />
            <Review />
          </div>

          <div className="col-span-1 bg-[#eeebeb] py-10 px-7 ml-7 w-[335px] h-fit rounded-xl">
            <p className="text-primary font-bold text-[20px] ">Course Info</p>
            <p className="text-[14px] py-3">
              <p className="py-1">Categories : {details.title}</p>
              <p className="py-1">Lessons : {details.lesson}</p>
              <p className="py-1">Quizzes : 05</p>
              <p className="py-1">Assignments : 06</p>
              <p className="py-1">Duration : 48Hrs 20Mins</p>
            </p>
            <div className="w-full h-[1px] bg-[#CDCDCD]"></div>

            <div className="py-4 font-bold text-secondary">
              Social Share
              <div className="py-3 flex gap-5 items-center">
                <span className=" bg-black rounded-md text-white">
                  <Facebook />{" "}
                </span>
                <span className=" bg-black rounded-md text-white">
                  <Youtube />{" "}
                </span>
                <span className=" bg-black rounded-md text-white">
                  <Twitter />{" "}
                </span>
                <span className=" bg-black rounded-md text-white">
                  <Instagram />{" "}
                </span>
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#CDCDCD]"></div>

            <>
              <div className="py-2 mt-2 font-bold text-secondary">
                {" "}
                Featured Courses
              </div>
              <div className="mt-3 h-[300px] w-[270px] bg-[#5c91b3] rounded-xl"></div>
              <p className="text-primary text-[22px] mt-3 font-bold">
                Digital Marketing Job Search in 2023
              </p>
              <p className="mt-3 text-[14px]">
                Wed, 12 Dec 2023 | 7:00pm - 8:00pm
              </p>

              <button className="bg-secondary h-[52px] w-[160px] rounded-full mt-3 text-white">
                Register Now
              </button>
              <div className=" mt-3 w-full h-[1px] bg-[#CDCDCD]"></div>

              <div className="py-3">
                <p className="py-3 font-bold text-secondary">Blog Categories</p>
                <div className="py-3 px-3 flex gap-5 justify-between items-center bg-white rounded-full">
                  <span> Consultation </span> <span> (3)</span>
                </div>
                <div className="py-3 px-3  mt-2 flex gap-5 justify-between items-center bg-white rounded-full">
                  <span> Entrepreneurs </span> <span> (10)</span>
                </div>
                <div className="py-3 px-3 mt-2 flex gap-5 justify-between items-center bg-white rounded-full">
                  <span> Franchising </span> <span> (5)</span>
                </div>
                <div className="py-3 px-3 mt-2 flex gap-5 justify-between items-center bg-white rounded-full">
                  <span> Leadership </span> <span> (20)</span>
                </div>
              </div>
            </>

            <>
              <div className="h-[350px] w-[275px] bg-[#5c91b3] mt-5"></div>
              <div className="bg-secondary w-[275px] h-[244px] p-5 text-white">
                <p className=" text-[40px] font-medium">Project Proposal</p>
                <p className="text-[12px]">Factory Floor Digitization</p>
                <p className="py-4 text-[10px]">
                  Presented By <br />
                  <span className="text-[16px] font-semibold">Jhon Luthor</span>
                </p>
              </div>
            </>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CourseDetails;
