import React from "react";
import a from "../assets/picture/download.jpg";

const VolunteerSpotlight = () => {
  return (
    <div className="mb-10 p-4">
      <div className="text-center my-9">
        <h1 className="text-3xl font-medium">
          🏅 Volunteer Spotlight: Hero of the Month
        </h1>
        <p className="mt-2">
          Every month, we shine a light on one exceptional volunteer whose
          dedication, compassion, and service inspire others. These heroes go
          above and beyond to make a difference — in silence, but with great
          impact. Meet this month’s changemaker and help us recognize the next
          one!
        </p>
      </div>

      <div>
        <div className="relative ml-2 top-8 -left-2 bg-amber-500 text-white text-[16px] px-2 py-[2px] font-bold rounded-md shadow-lg animate-pulse w-48">
          🌟 Hero of the Month
        </div>
        <div className="md:flex gap-10 bg-base-100 shadow-sm md:w-[60rem] p-5">
          <div className="md:w-[40%]">
            <figure className="h-full">
              <img className="w-full h-full" src={a} alt="Movie" />
            </figure>
          </div>

          <div className="md:w-[60%]">
            <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
              Ayesha Rahman
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mt-2">
              Ayesha has volunteered over 120 hours in the past 3 months,
              helping with medical camps, food drives, and community outreach in
              low-income areas. Her compassion and leadership have made a
              lasting impact on countless lives.
            </p>
            <blockquote class="mt-4 italic text-blue-600 dark:text-blue-300">
              “Volunteering has taught me that small actions, done with love,
              can change the world.”
            </blockquote>

            <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 rounded-xl">
              <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">
                👩‍💼 Admin Tip
              </h4>
              <p className="text-sm text-yellow-700 dark:text-yellow-200">
                Keep a simple nomination form (e.g., Google Form or internal
                form) linked at{" "}
                <code className="bg-yellow-100 px-1 rounded">/nominate</code>.
                Encourage volunteers and coordinators to submit monthly
                suggestions with reasons and recent contributions.
              </p>
            </div>
            <a
              href=""
              className="inline-block mt-5 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-xl transition"
            >
              Nominate the Next Hero
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerSpotlight;
