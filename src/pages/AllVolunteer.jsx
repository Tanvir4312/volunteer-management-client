import axios from "axios";
import React, { useEffect, useState } from "react";

// import { Link } from "react-router-dom";
import Volunteer from "../component/Volunteer";

const AllVolunteer = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const fetchVolunteerData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/get-volunteer`
      );
      setVolunteers(data);
    };
    fetchVolunteerData();
  }, []);
 
  return (
    <div className="lg:max-w-6xl md:max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-center text-3xl font-medium my-12">
        All  Volunteer
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {volunteers.map((volunteer) => (
            <Volunteer
              key={volunteer._id}
              volunteer={volunteer}
            ></Volunteer>
          ))}
        </div>
        <div>
         
        </div>
      </div>
      ;
    </div>
  );
};

export default AllVolunteer;
