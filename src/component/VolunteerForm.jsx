import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

const VolunteerForm = ({ singleVolunteer, startDate, setStartDate }) => {
  const { user } = useAuth();
  //   const navigate = useNavigate();

  
  const {
    thumbnail,
    postTitle,
    category,
    description,
    noOfVolunteersNeeded,
    email,
    name,
    location,
    _id
  } = singleVolunteer || {};

  const handleVolunteer = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

      const volunteerData = {
        organizer_email: initialData.email,
       organizer_name: initialData.name,
        thumbnail: initialData.thumbnail,
        postTitle: initialData.postTitle,
        description: initialData.description,
        category: initialData.category,
        location: initialData.location,
        no_of_volunteers_needed: Number(initialData.noOfVolunteersNeeded),
        date: initialData.date,
        volunteer_email: initialData.volunteerEmail,
        volunteer_name: initialData.volunteerName,
        suggestion: initialData.suggestion,
        status: initialData.status,
        id: _id

      };
      // same email validation
    if(initialData.organizer_email === user?.email){
return toast.error('Invalid Person')
    }

      try {
        await axios.post(
          `${import.meta.env.VITE_API_URL}/volunteer-request`,
          volunteerData
        );

        toast.success("You have successfully made a request");
        // navigate("/");
      } catch (err) {
        toast.error(err.response.data);
      }
  };

  return (
    <div className="my-8 bg-amber-100/50 p-10 rounded-lg">
      {/* Input field Form */}
      <form onSubmit={handleVolunteer}>
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
              defaultValue={thumbnail}
              readOnly
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
              defaultValue={postTitle}
              readOnly
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
            defaultValue={description}
            readOnly
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
            {category && (
              <select
                name="category"
                defaultValue={category}
                readOnly
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
              defaultValue={location}
              readOnly
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
              defaultValue={noOfVolunteersNeeded}
              readOnly
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
              defaultValue={name}
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
              defaultValue={email}
              readOnly
              className="input input-md w-full"
            />
          </div>
        </div>

        {/* Line No:6 */}
        <div className="md:flex gap-6 w-full my-3">
          {/* Volunteer name */}
          <div className="md:w-2/4">
            <div>
              <label htmlFor="">Volunteer name</label>
            </div>
            <input
              type="text"
              name="volunteerName"
              defaultValue={user && user.displayName}
              readOnly
              className="input input-md w-full"
            />
          </div>

          {/* Volunteer email */}
          <div className="md:w-2/4">
            <div>
              <label htmlFor="">Volunteer email</label>
            </div>

            <input
              type="text"
              name="volunteerEmail"
              defaultValue={user && user.email}
              readOnly
              className="input input-md w-full"
            />
          </div>
        </div>

        {/* Line No:7 */}
        <div className="md:flex gap-6 w-full my-3">
          {/* Suggestion */}
          <div className="md:w-2/4">
            <div>
              <label htmlFor="">Suggestion</label>
            </div>
            <input
              type="text"
              name="suggestion"
              placeholder="suggestion"
              className="input input-md w-full"
            />
          </div>

          {/* Status */}
          <div className="md:w-2/4">
            <div>
              <label htmlFor="">Status</label>
            </div>

            <input
              type="text"
              name="status"
              defaultValue={"Requested"}
              readOnly
              className="input input-md w-full"
            />
          </div>
        </div>

        {/* Button */}
        <button className="btn btn-block bg-indigo-500 mt-3 text-white font-medium">
          Request
        </button>
      </form>
    </div>
  );
};

export default VolunteerForm;
