import React from 'react'
import img from '../../../../assets/imgs/Unsplash.png'
import simg from '../../../../assets/imgs/Group 305.png'
export default function AllBooks() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6">
                <h1>All books are 50% off now! Don't miss such a deal!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, 
                    libero ipsum enim pharetra hac.
                </p>
                <p>768 01 27 55</p>
                <p>Days Hours Munits Seconds</p>
                <img src={simg}/>
            </div>
            <div className="col-md-6">
                <img src={img} />
            </div>       
        </div>    
    </div>
  )
}
