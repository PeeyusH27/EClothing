import React from 'react'

const NewsLetter = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault()
    } 

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe and get 15% off</p>
        <p className='text-gray-400 mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ea.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full rounded-s-lg sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
            <button className='bg-black rounded-e-lg text-white text-xs px-10 py-4' type='submit'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetter