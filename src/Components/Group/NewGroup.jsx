import { CircularProgress } from '@mui/material'
import React, { useState } from 'react'

import { BsArrowLeft, BsCheck2 } from 'react-icons/bs'

const NewGroup = () => {
    const [isImageUploading,setISImageUploading]=useState(false);
    const [groupName,setGroupName]=useState();
   
  return (
    <div className='w-full h-full'>
      <div className='flex items-center space-x-10 bg-[#008069] text-white pt-16 px-10 pb-5'>
          <BsArrowLeft className='cursor-pointer text-2xl font-bold'/>
          <p className='text-xl font-semibold'>New Group</p>
      </div>
      <div className='flex flex-col justify-center items-center my-12'>
         <label htmlFor="imgInput" className='relative'>
            <img className='' src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579__340.png" alt="" />
            {isImageUploading &&(
                <CircularProgress className='absolute top-[5rem] left-[6rem]' />
            ) }
         </label>
         <input type="file" id='imgInput' className='hidden' onChange={()=>console.log("ImageOnChange")} />
      </div>
      <div className='w-full flex justify-between items-center py-2'>
        <input type="text" className='w-full outline-none border-b-2 border-green-700 px-2 bg-transparent'
        placeholder='Group Subject'
        onChange={(e)=>setGroupName(e.target.value)} />
      </div>
      {groupName && <div className='py-10 bg-slate-200 flex items-center justify-center'> 
        <button><div className='bg-[#0c977d] rounded-full p-4'>
        <BsCheck2 className='text-white font-bold text-3xl'/>
        </div></button></div>}
    </div>
  )
}

export default NewGroup
