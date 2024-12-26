import { MinusCircle, PlusCircle, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import Layout from "../../layout";

function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("course") ?? "[]") ?? "[]"
  );
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [individualnumber, setIndividualnumber] = useState(1);

  useEffect(() => {
    calculateTotalPrice();
     if (cart.length > 0) {
      setCart(cart);
      setQuantity(cart.length);
    } else {
      setCart([]);
      setQuantity(0);
    }
  }, [quantity]);

  const cartremove = (item) => {
    if (item) {
      let cartItems = localStorage.getItem("course") ?? "[]";
      cartItems = JSON.parse(cartItems);
      cartItems = cartItems.filter((i) => i.id !== item.id);
      localStorage.setItem("course", JSON.stringify(cartItems));
      localStorage.setItem("quantity", JSON.stringify(quantity));
      setCart(cartItems);
      setQuantity(cartItems.length);
      calculateTotalPrice();

      // localStorage.removeItem("course");
    }
  };
  const calculateTotalPrice = () => {
    if (cart.length > 0) {
    let total =  cart.reduce((prev, cur) => {
      return  prev + cur.price;
      }, 0);
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
    
  };

  const individualChange = (item) => {
   if(item){
    let individualItems = localStorage.getItem("course") ?? "[]";
    individualItems = JSON.parse(individualItems);
    individualItems = individualItems.map((i) => i.id === item.id);
    localStorage.setItem("course", JSON.stringify(individualItems));
    setCart(individualItems);
   }
  }

  return (
    <div>
      <Layout>
        <div className="container px-5">
          <div className="grid grid-cols-7">
            <div className="col-span-5 bg-white">
              <div>
                {cart.map((item, i) => (
                  <div
                    key={i}
                    className="w-[70%] flex justify-between items-center p-5 border-[1px]"
                  >
                    <h1>{item?.title} </h1>
                    <h1 className="flex items-center gap-3">
                      {item?.price} 
                      <MinusCircle />{individualnumber} <PlusCircle onClick={() => individualChange(item)}/>
                      <Trash2 onClick={() => cartremove(item)} />
                    </h1>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-2 bg-gray-200 w-full p-5">
              <h1 className="font-bold text-[20px] py-3">Order Summary</h1>
              <p className="flex justify-between">
                Quantity:
                <div className="font-bold">{quantity}</div>
              </p>

              <div className="h-[1px] w-full bg-black mt-5"></div>

              <p className="flex justify-between">
                Total:
                <span className="font-bold text-primary">
                  {totalPrice}
                </span>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Cart;
