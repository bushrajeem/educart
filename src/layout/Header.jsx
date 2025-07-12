import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";
import Popup from "../pages/home/components/Popup";
import Button from "../shared/components/Button";
// import Cart from "../pages/cart";
// import store from "../store/store";

function Header() {
  // const {quantity: qt} = useContext(store);
  return (
    <div>
      <TopHeader />
      <MiddleHeader/>
    </div>
  );
}
function TopHeader() {
  return (
    <div className="bg-secondary hidden md:block w-[100%] py-[10px]">
      <div className="container px-5">
        <div className="flex justify-between items-center text-white text-sm">
          <div className="flex gap-4">
            <span className="flex gap-2 items-center">
              <i className="fa-solid fa-envelope text-primary"></i>
              edukart.admin@email
            </span>
            <span className="font-semibold"> | </span>
            <span className="flex gap-2 items-center">
              <i className="fa-solid fa-phone text-primary"></i>
              +02-856 789 4563
            </span>
          </div>
          <div className="flex gap-3 items-center">
            Intro Price ! Get Online Courses @ 25% Offer
            <span className="bg-primary px-4 py-2 text-white rounded-full text-sm">
              New
            </span>
          </div>
          <div className="flex gap-4">
            <select className="text-white border-none bg-transparent">
              <option value="English">English</option>
              <option value="Bangla">Bangla</option>
              <option value="Hindi">Hindi</option>
            </select>
            <span className="font-semibold"> | </span>
            <span className="flex gap-2 items-center">
              <i className="fa-solid fa-dollar-sign text-primary"></i> Currency
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiddleHeader() {

  // const [quantity, setQuantity] = useState(0);
  //  useEffect(() => {
  //     let cartquantity = JSON.parse(localStorage.getItem("quantity") ?? 0) ?? 0;
  //      if (cartquantity) {
   
  //       setQuantity(cartquantity);
  //     } else {
       
  //       setQuantity(0);
  //     }
  //   }, [quantity]);
    
  const [popup, setPopup] = useState(false);

  const handlePopup = () => {
    setPopup(true);
  };
  const handleClose = () => {
    setPopup(false);
  };

  return (
    <>
      <div className="bg-white w-[100%] py-7 shadow-xl">
        <div className="container md:px-5">
          <div className="flex justify-between items-center">
            <NavLink to="/">
              <img 
              className=" w-[100px] md:w-[120px] lg:w-[155px]"
              src="/Edukart.svg" alt="" />
            </NavLink>
            <ul className="hidden md:flex items-center gap-8 font-semibold">
              <NavLink to="/" end>
                Home
              </NavLink>
              <NavLink to="/courses" end>
                Courses
              </NavLink>

              <li>Pages</li>
              <li>Blog</li>
              <li>Dashboard</li>
              <li>Contact Us</li>
            </ul>
            <div className="hidden md:flex gap-5">
              <span className="flex items-center">
              <NavLink to="/cart">             
                <i className="fa-solid fa-cart-shopping"></i> 
              </NavLink>
              </span>
              <span className="font-semibold flex items-center"> | </span>
              <span onClick={handlePopup} className="flex items-center gap-2">
                <i className="fa-regular fa-user"></i>
                Login
              </span>
              <span>
                <Button text="Register Now" />
              </span>
            </div>
          <div className="md:hidden ">
            <MenuIcon />
          </div>
          </div>
        </div>
        {popup && <Popup handleClose={handleClose} />}
      </div>
    </>
  );
}

export default Header;
