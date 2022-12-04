import React from "react";

const Service = ({service}) => {
    const {image, name, price, description} = service;
  return (
    <div className="card shadow-xl border-secondary">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl w-32"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-title my-1 text-primary">${price}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
