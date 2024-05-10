 import { Link } from 'react-router-dom';
import error from '../../assets/images/404Error.gif'
import { FaArrowLeft } from 'react-icons/fa';
const ErrorPage = () => {
    return (
        <div className="w-full relative">
            <img className='w-full h-[100vh]' src={error} alt="" />
            <Link to='/' className='absolute flex items-center top-4 left-5 text-white bg-gray-400 px-5 py-2 font-bold rounded'><FaArrowLeft />Back Home</Link>
        </div>
    );
};

export default ErrorPage;