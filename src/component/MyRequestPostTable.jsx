import React from "react";

const MyRequestPostTable = ({ myRequestPost, idx, handleCancel }) => {
  const { _id, postTitle, category, date } = myRequestPost || {};
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
        <button
          onClick={() => handleCancel(_id)}
          className="btn bg-[#FA5252] text-white"
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default MyRequestPostTable;
