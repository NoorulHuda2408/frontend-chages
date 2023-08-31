import React from 'react'
import "./index.css"
import assementimg from "../../assests/assesments.svg"
const Assesment = () => {
  return (
    // <div>index</div>
    <div className='AssesmentSec  container mt-5'>
        <div className='row Assesment'>
        <div className='col-sm-12 col-md-6 mt-3'>
                <img src={assementimg} alt='tools' className='Assesmentimg ' width={"100%"}/>
            </div>
            <div className='col-sm-12 col-md-6 d-flex flex-column align-items-center justify-content-center '>
                <h1 className="AssesmentHeading"> Assessments, <br/><span style={{color:"#00CBB8"}}>Quizzes</span>, Tests</h1>
                <p1 className="AssesmentPara"> Parents and students can effortlessly monitor their journey through real-time access to quiz and assignment marks. Stay up-to-date with achievements and areas primed for improvement.</p1>

            </div>
        

        </div>
    </div>

  )
}

export default Assesment