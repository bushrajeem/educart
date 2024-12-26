import React, { useEffect } from "react";
import Button from "../../../../shared/components/Button";
import SectionTitle from "../../../../shared/components/SectionTitle";
import Coursescard from "./Coursescard";
// import axios from "axios";

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
    price: 10,
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
    price: 20,
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
    price: 30,
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
    price: 40,
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
    price: 50,
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
    price: 60,
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
    price: 70,
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
    price: 80,
    category: "web development",
  },
];




function Courses() {
//   const apiUrl = "https://jsonplaceholder.typicode.com/posts";



//   useEffect(() => {
    

//     fetchData();
//   });

//   const fetchData = async () => {
//     let response = await axios.get(apiUrl);
//     setCourses((prev) => response.data );
    
//   };

 const [courses, setCourses] = React.useState(coursesDetails);

 const handleCategory = (e) => {
     
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
            textSize="35px"
          />
          <div className="flex gap-4 flex-wrap">
            <p>Filter By:</p>
            <select className="text-black bg-[#F1F1F1] w-[140px] px-2 py-[2px] rounded-lg">
              <option value="1">Category</option>
              <option value="2">Price low to high</option>
              <option value="3">Price High to low</option>
            </select>

            <select 
            onChange={handleCategory}
            className="text-black bg-[#F1F1F1] w-[140px] px-2 py-[2px] rounded-lg">
              {categories.map((category,i) =>(
                <option 
                value={category} key={i}
                 className="px-4 py-2 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500">{category}</option>
              ))}
            </select>

            <select className="text-black bg-[#F1F1F1] w-[140px] px-2 py-[2px] rounded-lg ">
              <option value="1">Rating</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <select className="text-black bg-[#F1F1F1] w-[140px] px-2 py-[2px] rounded-lg">
              <option value="1">Difficulty</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>

        <div className="py-7 flex flex-wrap items-center justify-center gap-16">
          {courses.map((item,i) => (
            <Coursescard details={item} key={i} />
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
