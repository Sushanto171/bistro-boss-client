import React from "react";
import { Link } from "react-router-dom";
import MyCartRow from "../../../components/MyCartRow";
import SectionTitle from "./../../../components/SectionTitle";
import useCart from "./../../../hooks/useCart";

const MyCarts = () => {
  const { carts, refetch } = useCart();
  const totalPrice = carts.reduce(
    (accumulator, cart) => accumulator + cart.price,
    0
  );

  return (
    <>
      <SectionTitle title={"Wanna Add More "} subTitle={"My cart"} />
      <div className="bg-base-200 rounded-md ">
        <div className="flex items-center font-Cinzel justify-between p-2 text-lg font-semibold">
          <p>Total Orders: {carts.length}</p>
          <p>Total Price: {totalPrice.toFixed(2)}$</p>
          <Link
            disabled={!carts.length}
            className="btn bg-yellow-600 text-white"
            to="/dashboard/payment"
          >
            <button className=" ">Pay</button>
          </Link>
        </div>
        <div className="overflow-x-auto ">
          <table className="table overflow-hidden">
            {/* head */}
            <thead className="uppercase bg-yellow-600 rounded-t-md text-white">
              <tr>
                <th>#</th>
                <th>IItem image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {carts.map((cart, i) => (
                <MyCartRow refetch={refetch} key={i} cart={cart} i={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyCarts;
