import React from "react";
import screen from "../../../assets/images/screenCare.png";

const Care = () => {
  return (
    <div className="hero py-20">
      <div className="hero-content flex-col lg:flex-row space-x-12">
        <img src={screen} alt="" className="max-w-sm rounded-lg shadow-2xl" />
        <div className=" w-full md:w-1/2">
          <h1 className="text-4xl font-bold">
            Let us handle your screen Professionally.
          </h1>
          <p className="py-6 w-full lg:w-7/12">
          With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.
          </p>
          <div className="flex space-x-20 items-center">
            <div className="space-y-4">
                <h2 className="text-primary font-bold text-5xl">500+</h2>
                <p className="capitalize">Happy Customer</p>
            </div>
            <div className="space-y-4">
                <h2 className="text-primary font-bold text-5xl">16+</h2>
                <p className="capitalize">total service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care;
