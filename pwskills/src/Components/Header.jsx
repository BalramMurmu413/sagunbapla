import React from 'react'
import { RiMenu4Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { useState } from 'react';
import SagunBaplaLogo from '/Images/SagunBapla_logo.png'
function Header() {
    const [toggle, setToggle] = useState(false)
    const [searchToggle, setSearchToggle] = useState(false)

    return (
        <>
            {/* header container closing tag */}

            {/* header uppper part */}
            <div className='flex flex-col w-11/12 min-h-42 bg-transparent justify-between  m-auto'>
                <div className='flex flex-row justify-between items-center '>
                    <div className='flex flex-row items-center '>
                        <img className='md:w-[120px] h-22 w-[70px] inline' src={SagunBaplaLogo} alt="" />
                        <h1 className='font-bold md:text-[28px] text-pink-400  font-sans text-[20px]'>ᱜᱮᱭᱟᱱ ᱯᱩᱛᱷᱤ</h1>
                    </div>
                    <div     >

                        <div className='hidden   lg:flex  relative '>
                            <div className=' ml-1 mt-[9px] absolute' >
                                <BiSearchAlt className=' w-[25px] h-[25px] opacity-50 ' />
                            </div>
                            <input className=' min-w-[550px] min-h-10 border-slate-400 text-slate-400 rounded outline-none border pl-12 pr-3' type="search" placeholder='Search by product title' />

                        </div>

                    </div>
                    <div>
                        <button className='hidden  lg:flex bg-gradient-to-r from-cyan-500 to-blue-500  hover:border-slate-400 text-white pl-5 pr-5 pt-[7px] pb-[7px] border-none rounded text-xl '>Login/Register </button>

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
                            <li className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 pt-2 cursor-pointer pb-2 pl-4 pr-4 border-none rounded text-white '>Raybar</li>
                            <li className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer pt-2 pb-2 pl-4 pr-4 border-none rounded text-white '>Chat </li>
                            <li className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer pt-2 pb-2 pl-4 pr-4 border-none rounded text-white '>Job Portal</li>
                            <li className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer pt-2 pb-2 pl-4 pr-4 border-none rounded text-white '>ᱯᱩᱛᱷᱤ</li>
                            <li className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer pt-2 pb-2 pl-4 pr-4 border-none rounded text-white '>Become an affiliate</li>
                            <li className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer pt-2 pb-2 pl-4 pr-4 border-none rounded text-white '>Success Stories</li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* header container closing tag */}
            {/* responsive menus  */}
            <div className={` w-full h-20  justify-center  flex items-center  ${searchToggle ? 'left-[0]' : '-left-[100%]'}`} >

                <input className='fixed  md:hidden min-w-[300px] min-h-10 border-slate-400 rounded outline-none border pl-12 pr-3' type="search" placeholder='Search by product title' />
            </div>
            <div className=' md:hidden block'>
                <nav className={`   fixed bg-white -mt-20 w-full h-screen block   ${toggle ? 'left-0' : 'left-[-100%]'}`}>
                    <div className='bg-slate-100 min-h-[70px] flex items-center justify-center '>
                        <button className=' bg-gradient-to-r from-cyan-500 to-blue-500  text-white pl-3 pr-3 pt-[5px] pb-[5px] border-none rounded text-[14px] font-bold '>Login/Register </button>
                    </div>
                    <ul className=' flex flex-col items-start text-[15px]  ml-2 mt-8 font-semibold text-slate-400'>
                        <li className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 pt-2 m-1 cursor-pointer pb-2 pl-4 pr-4 border-none rounded '>Courses</li>
                        <li className='hover:hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer pt-2 m-1 pb-2 pl-4 pr-4 border-none rounded '>PW Skills Lab</li>
                        <li className='hover:hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer pt-2 m-1 pb-2 pl-4 pr-4 border-none rounded '>Job Portal</li>
                        <li className='hover:hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer pt-2 m-1 pb-2 pl-4 pr-4 border-none rounded '>Experience Portal</li>
                        <li className='hover:hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer pt-2 m-1 pb-2 pl-4 pr-4 border-none rounded '>Become an affiliate</li>
                        <li className='hover:hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer pt-2 m-1 pb-2 pl-4 pr-4 border-none rounded '>Hall Of fame</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header
