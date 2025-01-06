import { useQuery } from "@tanstack/react-query";
import AllUsersRow from "../../../components/allUsersRow";
import LoadingSpinner from "../../../components/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure("/users");
      return data.data;
    },
  });
  if (isLoading) return <LoadingSpinner />;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
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
              <AllUsersRow key={user._id} user={user} i={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
