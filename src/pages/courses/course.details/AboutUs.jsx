import { Pencil } from "lucide-react";

function AboutUs() {
  return (
    <div className="py-5">
      <div className=" font-bold text-secondary text-[25px]">About Us</div>
      <p className="text-[12px] py-5">
        Mauris finibus eleifend ante quis scelerisque. Nunc rutrum eget dui quis
        pulvinar. Curabitur et tincidunt lectus, gravida elementum ligula. Duis
        vehicula, lectus ut ultrices rutrum, ante erat malesuada orci, tincidunt
        condimentum turpis ipsum eu orci. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque
        dictum est in risus congue dictum.{" "}
      </p>

      <div className="grid grid-cols-2 py-3 gap-2">
        <div className="col-span-1 bg-primary rounded-2xl text-[12px] text-white p-3 h-[235px] w-[355px]">
            <span className="flex items-center gap-2 py-2">
            <Pencil /> Phasellus vel ipsum vulputate nibh rhoncus posuere.
            </span >
            <span className="flex items-center gap-2 py-2">
            <Pencil /> Fusce luctus libero a mi scelerisque, nec maximus
            </span>
            <span className="flex items-center gap-2 py-2">
            <Pencil /> Vestibulum lacinia sapien in sapien pulvinar in congue
            </span>
            <span className="flex items-center gap-2 py-2">
            <Pencil /> Donec id est sed sem aliquam auctor.
            </span>
            <span className="flex items-center gap-2 py-2">
            <Pencil /> Maecenas ornare eros ac malesuada facilisis.
            </span>
        </div>
        <div className="col-span-1">
        <div className="col-span-1 bg-primary rounded-2xl text-[12px] text-white p-3 h-[235px] w-[355px]">
            <span className="flex items-center gap-2 py-2">
            <Pencil /> Morbi non dolor consequat, suscipit dui eu facilisis.
            </span >
            <span className="flex items-center gap-2 py-2">
            <Pencil /> Sed non velit non lectus accumsan vehicula.
            </span>
            <span className="flex items-center gap-2 py-2">
            <Pencil /> Nulla sit amet metus quis arcu bibendum tempus.
            </span>
            <span className="flex items-center gap-2 py-2">
            <Pencil /> Aenean vel metus nec felis consectetur euismod.
            </span>
            <span className="flex items-center gap-2 py-2">
            <Pencil /> Donec eu orci id nisl varius dictum eget at ligula.
            </span>
        </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
