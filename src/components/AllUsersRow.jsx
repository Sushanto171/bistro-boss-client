import React from "react";
import { FaUsers } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { ImBin } from "react-icons/im";

const AllUsersRow = ({ user, i, refetch }) => {
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={user?.photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{user?.name}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>{user?.email}</td>
      <td>
        <button className="btn btn-ghost text-xl" title={user.role}>
          {user.role === "admin" ? <GrUserAdmin /> : <FaUsers />}
        </button>
      </td>
      <th>
        <button className="btn btn-ghost text-error text-xl">
          <ImBin />
        </button>
      </th>
    </tr>
  );
};

export default AllUsersRow;
