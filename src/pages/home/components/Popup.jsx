import { XMarkIcon } from "@heroicons/react/16/solid";
import React, { useRef, useState } from "react";
import Button from "../../../shared/components/Button";

function Popup({ handleClose }) {
  const [showname, setShowname] = useState(" ");
  const inputRefEmail = useRef();
  const inputRefPass = useRef();

  function handleRef() {
    setShowname(inputRefEmail.current.value);
  }
  return (
    <div className="absolute top-0 left-0 z-10 bg-black/50 w-full h-screen backdrop-blur flex justify-center items-center">
      <div className="bg-white h-[250px] w-[450px] rounded-xl">
        <XMarkIcon onClick={handleClose} className=" size-9" />
        <div>
          <h1 className=" flex justify-center font-bold">Login</h1>
          <div className=" py-7 px-8">
            <input ref={inputRefEmail} type="text" placeholder="Email" />
            <input ref={inputRefPass} type="password" placeholder="Password" />
          </div>
          <span className="flex items-center justify-center py-5 px-8">
            <Button onClick={handleRef} text="Submit" />
          </span>
          {showname && <p>{showname}</p>}
        </div>
      </div>
    </div>
  );
}

export default Popup;
