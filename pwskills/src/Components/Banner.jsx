import { ReactTyped } from "react-typed";
import React from "react";
function Banner() {
  return (
    <div className=" w-full h-60  bg-slate-50 flex flex-col justify-center border  items-center my-10 m-auto border-orange-500 rounded-[10px]" >
      <div>
        <h1 className=" text-sm md:text-2xl font-bold text-[#e97862] ">
          Learn & Grow with us...
        </h1>
        </div>
      <div>
        <ReactTyped  className="sm:text-sm md:text-4xl font-bold text-[#e97862] "
      
      strings={[
        "  Web Development",
        " Digital Marketing",
        " App Development",
        " Deployment",
        " App Development",
      ]}
      typeSpeed={80}
      backSpeed={40}
      loop={true}
/>
        
      </div>

<div className="w-[40%]  h-screen text-2xl font-thin text-black flex flex-col">
<p className="w-10/12 text-xs ">
  Lorem ipsum dolor sit amet consectetur adipisicing....
</p>

</div>

</div>


  )
}
export default Banner;