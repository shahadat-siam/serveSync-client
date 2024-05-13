import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import swal from "sweetalert";

const MyNeedPost = () => {

    const {user} = useContext(AuthContext)
    const [data, setData] = useState([])
    console.log(data)
    
    useEffect(() => { 
      getData()
    }, [user]);
    const getData = async () => {
      const {data} = await axios(`${import.meta.env.VITE_API_URL}/volunteer/${user?.email}`, {withCredentials: true } )
      setData(data)
    }

    const hundleDelete = async (id) => {
        try{
          const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/volunteer/${id}` ) 
          swal({
            title: "Done",
            text: "successfully deleted",
            icon: "success",
            dangerMode: true,
          })
          getData()
        }catch(error){
          console.log(error)
          swal({
            title: "Done",
            text: `${error.message}`,
            icon: "warning",
            dangerMode: true,
          })
        }
      }
    

  return (
    <div>
      <h2 className="font-semibold text-3xl font-Sedan mb-4">My Need Volunteer Post</h2>
      {
        !data.length && <h2 className="font-semibold text-3xl text-center">I Have No Post Yet</h2>
      }
       { data.length &&
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr> 
              <th className="text-[16px] text-gray-500">Category</th>
              <th className="text-[16px] text-gray-500">Title</th>
              <th className="text-[16px] text-gray-500">Deadline</th>
              <th className="text-[16px] text-gray-500">Edit</th>
            </tr>
          </thead>
          <tbody> 
             {
                data.map(data => <tr key={data._id}> 
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
                        <Link to={`/update/${data._id}`}>
                            <button  className="btn btn-ghost btn-xs">Update</button>
                        </Link> 
                      <button onClick={() => hundleDelete(data._id)} className="btn btn-ghost btn-xs">Delete</button>
                    </th>
                  </tr> )
             }
          </tbody> 
        </table>
        </div>
       }
    </div>
  );
};

export default MyNeedPost;
