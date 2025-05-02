import axios from 'axios';
import React, { useEffect, useState } from 'react';
import VolunteerNeedPostCard from '../component/VolunteerNeedPostCard';

const AllVolunteerNeedPosts = () => {
    const [volunteers, setVolunteers] = useState([]);
    const [search, setSearch] = useState('')


    useEffect(() =>{
        const fetchDataBySearch = async () => {
            const { data } = await axios.get(
              `${import.meta.env.VITE_API_URL}/volunteer-data?search=${search}`
            );
            setVolunteers(data);
          };
          fetchDataBySearch()
    },[search])
    
      useEffect(() => {[]
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
          All  Volunteer Need Posts
          </h1>

          <div className='w-[400px] mx-auto mb-7'>
          <input
          onChange={( e)=> setSearch(e.target.value)} 
          className='py-2 border border-gray-200 px-3 rounded w-full' 
          type="search" 
          
          placeholder='Search' />
          </div>


          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {volunteers.map((volunteer) => (
              <VolunteerNeedPostCard
                key={volunteer._id}
                volunteer={volunteer}
              ></VolunteerNeedPostCard>
            ))}
          </div>
          <div>
           
          </div>
        </div>
        </div>
    );
};

export default AllVolunteerNeedPosts;