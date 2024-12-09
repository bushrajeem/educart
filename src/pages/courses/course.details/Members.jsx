function Members() {
  const membercard = [
    {
      name: "Kimberly Michelle",
      description:
        "Suspendisse id ullamcorper leo. Nam consequat arcu a lorem convallis, ultricies tristique elit biben dumaecenas fermentum.",
      position: "Sr. Product Designer",
      image: "/memberspic.svg",
    },
    {
      name: "Kimberly Michelle",
      description:
        "Suspendisse id ullamcorper leo. Nam consequat arcu a lorem convallis, ultricies tristique elit biben dumaecenas fermentum.",
      position: "Sr. Product Designer",
      image: "/memberspic.svg",
    },
    {
      name: "Kimberly Michelle",
      description:
        "Suspendisse id ullamcorper leo. Nam consequat arcu a lorem convallis, ultricies tristique elit biben dumaecenas fermentum.",
      position: "Sr. Product Designer",
      image: "/memberspic.svg",
    },
    {
      name: "Kimberly Michelle",
      description:
        "Suspendisse id ullamcorper leo. Nam consequat arcu a lorem convallis, ultricies tristique elit biben dumaecenas fermentum.",
      position: "Sr. Product Designer",
      image: "/memberspic.svg",
    },
  ];

  return (
    <div>
      <div className="container">
        <div className="text-secondary text-[25px] font-bold py-5">Members</div>

        <div className="  flex flex-wrap justify-between items-center gap-4">
          {membercard.map((item) => {
            return (
              <div className="flex gap-2 border-[1px] border-primary gap-5 p-5 rounded-lg ">
                <img src={item.image} alt="" />
                <div>
                  <p className="text-[16px]">{item.description}</p>
                  <h2 className="text-primary text-[20px] font-bold hover:text-black mt-6">
                    {item.name}
                  </h2>
                  <span>{item.position}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Members;
