import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";
import CheckOutForm from "./CheckOutForm";
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);
const Payment = () => {
  const { carts } = useCart();
  const totalPrice = carts.reduce((total, item) => total + item.price, 0);

  return (
    <div className="flex items-center justify-center">
      <div>
        <h2 className="text-3xl font-semibold uppercase text-center my-12">
          Payment
        </h2>
        <Elements stripe={stripePromise}>
          <CheckOutForm totalPrice={totalPrice} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
