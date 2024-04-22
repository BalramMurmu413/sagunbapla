import React from 'react'
function Footer() {
  return (
    <footer >
      <div className='bg-pink-400 mt-48 text-slate-100  w-full h-62 flex md:flex-row    flex-col justify-between md:items-center'>

        <div>
          <h1 className='font-bold text-2xl'>Founder</h1>
          <div className='flex flex-col items-start'>
            <h3>PL Murmu</h3>
            <h3> Hopen Tudu</h3>
            <div className='flex flex-row gap-3'>
              <p> face</p>
              <p> face</p>
              <p> face</p>
            </div>
          </div>
        </div>


        <div>
          <h1 className='font-bold text-2xl'>Balram Murmu</h1>
          <div className='flex flex-col items-start '>
            <h3 className='p-1 rounded border-white m-1 border font-bold text-green-600'>100+ Client Handled </h3>
            <h3 className='p-1 rounded border-white m-1 border font-bold text-green-600'>Across India</h3>

            </div>
        </div>


        <div >
          <h1  className='font-bold text-2xl '>Company</h1>
          <div className='flex flex-row gap-5'>
            <div>
              <ul className='flex flex-col items-start'>
                <li>About us</li>
                <li>FAQ</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

          </div>
        </div>
        <div>
          <h1 className='font-bold text-2xl'>Product</h1>
          <div className='flex flex-row gap-5'>
            <div>
              <ul className='flex flex-col items-start'>
                <li>Contact Us</li>
                <li>Job Assistant</li>
                <li>Term and Condiction</li>
              </ul></div>
          </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer
