import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  type Experience = {
    image: string;
    //location: string;
    description: string;
    price: number;
    city: string;
    title: string;
    location:{
        city:string
    }
  };
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    async function apicall() {
      try {
        const result = await axios.get(
          "http://localhost:4000/api/v1/getAllExperiences"
        );
        console.log(result.data);
        setExperiences(result.data?.data || []);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      }
    }
    apicall();
  }, []);

  return (
    <div className="min-h-screen w-11/12 mx-auto bg-gray-50 px-6 py-10">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Popular Experiences
      </h1>

      {/* Responsive Grid Layout */}
      <div className="grid gap-8 justify-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="w-[280px] h-[312px]  bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="w-full h-[170px] overflow-hidden rounded-t-xl ">
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="flex flex-col justify-between  px-3 py-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-[16px] font-semibold text-gray-900">
                    {exp.title}
                  </h2>
                  <span className="text-[12px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                    {exp.location?.city || "Unknown"}
                  </span>
                </div>
                <p className="text-[13px] text-gray-600 leading-tight">
                  {exp.description}
                </p>
              </div>

              {/* Price + Button */}
              <div className="flex items-center justify-between mt-3">
                <p className="text-2xl font-bold font-['Inter'] text-gray-900">
                  ₹{exp.price}
                </p>
                <button
                  className="bg-[#FFD643] text-gray-900 text-[14px] font-medium rounded-sm hover:cursor-pointer
                             px-3 py-1.5 w-auto  h-8 hover:bg-yellow-400 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
