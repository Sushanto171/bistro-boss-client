import React from "react";
import img from "../../../assets/home/slide1.jpg";

const RecommendCard = ({ item }) => {
  return (
    <div className="card bg-base-100 shadow-md">
      <figure className="h-60 border">
        <img
          src={img}
          alt="Shoes"
          className="w-full hover:scale-105 duration-200"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Caeser Salad</h2>
        <p className="opacity-80 text-sm leading-relaxed">
          Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
        </p>
        <div className="card-actions">
          <button className=" btn btn-outline border-0 border-b-4 border-black uppercase text-yellow-400 hover:text-yellow-400 bg-slate-100">
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
