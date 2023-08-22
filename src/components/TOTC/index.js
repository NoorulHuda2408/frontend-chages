import React from 'react'
import "./index.css"
import Totc from "../../assests/totc.svg"


const TOTC = () => {
  return (
    <div className='TOTCsection mt-5 '>
       <div className='TOTC-text text-center'>
            <h1 className='TOTCHeading '>What is <span style={{color:"#00CBB8"}}> TOTC?</span> </h1>
            <p1 className=" TOTCHeadingPara text-center mt-3">TOTC is a platform that allows educators to create<br/> online classes whereby they can store the course materials online; manage assignments,<br/> quizzes and exams; monitor due dates; grade results and provide<br/> students with feedback all in one place. </p1>
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