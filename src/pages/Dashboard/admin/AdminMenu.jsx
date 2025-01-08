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
          <NavLink
            to="/dashboard/admin-home"
            className={"flex items-center gap-1"}
          >
            <FaHome /> Admin Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/add-item"
            className={"flex items-center gap-1"}
          >
            <FaAd /> Add Item
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/manage-items"
            className={"flex items-center gap-1"}
          >
            <MdAddShoppingCart /> Manage Items
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/manage-bookings"
            className={"flex items-center gap-1"}
          >
            <TbBrandBooking />
            Manage Bookings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/all-users"
            className={"flex items-center gap-1"}
          >
            <FaUsersGear /> All users
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminMenu;
