import LoadingSpinner from "../../../components/LoadingSpinner";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import ManageItemsRow from "./../../../components/ManageItemsRow";

const ManageItems = () => {
  const [menu, isLoading, , , refetch] = useMenu();
  console.log(menu);

  if (isLoading) return <LoadingSpinner />;
  return (
    <div>
      <SectionTitle title="Manage All Items" subTitle="Hurry up" />
      <h2 className="font-Cinzel font-semibold mb-1">
        Total Items: {menu.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table rounded-md overflow-hidden">
          {/* head */}
          <thead className="bg-yellow-600 text-white uppercase">
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, i) => (
              <ManageItemsRow
                key={item._id}
                refetch={refetch}
                {...item}
                i={i}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
