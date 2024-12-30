import React from "react";

const MenuCard = ({ item }) => {
  return (
    <div key={item._id} className="flex justify-between gap-2">
      <div>
        <img
          className="w-32 h-28 border"
          style={{ borderRadius: "0 200px 200px" }}
          src={item?.image}
          alt=""
        />
      </div>
      <div className="flex-1 opacity-80">
        <p>{item?.name}----------------</p>
        <p className="text-sm tracking-wider mt-2">{item?.recipe}</p>
      </div>
      <p className="text-yellow-400">${item?.price}</p>
    </div>
  );
};

export default MenuCard;
