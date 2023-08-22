import React from 'react'
import "./index.css"
import tools from "../../assests/tools.svg"
const index = () => {
  return (
    <div className='Teachertools container mt-5'>
        <div className='row tools'>
            <div className='col-sm-12 col-md-6 d-flex flex-column align-items-center justify-content-center '>
                <h1 className='ToolsHeading '><span style={{color:"#00CBB8"}}>Tools</span> For Teachers And Learners</h1>
                <p1 className="toolsPara">Class has a dynamic set of teaching tools built to be deployed and used during class.<br/>
            Teachers can handout assignments in real-time for students to complete and submit.</p1>

            </div>
            <div className='col-sm-12 col-md-6 mt-3'>
                <img src={tools} alt='tools' className='toolsimg ' width={"100%"}/>
            </div>

        </div>
    </div>
  )
}

export default index