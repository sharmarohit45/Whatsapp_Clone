import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const SelectedMember = ({handleRemoveMember, member}) => {

  return (
    <div className='flex items-center bg-slate-300 rounded-full'>
      <img className='w-7 h-7 rounded-full' src="https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_640.jpg" alt="" />
      <p className='px-2'>username</p>
      <AiOutlineClose onClick={handleRemoveMember} className='pr-1 cursor-pointer' />
    </div>
  )
}

export default SelectedMember
