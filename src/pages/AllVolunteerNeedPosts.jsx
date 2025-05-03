import axios from "axios";
import React, { useEffect, useState } from "react";
import VolunteerNeedPostCard from "../component/VolunteerNeedPostCard";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import VolunteerNeedPostTable from "../component/VolunteerNeedPostTable";

const AllVolunteerNeedPosts = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [search, setSearch] = useState("");
  const [layout, setLayout] = useState("card");
  const { dark } = useAuth();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    document.title = "All Volunteer | Volunteer Connect";
  }, []);

  useEffect(() => {
    const fetchDataBySearch = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/volunteer-data?search=${search}`
      );
      setVolunteers(data);
    };
    fetchDataBySearch();
  }, [search]);

  useEffect(() => {
    [];
    const fetchVolunteerData = async () => {
      const { data } = await axiosSecure.get(`/get-volunteer`);
      setVolunteers(data);
    };
    fetchVolunteerData();
  }, [axiosSecure]);

  const handleCardLayout = () => {
    setLayout("card");
  };
  const handleTableLayout = () => {
    setLayout("table");
  };


  return (
    <div className="lg:max-w-6xl md:max-w-2xl mx-auto">
      <div className="mb-6">
        <h1
          className={`text-center text-3xl ${
            dark && "text-white"
          } font-medium py-12`}
        >
          All Volunteer Need Posts
        </h1>

        <div className="md:w-[400px] mx-auto mb-7">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className={`py-2 border border-gray-200 px-3 rounded w-full ${
              dark && "text-white"
            }`}
            type="search"
            placeholder="Search"
          />
        </div>
        <div className="text-end md:relative bottom-[40px]">
          <button onClick={handleCardLayout} className={`mr-4 cursor-pointer ${dark && 'bg-white rounded'}`}>
            <img src="https://img.icons8.com/?size=32&id=22131&format=png" alt="" />
          </button>
          <button onClick={handleTableLayout} className={`cursor-pointer ${dark && 'bg-white rounded'}`}>
            <img src="https://img.icons8.com/?size=30&id=61027&format=png" alt="" />
          </button>
        </div>

{/* Card */}
        {layout === "card" && (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {volunteers.map((volunteer) => (
              <VolunteerNeedPostCard
                key={volunteer._id}
                volunteer={volunteer}
              ></VolunteerNeedPostCard>
            ))}
          </div>
        )}

        {/* Table */}
        {
          layout === 'table' &&
          <div className="overflow-x-auto">
              <table className={`table ${dark && "text-white"}`}>
                {/* head */}
                <thead className={`${dark && "text-white"}`}>
                  <tr>
                    <th></th>
                    <th>Post title</th>
                    <th className="text-center">Category</th>
                    <th>Deadline</th>
                    <th>location</th>
                    <th>Volunteers Needed</th>
                  </tr>
                </thead>
                <tbody>
                  {volunteers.map((volunteer, idx) => (
                    <VolunteerNeedPostTable
                      
                    volunteer={volunteer}
                      idx={idx}
                      key={volunteer._id}
                    ></VolunteerNeedPostTable>
                  ))}
                </tbody>
              </table>
            </div>
        }
        <div></div>
      </div>
    </div>
  );
};

export default AllVolunteerNeedPosts;
