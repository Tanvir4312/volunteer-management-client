import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const Update = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate()
  const [post, setPost] = useState({});
  const [startDate, setStartDate] = useState(new Date());
 
  const fetchDataById = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/volunteer-get/${id}`
    );
    setPost(data);
    setStartDate(new Date(data.date));
  };

  useEffect(() => {
    fetchDataById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());


    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/update-data/${id}`,
        initialData
      );
     toast.success('Data update successfully')
     navigate('/manage-my-posts')
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="lg:max-w-6xl md:max-w-2xl mx-auto">
      <div className="my-8 bg-amber-100/50 p-10 rounded-lg">
        {/* Input field Form */}
        <form onSubmit={handleUpdate}>
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
                defaultValue={post?.thumbnail}
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
                defaultValue={post?.postTitle}
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
              name="description"
              defaultValue={post?.description}
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
              {post?.category && (
                <select
                  name="category"
                  defaultValue={post?.category}
                  className="w-full border border-gray-300 py-2 bg-white rounded"
                >
                  <option disabled selected>
                    Select a category
                  </option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="socialService">Social service</option>
                  <option value="animalWelfare">Animal welfare</option>
                </select>
              )}
            </div>

            {/* Location  */}
            <div className="md:w-2/4">
              <div>
                <label htmlFor="">Location</label>
              </div>
              <input
                type="text"
                name="location"
                defaultValue={post?.location}
                className="input input-md w-full"
              />
            </div>
          </div>

          {/* Line No:4 */}
          <div className="md:flex gap-6 w-full my-3">
            {/* No. of volunteers needed */}
            <div className="md:w-2/4">
              <div>
                <label htmlFor="">No. of volunteers needed </label>
              </div>
              <input
                type="number"
                name="noOfVolunteersNeeded"
                defaultValue={post?.noOfVolunteersNeeded}
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
                defaultValue={user?.displayName}
                readOnly
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
                defaultValue={user?.email}
                readOnly
                className="input input-md w-full"
              />
            </div>
          </div>

          {/* Button */}
          <button className="btn btn-block bg-indigo-500 mt-3 text-white font-medium">
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
