import React from 'react';
import { Link } from 'react-router-dom';

const VolunteerNeedPostCard = ({volunteer}) => {
    // console.log(volunteer);
    const {  thumbnail, postTitle, category, date, location} = volunteer || {};
    return (
        <div className="card  bg-base-100 shadow-sm">
        <figure className="p-6 h-[15rem]">
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
         
          <p className="font-medium">
          Location: {location} 
          </p>
          <p className="font-medium">DeadLine: {date}</p>
          
         
          <div>
            <Link
             to={`/volunteer-details`}><button className="btn btn-block bg-indigo-500 text-white">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default VolunteerNeedPostCard;