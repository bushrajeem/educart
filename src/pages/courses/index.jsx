import { NavLink } from "react-router-dom";
import Layout from "../../layout";
import Courses from "../home/components/courses";

function CoursesPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-secondary/15 to-primary/10 w-full relative h-[220px]">
        <img
          className="h-[150px] w-[150px] absolute left-[550px] top-9 z-10"
          src="/shape1.svg"
          alt=""
        />

        <div className="w-[500px] h-[298px] absolute right-[215px] -top-5 -z-10 bg-[#669BBC] rounded-xl" />
        <img
          className="absolute h-[170px] w-[160px] right-[80px] top-[67px]"
          src="/shape3.svg"
          alt=""
        />
        <div className=" container px-5">
          <div className="py-[40px] px-[50px]">
            <h1 className="text-[45px] font-bold text-secondary py-2">
              Courses List
            </h1>
            <div className="flex items-center font-medium gap-5">
              <NavLink to="/">Home</NavLink>
              <div className="h-[15px] w-[2px] bg-black"></div>
              <div className=" text-primary">Courses List</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container px-10 py-10 mt-[100px]">
          <h1 className="text-[40px] font-bold text-secondary py-5 relative">
            <img
              className="h-[210px] w-[210px] absolute -left-[85px] -top-12 -z-10"
              src="/storyshape.svg"
              alt=""
            />
            Popular <span className="text-primary">Courses</span> Categories
          </h1>

        <Courses />
        </div>
      </div>
      hello
    </Layout>
  );
}

export default CoursesPage;
