

function AboutCard({ details }) {
  return (
    <div className=" lg:flex items-center text-[18px] py-10 w-[280px] gap-3 ml-5">
      <img src={details.icon} alt="" /> 
      {details.title}
    </div>
  );
}

export default AboutCard;
