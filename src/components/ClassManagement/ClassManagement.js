import React from 'react'
// import "./ClassManagement.css"
// import classImgManage from "../../assests/ClassManagement.svg"
import "./ClassMClassManagement.css"
import classImgManage from "../../assests/classManange.svg"

const ClassManagement = () => {
  return (
    <div className='OneSec  container mt-5'>
    <div className='row Assesment'>
   
        <div className='col-sm-12 col-md-6 d-flex flex-column align-items-center justify-content-center '>
            <h1 className="OneHeading"><span style={{color:"#00CBB8"}}> Class Management</span> <br/>Tools For Discussion </h1>
            <p1 className="OnePara">Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p1>
        </div>
        <div className='col-sm-12 col-md-6 mt-3'>
            <img src={classImgManage} alt='tools' className='Oneimg ' width={"100%"}/>
        </div>

    </div>
</div>
  )
}

export default ClassManagement