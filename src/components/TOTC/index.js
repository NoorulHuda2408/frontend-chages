import React from 'react'
import "./index.css"
import Totc from "../../assests/totc.svg"


const TOTC = () => {
  return (
    <div className='TOTCsection mt-5 '>
       <div className='TOTC-text text-center'>
            <h1 className='TOTCHeading '>What is <span style={{color:"#00CBB8"}}>Tuition Recommender ?</span> </h1>
            <p1 className=" TOTCHeadingPara text-center mt-3">
            
           In Pakistan, there is a growing need for a comprehensive<br/> educational platform that connects students, tutors, and teachers.<br/>
             Our platform serves as a centralized portal, facilitating the interaction between<br/> students seeking tuition, tutors providing their expertise, and
              teachers<br/> looking for employment opportunities. 
        <br/>
              </p1>
        </div>
        <div className="totcImageSec row justify-content-center mt-3  ">
          <div className='totc1 col-md-4 d-flex flex-column text-center align-items-center justify-content-center  mx-4  '>
            <h1 className='classHeading'> FOR INSTRUCTORS</h1>  
           <button type="button" className="CLassButton " >Start a class today</button>

          </div>
          <div className='totc2  col-md-4 d-flex flex-column text-center align-items-center justify-content-center mx-4 '> 
          <h1 className='studentHeading'>  FOR STUDENTS</h1>  
           <button type="button" className="CLassButton " >Start a class today</button></div>
        </div>
    </div>
  )
}
export default TOTC