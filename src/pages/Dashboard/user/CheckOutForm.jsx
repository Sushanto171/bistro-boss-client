import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
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
          disabled={!stripe}
        >
          Pay
        </button>
        <p className="text-sm text-error">{errorMessage}</p>
      </form>
    </div>
  );
};

export default CheckOutForm;
