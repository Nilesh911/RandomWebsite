import React from 'react'
import './Main.css'
import car from '../../assets/car.gif'



function Main() {
  return (
    <>
    <div className="container">
        <img src={car}/>
    <div className="text">
        <p>Coming Soon : Mumbai, Pune, Kolkata, Satara, Konkan, Ratnagiri, Kolhapur, etc</p>
    </div>
    <div className="text2">
    <span className='span1'>Get Going</span>  
    {/* <span className='span2'>Nilesh.p</span>    
    <span className='span3'>Mumbai</span>   */}

    </div>
    
    </div>
    </>
  )
}

export default Main