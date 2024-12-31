import React from "react";

const TabCard = ({ item }) => {
  return (
    <div className="card bg-base-100 shadow-md group max-w-sm mx-auto">
      <figure className="h-60 border">
        <img
          src={item.image}
          alt="Shoes"
          className="w-full group-hover:scale-110 duration-200"
        />
      </figure>
      <p className="bg-black text-white absolute top-8 right-3 rounded px-2">
        {" "}
        ${item.price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{item.name}</h2>
        <p className="opacity-80 text-sm leading-relaxed">{item.recipe}</p>
        <div className="card-actions">
          <button className=" btn btn-outline border-0 border-b-4 border-black uppercase text-yellow-400 hover:text-yellow-400 bg-slate-100">
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
