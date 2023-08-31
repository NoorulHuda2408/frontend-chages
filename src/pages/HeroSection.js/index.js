import React from 'react'
import "./index.css"
import icons from "../../assests/playIcons.svg"
import heroPic from "../../assests/heroPic.svg"
const index = () => {
  return (
    <div className='HeroSection'>
        <div className=' container'>
        <div className='HeroSection-container  row  align-items-center   '>
            <div className='col-md-6 col-sm-12  align-items-center mt-md-5'>
            <h1 className='heading1 mt-2'><span style={{color:"#F48C06"}}>Studying</span> Online is now much easier</h1>
            <p className='heading1Para1 mt-2  '>Tuition Recommender is an interesting platform that will teach<br/> you in more an interactive way</p>
            <div className='HeroSectionButton d-flex align-items-center mt-3 '>
             <div>
            <button type="button" className="dasLoginButtonHero ms-1 " >Join for free</button>
            </div>
            <div>
            <img src={icons} className="mt-3 ms-1" alt="" width="100px" height="100px" />
            </div>   
            <div>
            <p className='heading1Para mt-2 '>watch it works </p>

            </div>
            </div>
            </div>
            <div className='col-md-6 col-sm-12 '>
            <img src={heroPic} className="" alt="" width={"100%"} />

            </div>

        </div>
    </div>
    </div>

  )
}

export default index;