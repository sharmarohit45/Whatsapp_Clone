import React, { useState } from 'react'
import { Alert, Button, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { green } from '@mui/material/colors';
const SignIN = () => {
  const [openSnackbar,setOpenSnackbar]=useState(false);
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
  e.preventDefault()
    console.log("handle submit")
    setOpenSnackbar(true)
  }
  const handleChange = () => {

  }
  const handleSnackbarClose=()=>{
    setOpenSnackbar(false)
  }
  return (
    <div className=''>
      <div className='flex justify-center items-center h-screen'>
        <div className='w-[30%] p-10 shadow-md bg-white'>
          <form onSubmit={handleSubmit} className='space-y-5'>
            <div>
              <p className='mb-2'>Email</p>
              <input type="text" value={inputData.email} onChange={handleChange} placeholder='Enter your email' className='py-2 outline outline-green-600 w-full rounded-md border' />
            </div>
            <div>
              <p className='mb-2'>Password</p>
              <input type="password" value={inputData.password} onChange={handleChange} placeholder='Enter your password' className='py-2 outline outline-green-600 w-full rounded-md border' />
            </div>
            <div>
              <Button type='submit' className='w-full' sx={{ bgcolor: green[700], padding: ".5rem" }} variant='contained'>sign In</Button>
            </div>
          </form>
          <div className='flex space-x-3 items-center mt-5'>
            <p className='m-0'>Create new Account</p>
            <Button variant='text' onClick={() => navigate("/signup")}>signup</Button>
          </div>
        </div>
      </div>
      <Snackbar
        open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}      >
        <Alert onClose={handleSnackbarClose} severity='success' sx={{width:'100%'}}>
           LogIn Successfull !
        </Alert>
      </Snackbar>

    </div>
  )
}

export default SignIN
