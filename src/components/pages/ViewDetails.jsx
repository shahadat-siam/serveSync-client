 
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

 
const ViewDetails = () => { 

    const allPost = useLoaderData()
    console.table(allPost)
    const {_id, category, deadline, description, postTitle, location, volunteer, OrganizerName, thumbnail, email} = allPost
    // console.log(_id)
    return (
        <div >
            <h2 className="text-center font-Sedan font-semibold text-4xl py-3">View details </h2>
            <div className="md:m-6 p-5  rounded-lg md:flex gap-20 justify-center">
                <div><img src={thumbnail} className="md:max-w-[400px]" alt="" /></div>
                <div className="flex flex-col justify-start items-start gap-2">
                    <h2 className="font-Sedan font-bold text-orange-500 text-4xl pt-5 md:pt-0">{category}</h2>
                    <h2 className="font-semibold text-2xl text-gray-500 text-start">{postTitle}</h2>
                    <h2 className="font-semibold text-xl text-gray-500">Organizer :  <span className="text-orange-500">{OrganizerName}</span></h2>
                    <h2 className="bg-[#CAF4FF] px-3 py-1 text-[#5AB2FF] rounded-md"> <span className="font-semibold ">Location : </span> {location}</h2>
                    <div className="flex gap-8 items-center">
                        <h2 className="bg-[#CAF4FF] px-3 py-1 text-[#5AB2FF] rounded-md"> <span className="font-semibold">Volunteer Need :</span> {volunteer}</h2> 
                        <h2 className="bg-[#CAF4FF] px-3 py-1 text-[#5AB2FF] rounded-md"> <span className="font-semibold">Deadline :</span> {new Date( deadline).toLocaleDateString()}</h2>    
                    </div>
                    <div className="w-full bg-purple-100 p-2 text-start rounded-xl text-purple-950"> 
                        <p className="max-w-[400px]"> <span className="font-bold">Description:</span> {description}</p>
                    </div> 
                </div> 
            </div> 
             <div> <Link to={`/be-a-volunteer/${_id}`}> <button className="btn btn-secondary btn-outline">Be a Volunteer</button></Link>  </div>
             
        </div>
    );
};

export default ViewDetails;