import axios from "axios";
import React, { useEffect, useState } from "react";
import VolunteerCard from "./VolunteerCard";
import { Link } from "react-router-dom";

const VolunteerNeed = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const fetchVolunteerData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/get-volunteer`
      );
      setVolunteers(data);
    };
    fetchVolunteerData()
  }, []);
  console.log(volunteers);
  return <div className="mb-6">
    <h1 className="text-center text-3xl font-medium my-12">Volunteer Needs Now</h1>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {
            volunteers.map(volunteer => <VolunteerCard key={volunteer._id} volunteer={volunteer}></VolunteerCard>)
        }
    </div>
    <div>
        
        <Link to={'/all-volunteer-need-posts'}><button className="btn mt-7"><img className="mr-2" src="https://img.icons8.com/?size=48&id=12958&format=png" alt="" /> See All Button</button></Link>
      </div>
  </div>;
};

export default VolunteerNeed;
