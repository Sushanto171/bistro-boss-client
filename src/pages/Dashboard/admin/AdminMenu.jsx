import React from "react";
import { FaAd, FaHome } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className=" mt-16">
      <ul className=" flex flex-col gap-4  font-semibold">
        <li>
          <NavLink to="/" className={"flex items-center gap-1"}>
            <FaHome /> Admin Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={"flex items-center gap-1"}>
            <FaAd /> Add Items
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={"flex items-center gap-1"}>
            <MdAddShoppingCart /> Mange Items
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={"flex items-center gap-1"}>
            <TbBrandBooking />
            Manage Bookings
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={"flex items-center gap-1"}>
            <FaUsersGear /> ALl users
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminMenu;
