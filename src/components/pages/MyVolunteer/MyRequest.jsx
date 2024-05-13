import { useEffect, useState} from "react";  
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
  

const MyRequest = () => {
  const { user } = useAuth();
  const axiosSecure =useAxiosSecure()
  const [data, setData] = useState([])

  useEffect(() => { 
    getData()
  }, [user]);
  const getData = async () => {
    const {data} = await axiosSecure(`/beAVolunteermail/${user?.email}`)
    setData(data)
  }
  // console.log(data)

  const hundleDelete = async (id) => {

    try{
      const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/beAVolunteer/${id}` ) 
      Swal.fire({
        title: "Canceled!",
        text: "Your request has been canceled.",
        icon: "success"
      });
      getData()
    }
    catch(error){
      console.log(error) 
    } 

    // Swal.fire({
    //   title: "Are you sure want to cancel?",
    //   text: "Before cancel confirm cancellation ",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, cancel!"
    // }).then((result) => {
    //   if (result.isConfirmed) {  
    //     try{
    //       const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/beAVolunteer/${id}` ) 
    //       Swal.fire({
    //         title: "Deleted!",
    //         text: "Your file has been deleted.",
    //         icon: "success"
    //       });
    //       getData()
    //     }
    //     catch(error){
    //       console.log(error) 
    //     } 
    //   }
    //   }) 
  }
 
  return (
    <div>
      <h2 className="font-semibold text-3xl font-Sedan mb-4">My Volunteer Request Post</h2>
      {!data.length && (
        <h2 className="font-semibold text-2xl text-center">
          I Have No Request Post Yet
        </h2>
      )}
        { data.length && 
          <div className="overflow-x-auto">
          <table className="table">
             
            <thead>
              <tr>
                <th className="text-[16px] text-gray-500">Category</th>
                <th className="text-[16px] text-gray-500">Title</th>
                <th className="text-[16px] text-gray-500">Location</th>
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
                    <div className="font-semibold text-orange-400 text-lg">
                      {data.category} 
                    </div>
                  </div>
                </div>
              </td>
              <td>{data.postTitle}</td>
              <td>{data.location}</td>
              <td>{new Date( data.deadline).toLocaleDateString()}</td>
              <th>
                {/* onClick={() => hundleDelete(data._id)} */}
                <button onClick={() => hundleDelete(data._id)} className="btn btn-ghost btn-xs">Cancel</button>
              </th>
            </tr>)
             }
            </tbody>
          </table>
        </div>
        }
    </div>
  );
};

export default MyRequest;
