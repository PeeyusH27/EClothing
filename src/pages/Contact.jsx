import React from 'react'
import Title from '../components/Title'

const Contact = () => {
  return (
    <div className='flex justify-center items-center h-[40vh] p-8'>
      <div className="left h-full w-full border-r-2 border-black border-opacity-25 flex justify-center items-center">
        <img src='/src/assets/mainlogo.jpeg' className='w-2/3' alt="" />
      </div>
      <div className="right p-4 flex-col text-center items-center h-full w-full">
        <div className="content">
          <h1 className='text-3xl font-semibold'>Contact Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis sit aperiam dignissimos illo voluptas quasi soluta reprehenderit, consectetur ipsum repudiandae cum et, nam quaerat est nulla distinctio perferendis minus!
            Numquam ipsam sequi quam reprehenderit corporis commodi atque in nostrum deserunt, eos suscipit saepe culpa harum, voluptatum optio maiores est? Aliquid sint exercitationem commodi quos provident, modi vitae cum porro!</p>
          <hr className='m-2' />
          <div className="details flex p-1">
            <h2 className=' flex flex-col font-bold w-full'>Phone: <span>+19-889-4363-627</span></h2>
            <p><span className='font-bold'>Address: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit error beatae amet. Quisquam facilis nobis error vitae quos veniam!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact