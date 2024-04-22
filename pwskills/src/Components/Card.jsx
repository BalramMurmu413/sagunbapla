import React from 'react'
import flower from '/Images/flowerCouple.jpg'


export default function Card() {
  return (
    <>
          <div className=' w-11/12 max-h-803 flex flex-row mt-52 mb-52 items-center flex-wrap gap-5 m-auto justify-around '>

              <div className=' w-56 h-56 bg-slate-300 hover:border-y-orange-600  cursor-pointer flex flex-col justify-center items-center hover:scale-105 transition-all 300 border-red-800 rounded' >
              <img className='md:w-[500px] h-[320px] rounded-lg w-[70px] inline' src={flower} alt="" />
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem, ipsum dolor.</p>
              </div>

              <div className=' w-56 h-56 bg-slate-300 hover:border-y-orange-600  cursor-pointer flex flex-col justify-center items-center hover:scale-105 transition-all 300 border-red-800 rounded' >
              <img className='md:w-[500px] h-[320px] rounded-lg w-[70px] inline' src={flower} alt="" />
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem, ipsum dolor.</p>
              </div>

              <div className=' w-56 h-56 bg-slate-300 hover:border-y-orange-600  cursor-pointer flex flex-col justify-center items-center hover:scale-105 transition-all 300 border-red-800 rounded' >
              <img className='md:w-[500px] h-[320px] rounded-lg w-[70px] inline' src={flower} alt="" />
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem, ipsum dolor.</p>
              </div>

              <div className=' w-56 h-56 bg-slate-300 hover:border-y-orange-600  cursor-pointer flex flex-col justify-center items-center hover:scale-105 transition-all 300 border-red-800 rounded' >
              <img className='md:w-[500px] h-[320px] rounded-lg w-[70px] inline' src={flower} alt="" />
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem, ipsum dolor.</p>
              </div>


      </div>
          
    </>
  )
}
