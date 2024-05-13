import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const NeedVolunteer = () => { 
    const [volunteer, setVolunteer] = useState([]);
  // console.log(volunteer);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/volunteer`);
      setVolunteer(data);
    };
    getData();
  }, []);

    return (
        <div>
            <h2 className="text-center font-semibold font-Sedan text-4xl">Need Volunteer Page</h2> 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 p-8 gap-5 xl:grid-cols-4">
        { volunteer.map((item) => (
          <div
            key={item._id}
            className="card card-compact duration-200 hover:shadow-md hover:-translate-y-0.5 p-0 rounded-none border"
          >
            <figure>
              <img
                // className="hover:scale-105 duration-300 overflow-hidden"
                src={item.thumbnail}
                alt="Shoes"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title font-Sedan font-semibold text-2xl">{item.category}</h2>
              <p className="text-start text-gray-500">{item.post_title}</p>
              <p className="text-start">Deadline : {new Date(item.deadline).toLocaleDateString()}</p>
              <div className="card-actions ">
              <Link to={`/view-details/${item._id}`}><button className="btn hover:bg-[#03AED2] px-4 text-white bg-[#03AED2]">View Details</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
    );
};

export default NeedVolunteer;