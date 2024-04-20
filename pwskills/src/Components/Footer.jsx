import React from 'react'
function Footer() {
  return (
    <footer >
      <div className='bg-slate-800 text-slate-100  w-full h-full flex flex-row justify-between items-center'>

        <div>
          <h1 className='font-bold text-2xl'>PW Skills</h1>
          <div className='flex flex-col items-start'>
            <h3>Support@gmail.com</h3>
            <h3> +91 XXXXX9392</h3>
            <div>
              <p> face</p>
              <p> face</p>
              <p> face</p>
            </div>
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

            <div>
              <ul className='flex flex-col items-start'>
                <li>Contact Us</li>
                <li>Job Assistant</li>
                <li>Term and Condiction</li>
              </ul></div>
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
