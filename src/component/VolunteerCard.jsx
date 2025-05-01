import React from "react";

const VolunteerCard = ({ volunteer }) => {
  
  const { thumbnail, postTitle, category, date } = volunteer || {};
  return (
    <div>
      <div className="card h-[30rem] bg-base-100 shadow-sm">
        <figure className="p-6 h-[17rem]">
          <img
          className="rounded h-full w-full"
            src={thumbnail}
            alt={thumbnail}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{postTitle}</h2>
          <p className="font-medium">
            Category: {category} 
          </p>
          <p className="font-medium">DeadLine: {date}</p>
          <div className="card-actions justify-center">
            <button className="btn bg-indigo-500">View Details</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default VolunteerCard;
