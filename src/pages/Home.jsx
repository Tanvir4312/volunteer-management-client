import React from 'react';
import Slider from '../component/Slider';
import VolunteerNeed from '../component/VolunteerNeed';
import Upcoming from '../component/Upcoming';




const Home = () => {
    return (
        <div className=''>
            <Slider></Slider>
            <VolunteerNeed></VolunteerNeed>
            <Upcoming></Upcoming>
          
            
        </div>
    );
};

export default Home;