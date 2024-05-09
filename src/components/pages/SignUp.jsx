import swal from 'sweetalert';
import logo from '../../assets/images/OriginalLogo.png' 
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const SignUp = () => {
  const {signInWithGoogle, user, setUser, createUser, updateUserProfile,} = useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state || '/'

   // ------ Sign up -----
   const hundleCreateUser = async (e) => {
    e.preventDefault() 
    const form = e.target
    const name = form.name.value  
    const email = form.email.value
    const password = form.password.value
    const photo = form.photo.value
    console.log(name,email,password,photo)
    try{
      const result = await createUser(email,password)
      console.log(result)
      await updateUserProfile(name, photo)
      setUser({...user,photoURL: photo, displayName: name})

      navigate(from, {replace:true})
      swal({
        title: "Done",
        text: "You hae successfully create account",
        icon: "success",
        dangerMode: true,
      })
    }
    catch(err){
      console.log(err)
    }
  }  

   //---- google sign in -------
   const hundleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
      swal({
        title: "Done",
        text: "You hae successfully logged in",
        icon: "success",
        dangerMode: true,
      })
      navigate(from, {replace:true})
    }
    catch(err) {
        console.log(err)
      } 
  }

  return (
    <div className='flex my-10 justify-center items-center max-w-2xl mx-auto '> 
      <div className='w-full mx-4 border border-gray-200 px-6 py-8 md:px-8 lg:w-1/2'>
          <div className='flex justify-center mx-auto'>
            <img
              className='w-auto h-7 sm:h-8'
              src={logo}
              alt=''
            />
          </div>

          <p className=' text-xl text-center text-gray-600 '>
            Please Sign up!
          </p> 
           
          <form onSubmit={hundleCreateUser}>

          <div className='mt-4'>
              <label
                className='block mb-2 text-start text-sm font-medium text-gray-600 '
                htmlFor='SignUpName'
              >
                Name
              </label>
              <input
                id='SignUpName' 
                name='name'
                className='block w-full px-2 py-1 text-gray-700  border  outline-none   '
                type='text'
                placeholder="name"
              />
            </div>

            <div className='mt-4'>
              <label
                className='block mb-2 text-start text-sm font-medium text-gray-600 '
                htmlFor='signupEmailAddress'
              >
                Email Address
              </label>
              <input
                id='signupEmailAddress' 
                name='email'
                className='block w-full px-2 py-1 text-gray-700  border  outline-none   '
                type='email'
                placeholder=" email"
              />
            </div>

            <div className='mt-4'>
              <div className='flex justify-between'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='Photo'
                >
                  Photo URL
                </label>
              </div>

              <input
                id='Photo' 
                name='photo'
                className='block w-full px-2 py-1 text-gray-700  border  outline-none  '
                type='url'
                placeholder="photo"
              />
            </div>

            <div className='mt-4'>
              <div className='flex justify-between'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='loggingPassword'
                >
                  Password
                </label>
              </div>

              <input
                id='loggingPassword' 
                name='password'
                className='block w-full px-2 py-1 text-gray-700  border  outline-none  '
                type='password'
                placeholder="password"
              />
            </div>

            {/* <div className='mt-4'>
               <label htmlFor="name" className='text-start'>Name</label>
               <input type="text" id='name' name='name' className='w-full px-2 py-1' placeholder='name' />
              
            </div> */}
            
            <div className='mt-6'>
              <button
                type='submit'
                className='w-full px-6 py-2 text-sm font-medium tracking-wide text-white capitalize bg-[#0095f6] rounded-lg hover:bg-[#0095f6] '
              >
                Sign up
              </button>
            </div>
          </form>

          <div className='flex items-center justify-center mt-4'> 
            <div className='text-sm uppercase text-center text-gray-500  hover:underline'>
              or sign up with google
            </div> 
          </div>

          <div onClick={hundleGoogleSignIn} className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '>
            <div className='px-4 py-2'>
              <svg className='w-6 h-6' viewBox='0 0 40 40'>
                <path
                  d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                  fill='#FFC107'
                />
                <path
                  d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                  fill='#FF3D00'
                />
                <path
                  d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                  fill='#4CAF50'
                />
                <path
                  d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                  fill='#1976D2'
                />
              </svg>
            </div>

            <span className='w-5/6 px-4 py-3 font-bold text-center'>
              Sign in with Google
            </span>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b  md:w-1/4'></span>

            <Link
              to='/login'
              className='text-xs text-gray-500 uppercase  hover:underline'
            >
              or Log in
            </Link>

            <span className='w-1/5 border-b  md:w-1/4'></span>
          </div>
      </div> 
    </div>
  );
};

export default SignUp;
