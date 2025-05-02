
import React from "react";
import { Link } from "react-router-dom";



const MyPostsTable = ({ myPost, idx, handleDelete }) => {
  

  const { _id, postTitle, category, date } = myPost || {};
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{postTitle}</td>
      <td
        className={`text-center font-medium ${
          category === "animalWelfare" &&
          "bg-[#E0E7FF] text-[#4338CA] rounded-4xl"
        } ${
          category === "healthcare" && "bg-[#FEF9C3] text-[#854D0E] rounded-4xl"
        } ${
          category === "socialService" &&
          "bg-[#CFFAFE] text-[#0F766E] rounded-4xl"
        } ${
          category === "education" && "bg-[#FDE68A] text-[#92400E] rounded-4xl"
        }`}
      >
        {category}
      </td>
      <td>{date}</td>
      <td>
        <Link to={`/update/${_id}`}>
          <button className="btn bg-[#4C6EF5] text-white">Update</button>
        </Link>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn bg-[#FA5252] text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyPostsTable;
