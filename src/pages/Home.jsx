import React, { useEffect } from 'react';
import Slider from '../component/Slider';
import VolunteerNeed from '../component/VolunteerNeed';
import Upcoming from '../component/Upcoming';
import VolunteerSpotlight from '../component/VolunteerSpotlight';




const Home = () => {
    useEffect(() => {
        document.title = "Home | Volunteer Connect";
    }, []);
    return (
        <div className=''>
          
           
            <Slider></Slider>
            <VolunteerNeed></VolunteerNeed>
            <Upcoming></Upcoming>
            <VolunteerSpotlight></VolunteerSpotlight>
          
            
        </div>
    );
};

export default Home;