import React from 'react'
import img from '../../../../assets/imgs/Unsplash.png'
import simg from '../../../../assets/imgs/Group 305.png'
import './AllBooks.module.css'



export default function AllBooks() {
  return (
    <div className='container allBooks p-3'>
        <div className="row">
            <div className="col-md-6 allBooksData">
                <h1>All books are 50% off now! Don't miss such a deal!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, 
                    libero ipsum enim pharetra hac.
                </p>
                <span>768 01 27 55</span>
                <p>Days Hours Munits Seconds</p>
                <img src={simg}/>
            </div>
            <div className="col-md-5">
                <img className='img-fluid pt-5' src={img} />
            </div>       
        </div>    
    </div>
  )
}
