import React from "react";
import toast from "react-hot-toast";
import useAxiosPublic from "../hooks/useAxiosPublic";

const MyCartRow = ({ cart, i, refetch }) => {
  const axiosPublic = useAxiosPublic();
  const handleDelete = async (id) => {
    const { data } = await axiosPublic.delete(`/cart/${id}`);
    if (data?.data?.deletedCount > 0) {
      toast.success(data?.message);
    }
    refetch();
  };
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img src={cart?.image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{cart?.name}</td>
      <td>{cart?.price}</td>
      <th>
        <button
          onClick={() => handleDelete(cart?._id)}
          className="btn  btn-xs btn-error text-white"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MyCartRow;
