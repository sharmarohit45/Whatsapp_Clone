import React from 'react'

const ChatCard = () => {
    return (
        <>
            <div className="flex items-center justify-center py-2 group cursor-pointer">
                <div className="w-[20%]">
                    <img className='h-14 w-14 rounded-full' src="https://media.istockphoto.com/id/1573329496/photo/multi-layers-color-texture-3d-papercut-layers-in-gradient-vector-banner-carving-art-cover.webp?b=1&s=612x612&w=0&k=20&c=3vyrUMlb4A8NFTdPuJ_tVsjbKg5B586CJjm9C9Zebbk=" alt="" />
                </div>
              <div className='pl-5 w-[80%]'>
              <div className="flex justify-between items-center">
                    <p className='text-lg'>UserName</p>
                    <p className='text-sm'>TimeStamp</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p>message....</p>
                    <div className='flex space-x-2 items-center'>
                       <p className='text-xs py-1 px-2 text-white bg-green-500 rounded-full'>5</p>
                    </div>
                </div>
              </div>
            </div>

        </>
    )
}

export default ChatCard
