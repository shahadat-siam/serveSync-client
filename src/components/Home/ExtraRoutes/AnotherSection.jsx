 
const AnotherSection = () => {
    return (
        <div className="relative hidden lg:flex mb-5">
           <div  className="w-full">  <img className=" h-[50vh] w-full" src="https://i.ibb.co/0sfzWyZ/markus-spiske-Mb-G7kw-Wpt-II-unsplash.jpg" alt="" /></div>
            <div className="absolute  bg-[#111111e0] w-full h-full top-0 left-0  px-7 pb-4 md:flex gap-4 justify-between">
                <div className="bg-[#6f3d7950] p-4 flex flex-col md:mt-5  items-start gap-8 md:max-w-[30%]">
                    <h2 className="text-3xl font-semibold font-Sedan text-white text-start">Millions of People are waiting for your help...</h2>
                     
                    <button className="btn btn-outline rounded-none uppercase btn-secondary">Become a volunteer</button>
                </div>
                <div className="bg-[#4b279e48] p-4 flex flex-col  md:mt-5 items-start gap-9 md:max-w-[30%]">
                    <h2 className="text-3xl font-semibold font-Sedan text-white text-start">Why not join the Volunteers to help them?</h2>
                    <button className="btn btn-outline rounded-none uppercase btn-secondary">make a donation</button>
                </div>
                <div className="bg-[#2baf4149] p-4 flex flex-col md:mt-5 items-start gap-9 md:max-w-[30%]">
                    <h2 className="text-3xl font-semibold font-Sedan text-white text-start">Served over Millions of people</h2>
                    <button className="btn btn-outline rounded-none uppercase btn-secondary">check our program</button>
                </div>
            </div>
        </div>
    );
};

export default AnotherSection;