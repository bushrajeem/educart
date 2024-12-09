import { StarHalfIcon, StarIcon } from "lucide-react";
import SectionTitle from "../../../shared/components/SectionTitle";
import Button from "../../../shared/components/Button";

function Review() {
    const membercard = [
        {
          name: "JOEL LEONARD",
          description:
            "Suspendisse id ullamcorper leo. Nam consequat arcu a lorem convallis, ultricies tristique elit biben dumaecenas fermentum.",
          image: "/memberspic.svg",
        },
        {
          name: "JOEL LEONARD",
          description:
            "Suspendisse id ullamcorper leo. Nam consequat arcu a lorem convallis, ultricies tristique elit biben dumaecenas fermentum.",
          image: "/memberspic.svg",
        },
        {
          name: "JOEL LEONARD",
          description:
            "Suspendisse id ullamcorper leo. Nam consequat arcu a lorem convallis, ultricies tristique elit biben dumaecenas fermentum.",
          image: "/memberspic.svg",
        },
    ];
  return (
    <div>
      <div className="text-secondary text-[25px] font-bold py-5">Reviews</div>

      <div className="flex items-center justify-center">
        <span>
          <p className="text-[150px] font-bold ">4.5 </p>
          <span className="text-primary flex">

          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
          </span>
        </span>

        
      </div>

      <div className="py-5">
        <p className="text-[20px] font-semibold text-secondary">Comments</p>
      </div>
    
      <div className="  flex flex-wrap justify-between items-center gap-4">
          {membercard.map((item) => {
            return (
              <div className="flex gap-2 gap-5 py-5 rounded-lg ">
                <img src={item.image} alt="" />
                <div>
                  <h2 className="text-primary text-[20px] font-bold hover:text-black">
                    {item.name}
                  </h2>
                  <p className="text-[16px] mt-5">{item.description}</p>
                  <span>{item.position}</span>

                  <div className="flex gap-2 font-semibold py-3">
                    Reply
                  <div className="h-[1px] bg-[#CDCDCD] w-full"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


<div className="bg-black h-[1px] w-full mt-5"></div>
        <div className="text-[35px] py-3 mt-5">
        <SectionTitle bluetitle="Leave A" orangetitle="Reply" />
        </div>
        <p>Your email address will not be published. Required fields are marked *</p>

        <div className="flex justify-between items-center gap-[70px] py-5">
       <input 
       className="border-[2px] border-black w-full"
       placeholder="Enter your Name"
       type="text" />
       <input 
       className="border-[2px] border-black w-full"
       placeholder="Enter your Name"
       type="text" />
        </div>

        <input 
       className="border-[2px] border-black w-full h-[200px]"
       placeholder="Message here"
       type="text" />

      <div className="py-6">

       <Button text="Post Comments" />
      </div>
    </div>

  );
}

export default Review;
