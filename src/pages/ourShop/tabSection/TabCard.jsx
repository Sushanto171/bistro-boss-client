import React from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";

const TabCard = ({ item }) => {
  const { image, price, name, recipe, _id } = item || {};
  const { user } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const axiosSecure = useAxiosSecure();
  const handelAddCart = async () => {
    try {
      if (!user) {
        navigate("/login", { state: { form: pathname } });
        return;
      }
      const cartData = {
        image,
        price,
        name,
        itemId: _id,
        email: user.email,
        name: user.displayName,
      };

      const { data } = await axiosSecure.post("/carts", cartData);
      if (data?.data?.insertedId) toast.success(data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card bg-base-100 shadow-md group max-w-sm mx-auto">
      <figure className="h-60 border">
        <img
          src={image}
          alt="Shoes"
          className="w-full group-hover:scale-110 duration-200"
        />
      </figure>
      <p className="bg-black text-white absolute top-8 right-3 rounded px-2">
        {" "}
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="opacity-80 text-sm leading-relaxed">{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handelAddCart()}
            className=" btn btn-outline border-0 border-b-4 border-black uppercase text-yellow-400 hover:text-yellow-400 bg-slate-100"
          >
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
