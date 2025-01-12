import React from "react";

const MyCartRow = ({ cart, i }) => {
  console.log(cart);
  console.log(cart);
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
        <button className="btn  btn-xs btn-error text-white">Delete</button>
      </th>
    </tr>
  );
};

export default MyCartRow;
