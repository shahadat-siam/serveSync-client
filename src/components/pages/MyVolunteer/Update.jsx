import { useState } from "react";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";   
import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
 
const Update = () => { 
    const data = useLoaderData() 
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const {user} = useAuth()
    const [startDate, setStartDate] = useState(new Date()); 

    const {_id, category, deadline, description, postTitle, location, volunteer, OrganizerName, thumbnail, email} = data
     

    const hundleFormSubmit = async (e) => { 
        e.preventDefault() 
        const form = e.target  

        const category = form.category.value 
        const deadline = startDate 
        const description = form.description.value  
        const postTitle = form.postTitle.value
        const location = form.location.value
        const volunteer = form.volunteer.value
        const OrganizerName = form.OrganizerName.value
        const thumbnail = form.thumbnail.value
        const email = form.email.value

        const updatePost = {
            category, deadline, description, postTitle, location, volunteer, OrganizerName, thumbnail, email
        } 
        // console.log(updatePost)
        try{
            const {data} = await axiosSecure.put(`/volunteer/${_id}`, updatePost)
            swal({
              title: "Done",
              text: "successfully updated post data",
              icon: "success",
              dangerMode: true,
            }) 
            navigate('/my-manage-post')
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
            <h2 className="text-center text-3xl font-Sedan font-semibold"> Update Data</h2>
            <form onSubmit={hundleFormSubmit}  className="border-gray-100 my-6 p-5 max-w-3xl space-y-6 mx-auto border-[1px]">

            <div className="md:flex gap-4"> 
                <div className='flex flex-col '>
                    <label className=' font-Sedan font-semibold text-lg' htmlFor='category'>
                        Category
                    </label>
                    <select name='category' id='category' defaultValue={category}  className='border p-2 md:w-52 w-full rounded-md' >
                        <option value='Healthcare'>Healthcare</option>
                        <option value='Education'>Education</option>
                        <option value='Social Service'>Social Service</option>
                        <option value='Animal Welfare'>Animal Welfare</option>
                    </select>
                </div>
                <div className="w-full">
                    <label htmlFor="postTitle" className="font-Sedan text-lg py-2 font-medium">Post Title</label>
                    <input type="text" id="postTitle" defaultValue={postTitle} name="postTitle"  className="p-2 bg-gray-100 rounded border-[1px] outline-none w-full " />
                </div>
                <div className="w-full">
                    <label htmlFor="location" className="font-Sedan text-lg py-2 font-medium">Location</label>
                    <input type="text" id="location" defaultValue={location} name="location" className="p-2 bg-gray-100 rounded border-[1px] outline-none w-full " />
                </div>
            </div>

            <div className="md:flex gap-4">
                <div className="w-full">
                    <label htmlFor="volunteer" className="font-Sedan text-lg py-2 font-medium">No. Of Volnteer</label>
                    <input type="text" id="volunteer" defaultValue={volunteer} name="volunteer"  className="p-2 bg-gray-100 rounded border-[1px] outline-none w-full " />
                </div> 
                <div className='flex flex-col w-full '>
                    <label className=' text-lg font-Sedan font-semibold'>Deadline</label>

                    {/* Date Picker Input Field */}
                    <DatePicker className="border p-2 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div className="w-full">
                    <label htmlFor="OrganizerName" className="font-Sedan text-lg py-2 font-medium">Organizer name</label>
                    <input type="text" id="OrganizerName" name="OrganizerName" defaultValue={user?.displayName} disabled className="p-2 bg-gray-100 rounded border-[1px] outline-none w-full " />
                </div>
            </div>

            <div className="md:flex gap-4">
                <div className="w-full">
                    <label htmlFor="thumbnail" className="font-Sedan text-lg py-2 font-medium">Thumbnail </label>
                    <input type="url" id="thumbnail" name="thumbnail" defaultValue={thumbnail}  className="p-2 bg-gray-100 rounded border-[1px] outline-none w-full " />
                </div>
                <div className="w-full">
                    <label htmlFor="OrganizerEmail" className="font-Sedan text-lg py-2 font-medium">Organizer Email</label>
                    <input type="email" id="OrganizerEmail" name="email" defaultValue={user?.email} disabled className="p-2 bg-gray-100 rounded border-[1px] outline-none w-full " />
                </div> 
            </div>

            <div className="w-full">
                <div className="w-full ">
                    <label className='font-Sedan font-semibold text-lg' htmlFor='description'>
                        Description
                    </label>
                    <textarea defaultValue={description} className='w-full mt-2 px-4 py-2  bg-gray-100  border-[1px] outline-none  rounded-md  ' name='description' id='description' ></textarea>
                </div> 
            </div>
            <div className="w-full">
                <input type="submit" value='Update Post' className="w-full  btn hover:bg-[#03AED2] text-[16px] text-white font-semibold bg-[#03AED2]" />
            </div>
        </form>
        </div>
    );
};

export default Update;