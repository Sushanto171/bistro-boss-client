import { ImBin } from "react-icons/im";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import MenuUpdateModal from "./MenuUpdateModal";

const ManageItemsRow = ({
  image,
  name,
  price,
  recipe,
  _id,
  i,
  refetch,
  category,
}) => {
  const axiosSecure = useAxiosSecure();

  // warning
  const warning = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await handleDelete();
        if (res.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  // handle delete
  const handleDelete = async () => {
    const { data } = await axiosSecure.delete(`/menu/${_id}`);
    return data?.data;
  };
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
        {/* update btn */}

        <MenuUpdateModal
          info={{ image, name, price, recipe, _id, i, refetch, category }}
        />

        {/* delete btn */}
        <button
          onClick={warning}
          className="btn btn-ghost btn-xs  w-8 h-8 bg-error"
        >
          <ImBin className="text-xl" />
        </button>
      </th>
    </tr>
  );
};

export default ManageItemsRow;
