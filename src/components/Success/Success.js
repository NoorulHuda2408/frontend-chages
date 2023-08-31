import React from 'react'
import "./Sucess.css"
const Success = () => {
  return (
    <div className='SuccesSec container mt-3 '>
        <div className='SuccesText text-center'>
            <h1 className='SuccessHeading '>Excellent Techniques For
Tutors, Students & Parents</h1>
            <p1 className=" SuccessHeadingPara text-center mt-3">Explore techniques that foster a supportive home environment, <br/>enabling your child's educational journey to flourish. </p1>
        </div>
        <div className="successNumbers  row justify-content-around mt-3">
            <div className="col-6 col-sm-6 col-md-2">
                <h6 className="successNumbersone"> Register</h6>
                <h2 className="successNumbersValue"> Register yourself either as a Tutor or as a Student.</h2>
            </div>
            <div className=" col-6 col-sm-6 col-md-2">
            <h1 className="successNumbersone"> SignIn</h1>
                <h2 className="successNumbersValue"> Simply by entering required credentials.</h2>
            </div> 
            <div className=" col-6 col-sm-6 col-md-2">
                <h1 className="successNumbersone"> Hire a Tutor</h1>
                <h2 className="successNumbersValue">Hire Tutor easily according to your need by viewing their profile.</h2>
            </div>
            <div className="col-6 col-sm-6 col-md-2">
                <h1 className="successNumbersone"> Contact</h1>
                <h2 className="successNumbersValue"> Easily get connected with Tutors without facing any difficulty.</h2>
            </div>
            <div className="col-6 col-sm-6 col-md-2">
                <h1 className="successNumbersone"> Appointment</h1>
                <h2 className="successNumbersValue">  Students can get appointment by tutor at the said day based on availability and preferred 
time slots.</h2>
            </div>
        </div>

    </div>
  )
}

export default Success