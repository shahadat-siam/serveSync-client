import axios from "axios";
import { useEffect, useState } from "react";

const VolunteerNeed = () => {
  const [volunteer, setVolunteer] = useState([]);
  console.log(volunteer);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/volunteer`);
      setVolunteer(data);
    };
    getData();
  }, []);

  return (
    <div className="my-6">
      <div>
        <h2 className="text-center font-semibold font-Sedan text-4xl">
          Volunteer Need Now
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 p-8 gap-5 xl:grid-cols-4">
        {volunteer.map((item) => (
          <div
            key={item._id}
            className="card card-compact duration-200 hover:shadow-md hover:-translate-y-0.5 p-0 rounded-none border"
          >
            <figure>
              <img
                // className="hover:scale-105 duration-300 overflow-hidden"
                src="https://i.ibb.co/zP0DbZB/matheus-ferrero-yfmj-ALh1-S6s-unsplash.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title font-Sedan font-semibold text-2xl">{item.category}</h2>
              <p className="text-start text-gray-500">{item.post_title}</p>
              <p className="text-start">{item.deadline}</p>
              <div className="card-actions ">
                <button className="btn hover:bg-[#fc3f00fa] px-4 text-white bg-[#FC4100]">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerNeed;
