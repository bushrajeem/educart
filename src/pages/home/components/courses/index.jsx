import React, { useEffect } from "react";
import SectionTitle from "../../../../shared/components/SectionTitle";
import Coursescard from "./Coursescard";
import Button from "../../../../shared/components/Button";
import axios from "axios";

export const coursesDetails = [
  {
    title: "Amazon FS Lustre Primer",
    id: 0,
    image: "/courseshape.svg",
    rating: "4.7",
    hour: " 1hr Course",
    video: "15 Videos",
    lesson: "20 Lessons",
    image2: "/courseshape2.svg",
    name: "By Angela in Development",
    price: "$60",
    category: "web design",
  },
  {
    title: "Bring your learning to life",
    id: 1,
    image: "/courseshape.svg",
    rating: "4.7",
    hour: " 2hr Course",
    video: "15 Videos",
    lesson: "20 Lessons",
    name: "By Angela in Development",
    price: "$60",
    category: "web design",
  },
  {
    title: "The next step in your education",
    id: 2,
    image: "/courseshape.svg",
    rating: "4.7",
    hour: " 1.5hr Course",
    video: "15 Videos",
    lesson: "20 Lessons",
    name: "By Angela in Development",
    price: "$60",
    category: "web design",
  },
  {
    title: "Bring your learning to life",
    id: 3,
    image: "/courseshape.svg",
    rating: "4.7",
    hour: " 2hr Course",
    video: "15 Videos",
    lesson: "20 Lessons",
    name: "By Angela in Development",
    price: "$60",
    category: "seo",
  },
  {
    title: "Premium learning experience",
    id: 4,
    image: "/courseshape.svg",
    rating: "4.7",
    hour: " 1hr Course",
    video: "15 Videos",
    lesson: "20 Lessons",
    image2: "/courseshape2.svg",
    name: "By Angela in Development",
    price: "$60",
    category: "graphics",
  },
  {
    title: "We offer you a brighter",
    id: 5,
    image: "/courseshape.svg",
    rating: "4.7",
    hour: " 2hr Course",
    video: "15 Videos",
    lesson: "20 Lessons",
    name: "By Angela in Development",
    price: "$60",
    category: "graphics",
  },
  {
    title: "Quality online courses",
    id: 6,
    image: "/courseshape.svg",
    rating: "4.7",
    hour: " 1.5hr Course",
    video: "15 Videos",
    lesson: "20 Lessons",
    name: "By Angela in Development",
    price: "$60",
    category: "web development",
  },
  {
    title: "Experience interactive",
    id: 7,
    image: "/courseshape.svg",
    rating: "4.7",
    hour: " 2hr Course",
    video: "15 Videos",
    lesson: "20 Lessons",
    name: "By Angela in Development",
    price: "$60",
    category: "web development",
  },
];

function Courses() {
//   const apiUrl = "https://jsonplaceholder.typicode.com/posts";

const [courses, setCourses] = React.useState(coursesDetails);

//   useEffect(() => {
    

//     fetchData();
//   });

//   const fetchData = async () => {
//     let response = await axios.get(apiUrl);
//     setCourses((prev) => response.data );
    
//   };

  const handleCategory = (e) => {
     console.log(e.target.value);
     
    if(e.target.value){

      const selectedCourses = coursesDetails.filter(
        (item) => item.category === e.target.value
      );
      setCourses(selectedCourses);
    }
    else{
      setCourses(coursesDetails);
    }
  }
  
  const categories = [
    "web design",
    "web development",
    "seo",
    "graphics",
  ]

  

  return (
    <div className="py-[100px]">
      <div className="container px-5 py-3">
        <div className="flex items-center justify-between">
          <SectionTitle
            bluetitle="Explore More"
            orangetitle="Online Courses"
            textSize="40px"
          />
          <div className="flex gap-4">
            <p>Filter By:</p>
            <select className="text-black bg-[#F1F1F1] w-[148px] px-2 py-[2px] rounded-lg">
              <option value="1">Category</option>
              <option value="2">Price low to high</option>
              <option value="3">Price High to low</option>
            </select>

            <select 
            onChange={handleCategory}
            className="text-black bg-[#F1F1F1] w-[148px] px-2 py-[2px] rounded-lg">
              {categories.map((category) =>(
                <option 
                value={category}
                 className="px-4 py-2">{category}</option>
              ))}
            </select>

            <select className="text-black bg-[#F1F1F1] w-[148px] px-2 py-[2px] rounded-lg">
              <option value="1">Rating</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <select className="text-black bg-[#F1F1F1] w-[148px] px-2 py-[2px] rounded-lg">
              <option value="1">Difficulty</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>

        <div className="py-7 flex flex-wrap items-center justify-center gap-16">
          {courses.map((item) => (
            <Coursescard details={item} />
          ))}
        </div>
        <span className="flex justify-center">
          <Button text="View More Courses" />
        </span>
      </div>
    </div>
  );
}

export default Courses;
