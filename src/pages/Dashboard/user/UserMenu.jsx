import { BsBuildingFillAdd } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { GrDocumentStore } from "react-icons/gr";
import { MdShoppingCart } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const UserMenu = () => {
  const { carts } = useCart();
  return (
    <div className=" mt-16">
      <ul className="flex flex-col gap-4 font-semibold">
        <li>
          <NavLink
            to="/dashboard/user-home"
            className={"flex items-center gap-1"}
          >
            <FaHome /> User Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/reservation"
            className={"flex items-center gap-1"}
          >
            <GrDocumentStore /> Reservation
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/payment-history"
            className={"flex items-center gap-1"}
          >
            <RiSecurePaymentFill />
            Payment history
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/carts" className={"flex items-center gap-1"}>
            <MdShoppingCart />
            My Cart ({carts.length})
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/my-booking"
            className={"flex items-center gap-1"}
          >
            <BsBuildingFillAdd />
            My booking
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
