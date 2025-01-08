import { FiEdit } from "react-icons/fi";
import { ImBin } from "react-icons/im";

const ManageItemsRow = ({ image, name, price, recipe, _id, i }) => {
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={image} alt={name + "'s photo"} />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-bold">{name}</div>
      </td>
      <td>${price}</td>
      <th className="flex items-center justify-around text-white">
        <button className="btn btn-ghost btn-xs bg-yellow-600 w-8 h-8">
          <FiEdit className="text-xl" />
        </button>
        <button className="btn btn-ghost btn-xs  w-8 h-8 bg-error">
          <ImBin className="text-xl" />
        </button>
      </th>
    </tr>
  );
};

export default ManageItemsRow;
