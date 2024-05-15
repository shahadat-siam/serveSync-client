import axios from "axios";
import {  useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { RiLayoutGrid2Fill, RiLayoutHorizontalLine } from "react-icons/ri"; 


const NeedVolunteer = () => {
  const [volunteer, setVolunteer] = useState([]); 
  const [layout, setLayout] = useState(1)
  console.log(layout)
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/volunteer`);
      setVolunteer(data);
    };
    getData();
  }, []);
  // console.log(volunteer.length)
 

  return (
    <div>

      <div className="flex lg:max-w-5xl mx-auto mt-5 px-6 justify-between items-center">
        <h2 className="text-center font-semibold font-Sedan text-3xl md:text-4xl">
          Need Volunteer Page
        </h2>
        <div className="flex gap-4">
          <div onClick={() => setLayout(1)} title="Card" className="text-xl cursor-pointer"><RiLayoutGrid2Fill /></div>
          <div onClick={() => setLayout(2)} title="Table" className="text-xl cursor-pointer"><RiLayoutHorizontalLine/></div>
        </div>
      </div>
       
      <div className={`grid-cols-1 ${layout === 1 ? 'grid' : 'hidden'} md:grid-cols-2 lg:grid-cols-3 my-5 p-8 lg:max-w-5xl mx-auto gap-5`}>
        {volunteer.map((item) => (
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
              <h2 className="card-title font-Sedan font-semibold text-2xl">
                {item.category}
              </h2>
              <p className="text-start text-gray-500">{item.post_title}</p>
              <p className="text-start">
                Deadline : {new Date(item.deadline).toLocaleDateString()}
              </p>
              <div className="card-actions ">
                <Link to={`/view-details/${item._id}`}>
                  <button className="btn hover:bg-[#03AED2] px-4 text-white bg-[#03AED2]">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div> 

      <div className={`overflow-x-auto ${layout === 2 ? 'flex' : 'hidden'} p-6 max-w-6xl mx-auto`}>
        <table className="table">
          {/* head */}
          <thead>
            <tr> 
              <th className="text-[16px] text-gray-500">Thumbnail</th>
              <th className="text-[16px] text-gray-500">Category</th>
              <th className="text-[16px] text-gray-500">Title</th>
              <th className="text-[16px] text-gray-500">Deadline</th>
              <th className="text-[16px] text-gray-500">Details</th>
            </tr>
          </thead>
          <tbody> 
             {
                volunteer.map(data => <tr key={data._id}>
                   
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={data.thumbnail} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div> 
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-3"> 
                        <div>
                          <div className="font-semibold text-orange-400 text-lg">{data.category}</div> 
                        </div>
                      </div>
                    </td>
                    <td>
                      {data.postTitle} 
                    </td>
                    <td>{new Date(data.deadline).toLocaleDateString()}</td>
                    <th>
                    <Link to={`/view-details/${data._id}`}>
                  <button className="btn hover:bg-[#03AED2] px-4 text-white bg-[#03AED2]">
                    View Details
                  </button>
                </Link>
                    </th>
                  </tr> )
             }
          </tbody> 
        </table>
      </div>

    </div>
  );
}; 
export default NeedVolunteer;

