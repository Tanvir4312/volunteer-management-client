import React from 'react';

const VolunteerNeedPostTable = ({volunteer, idx}) => {
    console.log(volunteer);
    
  const { _id, postTitle, category, date, location, noOfVolunteersNeeded } = volunteer || {};
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
        <td>{location}</td>
        <td>{noOfVolunteersNeeded}</td>
      
      </tr>
    );
};

export default VolunteerNeedPostTable;