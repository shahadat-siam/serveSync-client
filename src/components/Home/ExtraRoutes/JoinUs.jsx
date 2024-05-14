 
const JoinUs = () => {
    return (
        <div className="relative">
            <div className="my-7  "><img className="h-[60vh] md:h-full  w-full" src="https://i.ibb.co/0VPDPSW/pexels-bertellifotografia-3797402.jpg" alt="" /></div>
            <div className="absolute flex justify-center gap-2 md:gap-4 items-start flex-col p-10 top-0 w-full h-full  bg-gradient-to-r from-[#111111e3] to-[#1111117c]">
                <h2 className="md:text-7xl text-4xl font-bold md:max-w-[60%] text-start text-white">Join Us & <span className="text-orange-500">safe our socity</span> </h2>
                <p className="text-gray-300 md:max-w-[50%] text-start">a person who does something, especially helping other people, willingly and without being forced or paid to do it: The health clinic is relying on volunteers to run the office and answer the phones.</p>
                <button className="uppercase my-1 md:my-5 text-white rounded-2xl font-semibold bg-[#955E42] py-3 px-6 duration-300 transform hover:-translate-y-3 hover:bg-[#553739]">Join Now</button>
            </div>
        </div>
    );
};

export default JoinUs;