import React from "react";

const Testimon = ({ testimon }) => {
  const { img, name, role, des, stars } = testimon;
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <div className="flex flex-col md:flex-row items-center space-x-4">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} />
            </div>
          </div>
          <div className="my-4">
            <h2 className="font-bold text-xl">{name}</h2>
            <p><strong>{role}</strong></p>
          </div>
        </div>
        <p>{des}</p>
        <div className="card-actions justify-end">
            Rating: {stars}
        </div>
      </div>
    </div>
  );
};

export default Testimon;
