import React from "react";
import toast from "react-hot-toast";
import { FaUsers } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { ImBin } from "react-icons/im";

const AllUsersRow = ({ user, i, handleUpdate, handleUserDelete }) => {
  const handleDelete = (id) => {
    // 1. warning show ui
    toast(
      (t) => (
        <div className="flex gap-0.5 items-center">
          <span className="text-sm whitespace-nowrap">
            Are you sure you want to <b>Delete</b>?
          </span>
          <button
            className="btn btn-sm text-error"
            onClick={() => {
              handleUserDelete(id);
              toast.dismiss(t.id);
            }}
          >
            Yes
          </button>
          <button
            className="btn btn-sm text-success"
            onClick={() => toast.dismiss(t.id)}
          >
            No
          </button>
        </div>
      ),
      {
        position: "top-right",
      }
    );
  };
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
          </div>
        </div>
      </td>
      <td>{user?.email}</td>
      <td>
        <button
          onClick={() => handleUpdate(user._id)}
          className="btn btn-ghost text-xl disabled:cursor-not-allowed"
          title={user.role}
          disabled={user.role === "admin"}
        >
          {user.role === "admin" ? <GrUserAdmin /> : <FaUsers />}
        </button>
      </td>
      <th>
        <button
          onClick={() => handleDelete(user?._id)}
          className="btn btn-ghost text-error text-xl"
        >
          <ImBin />
        </button>
      </th>
    </tr>
  );
};

export default AllUsersRow;
