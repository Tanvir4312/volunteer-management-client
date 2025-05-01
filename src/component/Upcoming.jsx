import React from "react";

const Upcoming = () => {
  return (
    <div>
      <div className="text-center my-9">
        <h1 className="text-3xl font-medium">🗓️ Upcoming Events & Drives</h1>
        <p className="mt-2">
          Discover opportunities to make an impact. Join a campaign near you!
        </p>
      </div>

      {/* Card Div*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Single Card - 1 */}
        <div className="card  bg-base-100 card-lg shadow-sm">
          <div className="card-body">
            <h2 className="card-title font-semibold text-gray-800">
           
              Community Clean-Up Drive
       
            </h2>
           
            <p className="text-gray-600  mt-2">
              Help us beautify the local park with fellow volunteers. All
              cleaning supplies will be provided.
            </p>

            <ul class="text-sm text-gray-500 mt-3 space-y-1">
              <li>
                <strong>Date:</strong> May 15, 2025
              </li>
              <li>
                <strong>Time:</strong> 9:00 AM – 12:00 PM
              </li>
              <li>
                <strong>Location:</strong> Central City Park
              </li>
              <li>
                <strong>Roles Needed:</strong> 15 Volunteers (Cleanup,
                Coordination)
              </li>
            </ul>
            <div>
                <button className="btn btn-block bg-indigo-500">Please Registration</button>
            </div>
          </div>
        </div>
        {/* Single Card - 2 */}
        <div className="card  bg-base-100 card-lg shadow-sm">
          <div className="card-body">
            <h2 className="card-title font-semibold text-gray-800">
           
            🩺 Free Health Check-up Camp
       
            </h2>
           
            <p className="text-gray-600  mt-2">
            Help make healthcare accessible to all. Assist in organizing a medical camp for low-income families.
            </p>

            <ul class="text-sm text-gray-500 mt-3 space-y-1">
              <li>
                <strong>Date:</strong> May 20, 2025
              </li>
              <li>
                <strong>Time:</strong> 8:00 AM – 12:00 PM
              </li>
              <li>
                <strong>Location:</strong> Downtown Community Center
              </li>
              <li>
                <strong>Roles Needed:</strong> 10 Volunteers (Reception, Queue Management, Patient Support)
              </li>
            </ul>
            <div>
                <button className="btn btn-block bg-indigo-500">Please Registration</button>
            </div>
          </div>
        </div>
        {/* Single Card - 3 */}
        <div className="card  bg-base-100 card-lg shadow-sm">
          <div className="card-body">
            <h2 className="card-title font-semibold text-gray-800">
           
            🎒 Back-to-School Supply Drive
       
            </h2>
           
            <p className="text-gray-600  mt-2">
            Support underprivileged children by helping distribute school supplies and uniforms before the new school year begins.
            </p>

            <ul class="text-sm text-gray-500 mt-3 space-y-1">
              <li>
                <strong>Date:</strong> May 26, 2025
              </li>
              <li>
                <strong>Time:</strong> 9:00 AM – 2:00 PM
              </li>
              <li>
                <strong>Location:</strong> Harmony Public School
              </li>
              <li>
                <strong>Roles Needed:</strong> 20 Volunteers (Packing, Distribution, Registration Desk)
              </li>
            </ul>
            <div>
                <button className="btn btn-block bg-indigo-500">Please Registration</button>
            </div>
          </div>
        </div>
        {/* Single Card - 4 */}
        <div className="card  bg-base-100 card-lg shadow-sm">
          <div className="card-body">
            <h2 className="card-title font-semibold text-gray-800">
           
            🐾 Animal Shelter Day of Care
       
            </h2>
           
            <p className="text-gray-600  mt-2">
            Join us for a day of love and care at the local animal shelter — help feed, bathe, and walk rescued pets.
            </p>

            <ul class="text-sm text-gray-500 mt-3 space-y-1">
              <li>
                <strong>Date:</strong> May 22, 2025
              </li>
              <li>
                <strong>Time:</strong> 9:00 AM – 01:00 PM
              </li>
              <li>
                <strong>Location:</strong> HopePaws Animal Rescue Center
              </li>
              <li>
                <strong>Roles Needed:</strong> 8 Volunteers (Feeding, Cleaning, Dog Walking)
              </li>
            </ul>
            <div>
                <button className="btn btn-block bg-indigo-500">Please Registration</button>
            </div>
          </div>
        </div>
        {/* Single Card - 5 */}
        <div className="card  bg-base-100 card-lg shadow-sm">
          <div className="card-body">
            <h2 className="card-title font-semibold text-gray-800">
           
            🌱 Tree Plantation Drive
       
            </h2>
           
            <p className="text-gray-600  mt-2">
            Take part in greening our city! Volunteer to plant trees in a local park and promote a cleaner environment.
            </p>

            <ul class="text-sm text-gray-500 mt-3 space-y-1">
              <li>
                <strong>Date:</strong> May 25, 2025
              </li>
              <li>
                <strong>Time:</strong> 4:00 PM – 6:00 PM
              </li>
              <li>
                <strong>Location:</strong> Greenview Hill Park
              </li>
              <li>
                <strong>Roles Needed:</strong> 19 Volunteers (Planting, Watering, Awareness Booth)
              </li>
            </ul>
            <div>
                <button className="btn btn-block bg-indigo-500">Please Registration</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
