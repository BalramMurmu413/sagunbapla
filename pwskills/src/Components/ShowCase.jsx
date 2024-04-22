import React from 'react'
import flower from '/Images/flowerCouple.jpg'


export default function ShowCase() {
  return (
    <>
          <div className=' w-full bg-pink-400 m-auto max-h-96 mt-44 mb-14  grid grid-cols-2 divide-x' >
              <div className=' '>
                  <div className='flex items-center flex-col justify-center h-[250px] gap-12'>
                    <h1 className='text-4xl text-white font-bold'>Santhali samaj reya Online Raybar Platform</h1>
                      <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore dolores quia, repudiandae fugiat perferendis blanditiis.</p>
                      <button className='bg-blue-400 pt-1 pb-1 pl-3 pr-3 text-white rounded-lg'> Explore More.</button>
                </div>
              </div>
              <div>
              <img className='md:w-[500px] h-[320px] rounded-lg w-[70px] inline' src={flower} alt="" />
              </div>

      </div>
          
    </>
  )
}
