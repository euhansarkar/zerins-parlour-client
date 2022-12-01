import React from "react";
import tes1 from "../../../assets/images/tes1.png";
import tes2 from "../../../assets/images/tes2.png";
import tes3 from "../../../assets/images/tes3.png";
import Testimon from "./Testimon";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      img: tes1,
      name: `Nash Patrik`,
      role: `CEO, manpol`,
      des: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat `,
      stars: 5,
    },
    {
      id: 2,
      img: tes2,
      name: `Miriam Barron`,
      role: `CEO, manpol`,
      des: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat `,
      stars: 5,
    },
    {
      id: 3,
      img: tes3,
      name: `Bria Malone`,
      role: `CEO, manpol`,
      des: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat `,
      stars: 5,
    },
  ];

  return (
    <div>
      <h2 className="text-center font-bold capitalize text-5xl">testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-16" my-8>
        {
            testimonials.map(testimon => <Testimon testimon={testimon}></Testimon>)
        }
      </div>
    </div>
  );
};

export default Testimonials;
