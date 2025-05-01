import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VolunteerForm from "../component/VolunteerForm";

// import useAxiosSecure from "../hooks/useAxiosSecure";

const BeAVolunteer = () => {
  const { id } = useParams();
//   const axiosSecure = useAxiosSecure();
  const [volunteer, setVolunteer] = useState({});
  const [startDate, setStartDate] = useState(new Date());

  const fetchDataById = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/volunteer-get/${id}`);
    setVolunteer(data);
    setStartDate(new Date(data.date))
  };

  useEffect(() => {
    fetchDataById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="lg:max-w-6xl md:max-w-2xl mx-auto">
    <h2 className="text-3xl font-bold text-center my-8">VOLUNTEER</h2>
    <VolunteerForm singleVolunteer={volunteer} startDate={startDate} setStartDate={setStartDate}></VolunteerForm>
  </div>;
};

export default BeAVolunteer;
