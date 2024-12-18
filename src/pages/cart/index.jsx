import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import Layout from "../../layout";

function Cart() {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let details = JSON.parse(localStorage.getItem("course"));

    if (details) {
      setCart(details);
      setQuantity(setCart.length);
    } else {
      setCart([]);
      setQuantity(0);
    }
  }, []);
  const cartremove = () => {
    setCart([]);
    setQuantity(0);
    localStorage.removeItem("course");
  };
  useEffect(() => {
   setTotalPrice();
  }, []);



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
                      {item?.price} <Trash2 onClick={cartremove} />
                    </h1>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-2 bg-gray-200 w-full p-5">
              <h1 className="font-bold text-[20px] py-3">Order Summary</h1>
              <p className="flex justify-between">
                Quantity:
                <div className="font-bold">{cart.length}</div>
              </p>

              <div className="h-[1px] w-full bg-black mt-5"></div>

              <p className="flex justify-between">
                Total:
                <span className="font-bold text-primary">$0.00</span>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Cart;
