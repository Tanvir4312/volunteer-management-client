import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddVolunteer = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  const navigate = useNavigate();
  const { dark } = useAuth();

      useEffect(() => {
          document.title = "Add Volunteer | Volunteer Connect";
      }, []);

  const handleAdd = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    const volunteerData = {
      email: initialData.email,
      name: initialData.name,
      thumbnail: initialData.thumbnail,
      postTitle: initialData.postTitle,
      description: initialData.description,
      category: initialData.category,
      location: initialData.location,
      noOfVolunteersNeeded: Number(initialData.noOfVolunteersNeeded),
      date: initialData.date,
    };

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/add-volunteer`,
        volunteerData
      );
      
      toast.success("Volunteer data add successfully");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div className="lg:max-w-6xl md:max-w-2xl mx-auto py-10">
      <h1 className="text-center text-3xl font-bold">
        <span className={`${dark && 'text-white'}`}>Add</span> <span className="text-amber-500">Volunteer</span>{" "}
      </h1>

      <div className="my-8 bg-amber-100/50 p-10 rounded-lg">
        {/* Input field Form */}
        <form onSubmit={handleAdd}>
          {/* Line No:1 */}
          <div className="md:flex gap-6 w-full">
            {/* Thumbnail */}
            <div className="md:w-2/4">
              <div>
                <label htmlFor="">Thumbnail</label>
              </div>
              <input
                type="text"
                name="thumbnail"
                placeholder="Thumbnail"
                className="input input-md w-full"
              />
            </div>

            {/* Post Title */}
            <div className="md:w-2/4">
              <div>
                <label htmlFor="">Post Title</label>
              </div>
              <input
                type="text"
                name="postTitle"
                placeholder="Post Title"
                className="input input-md w-full"
              />
            </div>
          </div>

          {/* Line No:2 */}
          {/* Description */}
          <div className="my-3">
            <div>
              <label htmlFor="">Description</label>
            </div>
            <textarea
              placeholder="Description"
              name="description"
              className="textarea textarea-md w-full"
            ></textarea>
          </div>

          {/* Line No:3 */}
          <div className="md:flex gap-6 w-full">
            {/* Category */}
            <div className="md:w-2/4">
              <div>
                <label htmlFor="">Category</label>
              </div>
              <select
                name="category"
                className="w-full border border-gray-300 py-2 bg-white rounded"
                defaultValue={'Select a category'}
              >
                <option disabled>
                  Select a category
                </option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="socialService">Social service</option>
                <option value="animalWelfare">Animal welfare</option>
              </select>
            </div>

            {/* Location  */}
            <div className="md:w-2/4">
              <div>
                <label htmlFor="">Location </label>
              </div>
              <input
                type="text"
                name="location"
                placeholder="Location "
                className="input input-md w-full"
              />
            </div>
          </div>

          {/* Line No:4 */}
          <div className="md:flex gap-6 w-full my-3">
            {/* No. of volunteers needed */}
            <div className="md:w-2/4">
              <div>
                <label htmlFor="">No. of volunteers needed</label>
              </div>
              <input
                type="number"
                name="noOfVolunteersNeeded"
                placeholder="No. of volunteers needed"
                className="input input-md w-full"
              />
            </div>

            {/* Deadline  */}
            <div className="md:w-2/4">
              <div>
                <label htmlFor="">Deadline </label>
              </div>

              <DatePicker
                name="date"
                className="bg-white py-2 pl-2 border border-gray-300 rounded"
                selected={startDate}
                onChange={(data) => setStartDate(data)} //only when value has changed
              />
            </div>
          </div>

          {/* Line No:5 */}
          <div className="md:flex gap-6 w-full">
            {/* Organizer name */}
            <div className="md:w-2/4">
              <div>
                <label htmlFor="">Organizer name</label>
              </div>
              <input
                type="text"
                name="name"
                defaultValue={user && user.displayName}
                readOnly
                placeholder="Organizer name"
                className="input input-md w-full"
              />
            </div>

            {/* Organizer email */}
            <div className="md:w-2/4">
              <div>
                <label htmlFor="">Organizer email</label>
              </div>
              <input
                type="text"
                name="email"
                defaultValue={user && user.email}
                readOnly
                placeholder="Organizer email"
                className="input input-md w-full"
              />
            </div>
          </div>

          {/* Button */}
          <button className="btn btn-block bg-indigo-500 mt-3 text-white font-medium">
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVolunteer;
