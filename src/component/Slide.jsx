import React from "react";

const Slide = ({ image, text }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="h-[30rem] bg-cover bg-black/40 bg-blend-overlay"
    >
      <div className="">
        <div className="relative -bottom-96 text-center md:px-20">
          <h3 className="text-white md:text-3xl font-medium">{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default Slide;
