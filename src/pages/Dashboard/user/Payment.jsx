import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);
const Payment = () => {
  console.log(stripePromise);
  return (
    <div className="flex items-center justify-center">
      <div>
        <h2 className="text-3xl font-semibold uppercase text-center my-12">
          Payment
        </h2>
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
