import React from 'react'
import "./index.css"
import tools from "../../assests/tools.svg"
const index = () => {
  return (
    <div className='Teachertools container mt-5'>
        <div className='row tools'>
            <div className='col-sm-12 col-md-6 d-flex flex-column align-items-center justify-content-center '>
                <h1 className='ToolsHeading '><span style={{color:"#00CBB8"}}>Connecting </span>Tutors , Students
And Parents</h1>
                <p1 className="toolsPara">A platform where one can register as a tutor or as a student and get easily connected. <br/>Nowadays, no one can deny need of a tutor.So, our aim is to help both tutors and students by connecting them with one another.</p1>

            </div>
            <div className='col-sm-12 col-md-6 mt-3'>
                <img src={tools} alt='tools' className='toolsimg ' width={"100%"}/>
            </div>

        </div>
    </div>
  )
}

export default index