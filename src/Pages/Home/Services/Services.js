import React from "react";
import icon1 from "../../../assets/icons/icon1.png";
import icon2 from "../../../assets/icons/icon2.png";
import icon3 from "../../../assets/icons/icon3.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      id: 1,
      img: icon1,
      title: `Anti Age Face Treatment`,
      price: 199,
      description: `We craft stunning and amazing web UI, using a well drrafted UX to fit your product.`,
    },
    {
      id: 2,
      img: icon2,
      title: `Hair Color & Styleing`,
      price: 99,
      description: `Amazing flyers, social media posts and brand representations that would make your brand stand out.`,
    },
    {
      id: 3,
      img: icon3,
      title: `Skin Care Treatment`,
      price: 299,
      description: `With well written codes, we build amazing apps for all platforms, mobile and web apps in general.`,
    },
  ];

  return (
    <div>
      <h2 className="font-bold mt-24 text-center text-5xl">
        Our Awesome <span className="text-primary">Services</span>
      </h2>
      
      <div className="grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-16">
        {
            services.map(service => <Service service={service} key={service.key}></Service>)
        }
      </div>
      <div className="text-center my-7">
        <button className="text-white px-6 capitalize btn btn-primary">explore more</button>
      </div>
    </div>
  );
};

export default Services;
