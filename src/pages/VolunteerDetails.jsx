import React from 'react';

import { useEffect, useState } from "react";

// import { Link } from "react-router-dom";
import Volunteer from "../component/Volunteer";
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';


const VolunteerDetails = () => {
    const [volunteers, setVolunteers] = useState([]);
    const { dark } = useAuth();
    const axiosSecure = useAxiosSecure()

        useEffect(() => {
            document.title = "Volunteer Details | Volunteer Connect";
        }, []);
    
      useEffect(() => {
        const fetchVolunteerData = async () => {
          const { data } = await axiosSecure.get(
            `/get-volunteer`
          );
          setVolunteers(data);
        };
        fetchVolunteerData();
      }, [axiosSecure]);
     
    return (
        <div className="lg:max-w-6xl md:max-w-2xl mx-auto">
        <div className={`mb-6 `}>
          <h1 className={`text-center text-3xl font-medium py-12 ${dark && 'text-white'}`}>
          All  Volunteer Details
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

export default VolunteerDetails;