import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
import axios from "axios";
import swal from "sweetalert";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const BeAVolunteer = () => {
    const allPost = useLoaderData()
    // console.table(allPost)
    const {_id, category, deadline, description, postTitle, location, volunteer, OrganizerName, thumbnail, email} = allPost
    // console.log(allPost)
    const {user} = useContext(AuthContext)
    // console.log(user.email)
    const [startDate, setStartDate] = useState(new Date());
     
    const hundleFormSubmit = async (e) => { 
        e.preventDefault() 
        const form = e.target  

        const category = form.category.value 
        const deadline = startDate 
        const description = form.description.value  
        const postTitle = form.postTitle.value
        const location = form.location.value
        const volunteer = form.volunteer.value
        const volunteerName = form.volunteerName.value
        const thumbnail = form.thumbnail.value
        const email = form.volunteeremail.value
        const status = 'requested'
        // console.log(email)
        const addPost = {
            category, deadline, status, description, postTitle, location, volunteer, volunteerName, thumbnail, email
        } 

        try{
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/beAVolunteer`, addPost)
            swal({
              title: "Done",
              text: "successfully added data",
              icon: "success",
              dangerMode: true,
            }) 
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
        <div className="p-5">
            <h2 className="text-center font-Sedan font-semibold text-4xl">Be a volunteer</h2>
            <form onSubmit={hundleFormSubmit} className="border-gray-100 my-6 p-5 max-w-3xl space-y-6 mx-auto border-[1px]">

            <div className="md:flex gap-4"> 
                <div className='flex flex-col '>
                    <label className=' font-Sedan font-semibold text-lg' htmlFor='category'>
                        Category
                    </label>
                    <select name='category' id='category' disabled defaultValue={category}  className='border p-2 md:w-52 w-full rounded-md' >
                        <option value='Healthcare'>Healthcare</option>
                        <option value='Education'>Education</option>
                        <option value='Social Service'>Social Service</option>
                        <option value='>Animal Welfare'>Animal Welfare</option>
                    </select>
                </div>
                <div className="w-full">
                    <label htmlFor="postTitle"  className="font-Sedan text-lg py-2 font-medium">Post Title</label>
                    <input type="text" id="postTitle" disabled defaultValue={postTitle} name="postTitle"  className="p-2 bg-gray-100 rounded border-[1px] outline-none w-full " />
                </div>
                <div className="w-full">
                    <label htmlFor="location" className="font-Sedan text-lg py-2 font-medium">Location</label>
                    <input type="text" id="location" disabled defaultValue={location} name="location" className="p-2 bg-gray-100 rounded border-[1px] outline-none w-full " />
                </div>
            </div>

            <div className="md:flex gap-4">
                <div className="w-full">
                    <label htmlFor="volunteer" className="font-Sedan text-lg py-2 font-medium">No. Of Volnteer</label>
                    <input type="text" id="volunteer" disabled defaultValue={volunteer} name="volunteer"  className="p-2 bg-gray-100 rounded border-[1px] outline-none w-full " />
                </div> 
                <div className='flex flex-col w-full '>
                    <label className=' text-lg font-Sedan font-semibold'>Deadline</label>
                    {new Date(deadline).toLocaleDateString()}
                </div>
                <div className="w-full">
                    <label htmlFor="OrganizerName" className="font-Sedan text-lg py-2 font-medium">Organizer name</label>
                    <input type="text" id="OrganizerName" name="OrganizerName" defaultValue={OrganizerName} disabled className="p-2 bg-gray-100 rounded border-[1px] outline-none w-full " />
                </div>
            </div>

            <div className="md:flex gap-4">
                <div className="w-full">
                    <label htmlFor="volunteerName" className="font-Sedan text-lg py-2 font-medium">Volunteer name</label>
                    <input type="text" id="volunteerName" name="volunteerName" disabled defaultValue={user?.displayName} className="p-2 bg-gray-100 rounded border-[1px] outline-none w-full " />
                </div>
                <div className="w-full">
                    <label htmlFor="volunteeremail" className="font-Sedan text-lg py-2 font-medium">Volunteer Email</label>
                    <input type="email" id="volunteeremail" name="volunteeremail" disabled defaultValue={user.email} className="p-2 bg-gray-100 rounded border-[1px] outline-none w-full " />
                </div> 
            </div>

            <div className="md:flex gap-4">
                <div className="w-full">
                    <label htmlFor="thumbnail" className="font-Sedan text-lg py-2 font-medium">Thumbnail </label>
                    <input type="url" id="thumbnail" disabled defaultValue={thumbnail} name="thumbnail"  className="p-2 bg-gray-100 rounded border-[1px] outline-none w-full " />
                </div>
                <div className="w-full">
                    <label htmlFor="OrganizerEmail" className="font-Sedan text-lg py-2 font-medium">Organizer Email</label>
                    <input type="email" id="OrganizerEmail" name="email" defaultValue={email} disabled className="p-2 bg-gray-100 rounded border-[1px] outline-none w-full " />
                </div> 
            </div>

            <div className="w-full">
                <div className="w-full ">
                    <label className='font-Sedan font-semibold text-lg' htmlFor='description'>
                        Description
                    </label>
                    <textarea disabled defaultValue={description} className='w-full mt-2 px-4 py-2  bg-gray-100  border-[1px] outline-none  rounded-md  ' name='description' id='description' ></textarea>
                </div> 
            </div>
            <div className="w-full">
                <input type="submit" value='Request' className="w-full  btn hover:bg-[#03AED2] text-[16px] text-white font-semibold bg-[#03AED2]" />
            </div>
        </form>
        </div>
    );
};

export default BeAVolunteer;