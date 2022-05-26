import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/970e664f-2df4-47ce-b4fa-446082f5abc1/c93303ef-4ce1-4a3f-9a1a-bbf54501f4a9/ID-en-20220523-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              <form className='flex w-full flex-col py-4'>
                <input className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email' />
                <input className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password' />
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                <div className='flex justify-between items-center text-small text-gray-600'>
                  <p><input className='mr-2' type="checkbox" />Remember Me</p>
                  <p>Need Help ?</p>
                </div>
                <p className='py-8'><span className='text-gray-600'>Already subscribe to Netflix ? </span>
                  <Link to='/login'>
                    Sign In
                  </Link>

                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp