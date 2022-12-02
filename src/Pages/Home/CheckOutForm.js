import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [showError, setShowError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: `card`,
      card,
    })

    if(error){
      console.error(error);
      setShowError(error.message);
    }else{
      console.log(paymentMethod);
      setShowError(null);
    }

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
        className="input-bordered"
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
        <button type="submit" className="btn btn-primary btn-sm my-10" disabled={!stripe}>
          Pay
        </button>
      </form>
      {
        showError && 
        <p className="text-red-400">{showError}</p>
      }
    </>
  );
};

export default CheckOutForm;
