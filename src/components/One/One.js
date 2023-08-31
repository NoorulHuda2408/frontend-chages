import React from 'react'
import "./one.css"
import Oneimg from "../../assests/one.svg"

const One = () => {
  return (
    <div className='OneSec  container mt-5'>
        <div className='row Assesment'>
        <div className='col-sm-12 col-md-6 mt-3'>
                <img src={Oneimg} alt='tools' className='Oneimg ' width={"100%"}/>
            </div>
            <div className='col-sm-12 col-md-6 d-flex flex-column align-items-center justify-content-center '>
                <h1 className="OneHeading"> One-on-One <br/><span style={{color:"#00CBB8"}}>Discussions </span></h1>
                <p1 className="OnePara">Our advanced chatroom technology guarantees a safe haven for discussions, where issues are resolved, questions are answered, and progress is nurtured.</p1>
            </div>
        

        </div>
    </div>
  )
}

export default One