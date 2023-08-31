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
            <h1 className="OneHeading"><span style={{color:"#00CBB8"}}> Teacher Powered </span> <br/>Resources For Students Success </h1>
            <p1 className="OnePara">Fostering collaboration between teachers and students, our platform enables teachers to upload and share a wealth of helpful materials with their students.</p1>
        </div>
        <div className='col-sm-12 col-md-6 mt-3'>
            <img src={classImgManage} alt='tools' className='Oneimg ' width={"100%"}/>
        </div>

    </div>
</div>
  )
}

export default ClassManagement