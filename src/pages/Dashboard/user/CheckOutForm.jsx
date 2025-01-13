import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";

const CheckOutForm = ({ totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const axiosSecure = useAxiosSecure();
  const [transactionId, setTransactionID] = useState("");
  const [clientSecretKey, setClientSecretKey] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    fetchIntent();
  }, [totalPrice]);
  const fetchIntent = async () => {
    try {
      const { data } = await axiosSecure.post("/create-confirm-intent", {
        price: totalPrice,
      });

      setClientSecretKey(data.clientSecret);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      console.log("Cannot found", stripe, elements);
      return;
    }
    const card = elements.getElement(CardElement);
    if (!card) {
      return console.log("card", card);
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setErrorMessage(error.message);
    } else {
      console.log("paymentMethod", paymentMethod);
      setErrorMessage("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecretKey, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email,
          },
        },
      });

    if (confirmError) {
      console.log("confirmError", confirmError);
    } else {
      console.log("paymentIntent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionID(paymentIntent.id);
      }
    }
  };

  return (
    <div className="w-96">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn my-5  btn-primary text-white"
          type="submit"
          disabled={!stripe || !clientSecretKey}
        >
          Pay
        </button>
        <p className="text-sm text-error">{errorMessage}</p>
        {transactionId && (
          <p className="text-sm text-success">transactionID: {transactionId}</p>
        )}
      </form>
    </div>
  );
};

export default CheckOutForm;
