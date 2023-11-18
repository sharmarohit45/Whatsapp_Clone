import React, { useState } from 'react'
import { BsArrowLeft, BsCheck2, BsPencil } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Profile = ({handleCloseOpen}) => {
  const [flag, setFlag] = useState(false);
  const [userName,setUserName]=useState();
  const navigate = useNavigate();
  
  const handleFlag=()=> {
    setFlag(true);
  }
  const handleCheckClick=()=> {
    setFlag(false);
  }
  const handleChange=(e)=>
  {
    setUserName(e.target.value);
  }
  return (
    <div className='h-full'>
      <div className='flex items-center space-x-10 bg-[#008069] text-white pt-16 px-10 pb-5' >
        <BsArrowLeft className='cursor-pointer text-2xl font-bold' onClick={handleCloseOpen} />
        <p className='cursor-pointer font-semibold'>Profile</p>
      </div>
      <div className='flex flex-col justify-center items-center my-12'>
        <label htmlFor='imgInput'>
          <img className='rounded-full w-[15vw] h-[15vw] cursor-pointer' src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg" alt="" />
        </label>
        <input type="file" id='imgInput' className='hidden' />
      </div>
      {/*  NAME SECTION */}
      <div className='bg-white px-3'>
        <p className='py-3'>Your Name</p>
        {!flag && <div className='flex w-full justify-between items-center'>
          <p className='py-3'>{userName || "userName"}</p>
          <BsPencil onClick={handleFlag} className='cursor-pointer' />
        </div>}
        {flag &&
          <div className='flex justify-between items-center py-2'>
            <input onChange={handleChange} className='w-[80%] outline-none border-b-2 border-blue-700 p-2' type="text" placeholder='Enter your name' />
            <BsCheck2 onClick={handleCheckClick} className='cursor-pointer text-2xl' />
          </div>
        }
      </div>
      <div className='px-3 my-5'>
        <p className='py-10'>this is not your username, this name will be visible to your whatsapp contects.</p>
      </div>
    </div>
  )
}

export default Profile
