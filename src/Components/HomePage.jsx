import React, { useState } from 'react'
import { TbCircleDashed } from "react-icons/tb"
import { BiCommentDetail } from "react-icons/bi"
import { AiOutlineSearch } from "react-icons/ai"
import { BsEmojiSmile, BsFilter, BsMicFill, BsThreeDotsVertical } from "react-icons/bs"
import { ImAttachment } from "react-icons/im"
import ChatCard from './ChatCard/ChatCard'
import MessageCard from './MessageCard/MessageCard'
import "./HomePage.css"

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Profile from './Profile/Profile'
import { useNavigate } from 'react-router-dom'
import CreateGroup from './Group/CreateGroup'
function HomePage() {
  const [querrys, setQuerys] = useState(null);
  const handleSearch = () => { };
  const navigate = useNavigate();
  const [currentChat, setCurrentChat] = useState(null);
  const handleClickOnChatCard = () => [setCurrentChat(true)]
  const [content, setContent] = useState("");
  const [isProfile, SetIsProfile] = useState(false);
  const [isGroup,SetIsgroup]=useState(false);
  const handleCreateNewMessage = () => {

  }
  const handleNavigate = () => {
    SetIsProfile(true)
  }
  const handleCloseOpen = () => {
    SetIsProfile(false)
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 const handleCreateGroup=()=>{

SetIsgroup(true)
 }
  return (
    <>
      <div className='relative'>
        <div className="w-full py-14 bg-[#00a884] w-full">

        </div>
        <div className="flex bg-[#f0f2f5] h-[90vh] absolute top-[3vw] left-[2vw] w-[96vw]">
          {/* profile */}
          {isGroup && <CreateGroup/>}
          {isProfile && <div className='h-full'><Profile handleCloseOpen={handleCloseOpen} /></div>}
          {!isProfile && !isGroup && <div className="left w-[30%] bg-[#e8e9ec] h-full">

            <div className='w-full'>

              {/* HOME */}

              <div className='flex justify-between items-center p-3'>
                <div onClick={handleNavigate} className='item-center space-x-3 flex'>
                  <img className='rounded-full w-10 h-10 cursor-pointer' src="https://cdn.pixabay.com/photo/2023/11/06/06/50/parrot-8368951_640.png" alt='' />
                  <p>username</p>
                </div>
                <div className="space-x-3 text-2xl flex">
                  <TbCircleDashed className='cursor-pointer' onClick={() => navigate("/Status")} />
                  <BiCommentDetail />
                  <div>
                    <BsThreeDotsVertical  id="demo-positioned-button"
                      aria-controls={open ? 'demo-positioned-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}/>
                    <Menu
                      id="demo-positioned-menu"
                      aria-labelledby="demo-positioned-button"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleCreateGroup}>Create Group</MenuItem>
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                  </div>


                </div>
              </div>

            </div>
            <div className='relative flex justify-center items-center bg-white py-4 px-3'>
              <input className="border-none outline-none bg-slate-200 rounded-md w-[93%] pl-9 py-2" type="text" placeholder="Search or start new chat"
                onChange={(e) => {
                  setQuerys(e.target.value)
                  handleSearch(e.target.value)
                }}
                value={querrys} />
              <AiOutlineSearch className='left-5 top-7 absolute' />
              <div>
                <BsFilter className='ml-4 text-3xl' />
              </div>
            </div>
            {/*all user*/}
            <div className='bg-white overflow-y-scroll h-[72vh] px-3'>
              {querrys && [1, 1, 1, 1, 1].map((item) => <div onClick={handleClickOnChatCard}><hr /><ChatCard /></div>)}
            </div>

          </div>
          }
          {/* Default whatsapp page */}
          {!currentChat && <div className='w-[70%] flex flex-col items-center justify-center h-full'>
            <div className='w-[70%] text-center'>
              <img src="https://i0.wp.com/ugtechmag.com/wp-content/uploads/2022/10/images-9.jpeg?resize=739%2C415&ssl=1" alt="" />
              <h1 className='text-4xl text-gray-600'>WhatsApp Web</h1>
              <p className='my-9'>
                send and receive message without keeping your phone online. USe Whatsapp on Up to 4 Linked devices
                and 1 phone at the same time.
              </p>
            </div>

          </div>}
          {/* Message Part */}
          {currentChat && <div className='w-[70%] relative bg-blue-200'>
            <div className='header absolute top-0 w-full bg-[#f0f2f5]'>
              <div className='flex justify-between'>
                <div className='py-3 space-x-4 flex items-center px-3'>
                  <img className='w-10 h-10 rounded-full'
                    src="https://cdn.pixabay.com/photo/2023/10/11/18/59/girl-8309312_640.jpg" alt="" />
                  <p>UserName</p>
                </div>
                <div className='py-3 flex space-x-4 items-center px-3'>
                  <AiOutlineSearch />
                 <BsThreeDotsVertical />
                </div>
              </div>
            </div>
            {/* Message Section */}
            <div className='px-10 h-[85vh] overflow-y-scroll'>
              <div className='space-y-1 flex flex-col justify-center mt-20 py-2'>
                {[1, 1, 1, 1, 1, 1, 1].map((item, i) => (<MessageCard isReqUserMessage={i % 2 == 0} content={"message"}
                />
                ))}
              </div>
            </div>
            {/* Footer Part */}
            <div className='footer bg-[#f0f2f5] absolute bottom-0 w-full py-3 text-2xl'>
              <div className='flex justify-between items-center px-5 relative'>
                <BsEmojiSmile className='cursor-pointer' />
                <ImAttachment />
                <input className="py-2 outline-none border-none bg-white pl-4 rounded-md w-[85%]" type="text"
                  placeholder="Type message"
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                  onKeyPress={(e) => {
                    if (e.key == "Enter") {
                      handleCreateNewMessage();
                      setContent("")
                    }
                  }} />
                <BsMicFill />
              </div>
            </div>
          </div>}
        </div>
      </div>


    </>
  )
}

export default HomePage

