import React from 'react'
import { RiMenu4Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { useState } from 'react';
function Header() {
    const [toggle, setToggle] = useState(false)
    const [searchToggle, setSearchToggle] = useState(false)
    return (
        <>
            {/* header container closing tag */}

            {/* header uppper part */}
            <div className='flex flex-col w-11/12 min-h-42 bg-white justify-between  m-auto'>
                <div className='flex flex-row justify-between items-center '>
                    <div className='flex flex-row items-center '>
                        <img className='md:w-[90px] w-[70px] inline' src="data:image/png;base64,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" alt="" />
                        <h1 className='font-bold md:text-[28px] text-black font-sans text-[20px]'>PW SKILLS</h1>
                    </div>
                    <div     >

                        <div className='hidden  lg:flex relative  '>
                            <div className=' ml-1 mt-[9px] absolute' >
                                <BiSearchAlt className=' w-[25px] h-[25px]  ' />
                            </div>
                            <input className=' min-w-[550px] min-h-10 border-slate-400 rounded outline-none border pl-12 pr-3' type="search" placeholder='Search by product title' />

                        </div>

                    </div>
                    <div>
                        <button className='hidden  lg:flex bg-[#e97862] text-white pl-5 pr-5 pt-[7px] pb-[7px] border-none rounded text-xl '>Login/Register </button>

                        <div className=' flex gap-4 items-center '>

                            <BiSearchAlt onClick={() => setSearchToggle(!searchToggle)} className='w-[25px] h-[25px]  cursor-pointer lg:hidden  block' />





                            {
                                toggle ?

                                    <AiOutlineClose onClick={() => setToggle(!toggle)} className='h-7 w-7 cursor-pointer lg:hidden  block' />
                                    :
                                    <RiMenu4Fill onClick={() => setToggle(!toggle)} className='h-8 w-8 cursor-pointer lg:hidden  block ' />
                            }
                        </div>

                    </div>
                </div>






                {/* header lower part whene menus lie */}
                <div className='w-full '>
                    <nav className='hidden   lg:flex'>
                        <ul className='w-full flex flex-row justify-between text-[17px]  font-semibold text-slate-400'>
                            <li className='bg-slate-200 pt-2 cursor-pointer pb-2 pl-4 pr-4 border-none rounded '>Courses</li>
                            <li className='hover:bg-slate-200 cursor-pointer pt-2 pb-2 pl-4 pr-4 border-none rounded '>PW Skills Lab</li>
                            <li className='hover:bg-slate-200 cursor-pointer pt-2 pb-2 pl-4 pr-4 border-none rounded '>Job Portal</li>
                            <li className='hover:bg-slate-200 cursor-pointer pt-2 pb-2 pl-4 pr-4 border-none rounded '>Experience Portal</li>
                            <li className='hover:bg-slate-200 cursor-pointer pt-2 pb-2 pl-4 pr-4 border-none rounded '>Become an affiliate</li>
                            <li className='hover:bg-slate-200 cursor-pointer pt-2 pb-2 pl-4 pr-4 border-none rounded '>Hall Of fame</li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* header container closing tag */}
            {/* responsive menus  */}
            <div className={` w-full h-20 fixed justify-center  flex items-center mt-0  ${searchToggle ? 'left-[0]' : '-left-[100%]'}`} >

                <input className='fixed lg:hidden md:hidden min-w-[300px] min-h-10 border-slate-400 rounded outline-none border pl-12 pr-3' type="search" placeholder='Search by product title' />
            </div>
            <div className='lg:hidden md:hidden block'>
                <nav className={`   fixed bg-white -mt-20 w-full h-screen block   ${toggle ? 'left-0' : 'left-[-100%]'}`}>
                    <div className='bg-slate-100 min-h-[70px] flex items-center justify-center '>
                        <button className=' bg-[#e97862] text-white pl-3 pr-3 pt-[5px] pb-[5px] border-none rounded text-[14px] font-bold '>Login/Register </button>
                    </div>
                    <ul className=' flex flex-col items-start text-[15px]  ml-2 mt-8 font-semibold text-slate-400'>
                        <li className='bg-slate-200 pt-2 m-1 cursor-pointer pb-2 pl-4 pr-4 border-none rounded '>Courses</li>
                        <li className='hover:bg-slate-200 cursor-pointer pt-2 m-1 pb-2 pl-4 pr-4 border-none rounded '>PW Skills Lab</li>
                        <li className='hover:bg-slate-200 cursor-pointer pt-2 m-1 pb-2 pl-4 pr-4 border-none rounded '>Job Portal</li>
                        <li className='hover:bg-slate-200 cursor-pointer pt-2 m-1 pb-2 pl-4 pr-4 border-none rounded '>Experience Portal</li>
                        <li className='hover:bg-slate-200 cursor-pointer pt-2 m-1 pb-2 pl-4 pr-4 border-none rounded '>Become an affiliate</li>
                        <li className='hover:bg-slate-200 cursor-pointer pt-2 m-1 pb-2 pl-4 pr-4 border-none rounded '>Hall Of fame</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header
