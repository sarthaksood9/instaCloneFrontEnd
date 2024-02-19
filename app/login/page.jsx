import Image from 'next/image';
import React from 'react'

import { IoLogoFacebook } from "react-icons/io";

const page = () => {
    return (
        <div className='bg-while h-screen w-full flex flex-col justify-center items-center'>
            <div className='flex flex-col gap-5 '>
                <div className='border-[1px] flex flex-col items-center px-10 w-[22rem] gap-4 py-5'>
                    <Image className='w-[12rem] py-5' src={require("../../assets/logo.png")}></Image>
                    <div className='flex flex-col gap-3 w-full'>
                        <input className='border-[1px] bg-[#FAFAFA] text-[0.7rem] font-semibold px-3 py-[0.70rem] w-full' placeholder='Phone number, username or email ' />
                        <input className='border-[1px] bg-[#FAFAFA] text-[0.7rem] font-semibold px-3 py-[0.70rem] w-full' placeholder='Password ' />
                        <button className='w-full py-[0.4rem] font-semibold text-white text-[0.82rem] bg-[#67B5FA] rounded-md mt-2'>Log in</button>
                    </div>
                    <div className='w-full flex justify-center items-center gap-2'>
                        <div className='h-[1px] w-full bg-[#bdbdbd]'></div>
                        <span className='text-[0.85rem] font-semibold text-[#737373]'>OR</span>
                        <div className='h-[1px] w-full bg-[#bdbdbd]'></div>
                    </div>
                    <div className='flex flex-col gap-5 w-full items-center'>
                        <div className='flex text-[#375085] gap-3 items-center'>
                            <IoLogoFacebook className='text-[1.5rem] ' /> <span className='font-semibold text-[0.9rem]'>Log in with FaceBook</span>
                        </div>
                        <div className='text-[0.7rem]'>
                            <p>forgotten your password?</p>
                        </div>
                    </div>

                </div>
                <div className='border-[1px] flex justify-center py-5 text-[0.9rem]'>
                    <p>Don't have an account?  <span className='text-[#0095F6]'>Sign up</span></p>
                </div>
                <div className='flex flex-col items-center py-5 text-[0.9rem]'>
                    <p>Get the app.</p>
                    <div className='flex gap-2'>
                        <Image className='w-[10rem]' src={require("../../assets/appDown.png")}></Image>
                        <Image className='mix-blend-color-burn w-[10rem]' src={require("../../assets/playDown.png")}></Image>
                    </div>
                </div>
            </div>
            <div className='text-[#737373] flex gap-3 text-[0.8rem]'>
                <span>Meta</span>
                <span>About</span>
                <span>Blog</span>
                <span>Jobs</span>
                <span>Help</span>
                <span>API</span>
                <span>Privacy</span>
                <span>Locations</span>
                <span>Instagram Lite</span>
                <span>Threads</span>
                <span>Contact uploading and non-users</span>
                <span>Meta Verified</span>
            </div>
        </div>
    )
}

export default page