import React from "react";
import { useForm } from "react-hook-form";

const Message = () => {
  const { handleSubmit, register } = useForm();
  return (
    <div className="w-[760px] h-[572px] my-20 mx-auto">
      <h2 className="my-5 font-bold text-5xl text-center">
        Let us handle your <br /> project, professionally.
      </h2>
      <form className="grid grid-cols-2 gap-x-7 gap-y-10 my-20">
        <div className="form-control w-full">
          <input
            {...register("fname")}
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <input
            {...register("lname")}
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <input
            {...register("email")}
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <input
            {...register("phone")}
            type="phone"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control col-span-2">
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="your message"
          ></textarea>
        </div>
        <div className="items-center">
        <input type="submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default Message;
