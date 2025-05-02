import React from 'react';
import { Link} from "react-router-dom";
const Error = () => {
    return (
        <div className='text-center my-20'>
            <h1 className='text-red-600 text-4xl font-bold'>Page Not Found</h1>

            <p className='mt-10'>
                <button>Please Go <Link to={'/'}><span className='underline font-bold'>Home</span></Link> Page.</button>
            </p>
        </div>
    );
};

export default Error;