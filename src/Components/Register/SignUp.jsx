import React, { useEffect, useState } from 'react'
import { Alert, Button, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { green } from '@mui/material/colors';
import { useDispatch, useSelector } from "react-redux";
import { currentUser, register } from '../../Redux/Auth/Action';

const SignUp = () => {
    const token = localStorage.getItem("token")
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({full_name: "", email: "", password: "" });
    const { auth } = useSelector(store => store);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("handle submit",inputData)
        dispatch(register(inputData))
        setOpenSnackbar(true)
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData((values) => ({ ...values, [name]: value }))
    };
    const handleSnackbarClose = () => {
        setOpenSnackbar(false)
    }
    useEffect(() => {
        if (token)
         dispatch(currentUser(token))
    }, [token])
    useEffect(() => {
        if(auth.reqUser?.full_name)
        {
            navigate("/")
        }
    },[auth.reqUser])
    //VIDEO 3 55:00
    return (
        <div className=''>
            <div className='flex justify-center items-center h-screen'>
                <div className='w-[30%] p-10 shadow-md bg-white'>
                    <form onSubmit={handleSubmit} className='space-y-5'>
                        <div>
                            <p className='mb-2'>User Name</p>
                            <input type="text" placeholder='Enter username' name='full_name'
                            onChange={(e) => handleChange(e)} value={inputData.full_name}
                            className="py-2 outline outline-green-600 w-full rounded-md border" />
                        </div>
                        <div>
                            <p className='mb-2'>Email</p>
                            <input
                                type="email" placeholder='Enter your email' name='email'
                                onChange={(e) => handleChange(e)} 
                                value={inputData.email} className="py-2 px-3 outline-green-600 w-full rounded-md border" />
                        </div>
                        <div>
                            <p className='mb-2'>Password</p>
                            <input type="password" placeholder='Enter password here'
                             name='password' onChange={(e) => handleChange(e)}
                              value={inputData.password} className="py-2 px-3 outline-green-600 w-full rounded-md border" />
                        </div>

                        <div>
                            <Button
                             type='submit'
                              className='w-full' sx={{ bgcolor: green[700], padding: ".5rem" }} 
                              variant='contained'>sign In</Button>
                        </div>
                    </form>
                    <div className='flex space-x-3 items-center mt-5'>
                        <p className='m-0'>Already Have Account</p>
                        <Button variant='text' onClick={() => navigate("/signin")}>LogIn</Button>
                    </div>
                </div>
            </div>
            <Snackbar
                open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}      >
                <Alert onClose={handleSnackbarClose} severity='success' sx={{ width: '100%' }}>
                    Your Account successfuly created!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default SignUp
