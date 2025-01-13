import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["payment", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/payment/${user?.email}`);
      return data?.data;
    },
  });

  return (
    <>
      <SectionTitle title={"Payment History"} subTitle={"At a Glance"} />
      <div className="overflow-x-auto ">
        <h1 className="text-3xl font-Cinzel font-semibold">
          Total Payments: {payments.length}
        </h1>
        <table className="table overflow-hidden">
          {/* head */}
          <thead className="uppercase bg-yellow-600 rounded-t-md text-white">
            <tr>
              <th>#</th>
              <th>Price</th>
              <th>TransactionID</th>
              <th>Payment Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, i) => {
              const date = new Date(payment.date).toLocaleDateString();
              return (
                <tr key={payment._id} className="bg-base-200">
                  <th>{i + 1}</th>
                  <td>${payment.price}</td>
                  <td>{payment.transactionId}</td>
                  <td>{date}</td>
                  <td>{payment.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PaymentHistory;
