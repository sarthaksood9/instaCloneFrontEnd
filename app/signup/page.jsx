import Image from 'next/image'
import React from 'react'
import { IoLogoFacebook } from 'react-icons/io'

const page = () => {
    return (
        <div className='bg-while h-screen w-full flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center gap-3'>
                <div className='border-[1px] flex flex-col items-center px-10 w-[22rem] gap-3 py-5 pb-10'>
                    <Image className='w-[12rem] py-5' src={require("../../assets/logo.png")}></Image>
                    <div className='text-center text-[#737373] font-semibold'>
                        <p>Sign up to see photos and videos from your friends.</p>
                    </div>

                    <button className='w-full py-[0.4rem] font-semibold text-white text-[0.82rem] bg-[#0095F6] flex justify-center items-center gap-2 rounded-md mt-2'><IoLogoFacebook className='text-[1.3rem] ' /> <span className='font-semibold text-[0.8rem]'>Log in with Facebook</span></button>

                    <div className='w-full flex justify-center items-center gap-2'>
                        <div className='h-[1px] w-full bg-[#bdbdbd]'></div>
                        <span className='text-[0.85rem] font-semibold text-[#737373]'>OR</span>
                        <div className='h-[1px] w-full bg-[#bdbdbd]'></div>
                    </div>

                    <div className='flex flex-col gap-3 w-full'>
                        <input className='border-[1px] bg-[#FAFAFA] text-[0.7rem] font-semibold px-3 py-[0.70rem] w-full' placeholder='Phone number, username or email ' />
                        <input className='border-[1px] bg-[#FAFAFA] text-[0.7rem] font-semibold px-3 py-[0.70rem] w-full' placeholder='Full Name ' />
                        <input className='border-[1px] bg-[#FAFAFA] text-[0.7rem] font-semibold px-3 py-[0.70rem] w-full' placeholder='Username ' />
                        <input className='border-[1px] bg-[#FAFAFA] text-[0.7rem] font-semibold px-3 py-[0.70rem] w-full' placeholder='Password ' />
                        <div className='text-[0.7rem] text-[#737373] text-center flex flex-col gap-3'>
                            <p>People who use our service may have uploaded your contact information to Instagram. <span className='text-[#01376A]'>Learn more</span></p>
                            <p>By signing up, you agree to our Terms, Privacy <sapn className='text-[#01376A]'>Policy</sapn> and <sapn className='text-[#01376A]'>Cookies Policy</sapn>.</p>
                        </div>
                        <button className='w-full py-[0.4rem] font-semibold text-white text-[0.82rem] bg-[#67B5FA] rounded-md mt-2'>Sign up</button>
                    </div>
                </div>
                <div className='border-[1px] flex justify-center py-5 text-[0.82rem] font-semibold'>
                    <p>Have an account?   <span className='text-[#0095F6]'>Log in</span></p>
                </div>
            </div>
        </div>
    )
}

export default page