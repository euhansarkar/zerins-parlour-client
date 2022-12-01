import React from "react";
import girl from '../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png';

const Banner = () => {
  return (
    <div className="hero my-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={girl} alt=""
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className=" w-full lg:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold">BEAUTY SALON <br />
          FOR EVERY WOMEN</h1>
          <p className="py-6 w-full  md:w-7/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat 
          </p>
          <button className="btn btn-primary">Get an Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
