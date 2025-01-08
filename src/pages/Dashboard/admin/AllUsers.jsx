import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import AllUsersRow from "../../../components/allUsersRow";
import LoadingSpinner from "../../../components/LoadingSpinner";
import SectionTitle from "../../../components/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading: userLoading } = useAuth();
  const [loading, setLoading] = useState(false);
  const {
    data: users = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure("/users");
      return data.data;
    },
  });

  // update role
  const handleUpdate = async (id) => {
    try {
      setLoading(true);
      const { data } = await axiosSecure.patch(`/user/update/role/${id}`);
      toast.success(data.message);
      refetch();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // delete user
  const handleUserDelete = async (id) => {
    try {
      setLoading(true);
      const { data } = await axiosSecure.delete(`/user/delete/${id}`);
      console.log(data.data);
      refetch();
      toast.success(data?.message);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  if (isLoading || userLoading || loading) return <LoadingSpinner />;
  return (
    <div>
      <SectionTitle title={"Manage all users"} subTitle={"How Many"} />
      <div className="overflow-x-auto">
        <table className="table rounded-md overflow-hidden">
          {/* head */}
          <thead className="bg-yellow-600 text-white ">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, i) => (
              <AllUsersRow
                key={user._id}
                user={user}
                i={i}
                handleUserDelete={handleUserDelete}
                handleUpdate={handleUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
