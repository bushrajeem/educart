import { SearchIcon } from "lucide-react";

function Banner() {
  return (
    <div className=" bg-gradient-to-r from-secondary/15 to-primary/10 h-screen w-full overflow-hidden relative">
      <div className="container px-5">
        <div className=" py-10">
          <h1 className="text-[65px] font-bold text-secondary py-5">
            Online{" "}
            <span className="text-primary">
              Digital <br /> Marketing
            </span>{" "}
            Courses
          </h1>
          <p className=" text-[14px] text-gray-600 mt-5">
              Rrow itself, let it be sorrow let him love it let him pursue it,
              ishing for its acquisitiendum. Because he will <br /> ab hold, uniess but
              through concer, and also of those who resist. Now a pure snore
              disturbeded sum dust. <br /> He ejjnoyes, in order that somewon, also
              with a severe one, unless of life.
            </p>
          <div className=" relative bg-white w-fit rounded-full flex items-center pr-3 mt-10">
            <input
              type="text"
              placeholder="What do you want to learn today?"
              className="bg-white rounded-full py-4 px-5 w-[460px]"
            />
            <SearchIcon size={35}
            className="p-2 bg-secondary rounded-full text-white text-center" />
          </div>
        </div>
        <img
          className=" absolute -right-[170px] -top-[220px] -z-10 size-[550px]"
          src="/shape1.svg"
          alt=""
        />
        <img
          className=" absolute size-[570px] right-28 top-20 -z-20"
          src="/shape2.svg"
          alt=""
        />
        <img
          className=" absolute size-[170px] right-[540px] top-[450px]"
          src="/shape3.svg"
          alt=""
        />

        <div className=" absolute bg-primary rounded-full text-white py-5 px-5 top-14 left-[630px] text-center">
          <p className="font-bold text-lg">
            3 FREE <br />
            <span className="font-thin text-sm">E-Books</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
