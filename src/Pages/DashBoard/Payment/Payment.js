import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckOutForm from "../../Home/CheckOutForm";

const Payment = () => {
  const stripePromise = loadStripe(`${process.env.STRIPE_PAYMENT_PK}`);

  console.log(stripePromise);

  return (
    <div className="my-8">
      <Elements stripe={stripePromise}>
        <CheckOutForm />
      </Elements>
    </div>
  );
};

export default Payment;
