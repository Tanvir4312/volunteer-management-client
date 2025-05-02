import React from 'react';
import { Link } from 'react-router-dom';

const Volunteer = ({volunteer}) => {

    const {_id, location, thumbnail, postTitle, category, date, description, noOfVolunteersNeeded, email, name } = volunteer || {};

    return (
        
      <div className="card h-[40rem] bg-base-100 shadow-sm">
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
          <p className="font-medium">
          No Of Volunteers Needed: {noOfVolunteersNeeded} 
          </p>
          <p className="font-medium">
            Organizer Name: {name} 
          </p>
          <p className="font-medium">
          Organizer Email: {email} 
          </p>
          <p className="font-medium">
          Location: {location} 
          </p>
          <p className="font-medium">DeadLine: {date}</p>
          <p>
            <span className="font-medium">Description:</span> {description} 
          </p>

         
          <div>
            <Link to={`/beAVolunteer/${_id}`}><button className="btn btn-block bg-indigo-500 text-white">Be a Volunteer</button></Link>
          </div>
        </div>
      </div>
      

    );
};

export default Volunteer;