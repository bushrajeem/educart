import React from "react";
import Button from "../../../../shared/components/Button";
import StoryCard from "./StoryCard";
import CourseDetails from "../courses/course.details";

export const story = [
  {
    image: "/storyshape2.svg",
    title: "Michelle Carol",
    university: "At University of Central Missouri",
    degree: "Master Degree",
    score: "7.8",
    time: "3 Semester",
  },
  {
    image: "/storyshape2.svg",
    title: "Christopher Charles",
    university: "At University of Central Missouri",
    degree: "Master Degree",
    score: "7.8",
    time: "3 Semester",
  },
  {
    image: "/storyshape2.svg",
    title: "Dorothy Kathleen",
    university: "At University of Central Missouri",
    degree: "Master Degree",
    score: "7.8",
    time: "3 Semester",
  },
  {
    image: "/storyshape2.svg",
    title: "Alexander Patrickv",
    university: "At University of Central Missouri",
    degree: "Master Degree",
    score: "7.8",
    time: "3 Semester",
  },
];
function Story() {
  return (
    <div className="bg-gradient-to-br from-purple-400 md:to-yellow-300 py-10 relative -z-10 h-[1000px]">
      <img
        className="absolute h-[226px] w-[226px] top-4 left-[475px]"
        src="/storyshape.svg"
        alt=""
      />
      <div className="container px-5">
        <div className="flex justify-between items-center mt-[170px]">
          <p className="text-secondary text-[35px] font-bold">
            Student Success Stories
          </p>
          <Button text="View More Stories" />
        </div>

        <div className="flex justify-between items-center gap-5">
          {story.map((items) => (
            <StoryCard details={items} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Story;
