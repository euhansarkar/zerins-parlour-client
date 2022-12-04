import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";
import Payment from "../Payment/Payment";
import Services from "./Services";

const CustomerBooking = () => {
  const { handleSubmit, register } = useForm();
  const [service, setService] = useState(null);
  const handleBookingForm = (data) => {
    console.log(data);
  };



  return (
    <div className="w-1/2">
      <h2 className="text-4xl font-bold my-6">Book</h2>
      <form className="space-y-6" onSubmit={handleSubmit(handleBookingForm)}>
        <div className="form-control w-full">
          <input
            type="text"
            {...register("name")}
            placeholder="Your Email"
            className="input input-bordered focus:outline-none w-full"
          />
        </div>

        <div className="form-control w-full">
          <input
            type="email"
            {...register("password")}
            placeholder="Your Email"
            className="input input-bordered focus:outline-none w-full"
          />
        </div>

        <div className="form-control w-full">
          <select
            type="email"
            onChange={e => setService(e.target.value)}
            {...register("service")}
            placeholder="Your Email"
            className="input input-bordered focus:outline-none w-full"
          >
          </select>
        </div>

        <input type="submit" className="btn btn-primary w-full my-6" />
      </form>

      <Payment></Payment>

      <h2 className="text-2xl mt-10 font-semibold text-primary">your service charge will be $20</h2>

      <div></div>
    </div>
  );
};

export default CustomerBooking;
