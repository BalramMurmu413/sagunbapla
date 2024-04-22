import { ReactTyped } from "react-typed";
import React from "react";
function Banner() {
  return (
    <div className=" w-full h-20 flex flex-col items-center " >
      <div>
        <h1 className=" text-sm md:text-2xl font-bold text-[#e97862] ">
        ᱜᱮᱭᱟᱱ ᱯᱩᱛᱷᱤ
        </h1>
        </div>
      <div>
        <ReactTyped  className="sm:text-xl md:text-4xl underline font-bold text-[#e97862] "
      
      strings={[
        "  Gadel Gadel Koda Kuri",
        " ᱣᱤᱠᱤᱯᱤᱰᱤᱭᱟ",
        " Juri Pari",
        " ᱨᱟᱲᱟ ᱜᱮᱭᱟᱱ ᱯᱩᱛᱷᱤ",
      ]}
      typeSpeed={80}
      backSpeed={40}
      loop={true}
/>
      </div>
        



</div>


  )
}
export default Banner;