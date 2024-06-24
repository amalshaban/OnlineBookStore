import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import bookImg from '../../../../assets/imgs/book.png';
import './FeaturedBook.module.css'

export default function FeaturedBook() {
    let requestBooks:string = 'https://upskilling-egypt.com:3007/api/book';


    let [book, setBook] = useState([]);
    const getBook = async(request:any)=>{
       let response = await axios.get(request,
        {headers:{ Authorization: `Bearer ${localStorage.getItem("userToken")}`}});
       setBook(response.data.data);
       console.log(response.data.data);
       
    }
    useEffect(() => {
        getBook(requestBooks);
    }, []);
  return (
    <>

    <div className='container-fluid book'>
      <div className='row'>
        <div className='col-md-6 bookItems'>
          <img src={bookImg}/>
       
        </div>
        <div className='col-md-6 bookDetails'>
        <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={100}
    slidesPerView={1}
    // navigation={{
    //   nextEl: 'custom-next-button',
    //   prevEl: 'custom-prev-button'
    // }}
    pagination={{ clickable: true}}
    // scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    {/* <div className=".custom-position"
    style={{
    
    }}
    >&lt;
    </div> */}
    
  {
    
 book.map((b:any)=>(
    <SwiperSlide key={b._id}>
      <h1>Featured Book</h1>
      <span>{b.description}</span>
       <h3>{b.name}</h3>
       <p>{b.category}</p>
       <h4>{`$ ${b.price}`}</h4>
    </SwiperSlide> 
 ))
}
  </Swiper>
          

  <button className='btn btn-outline-info p-1 w-50'>View More</button>
        </div>
      </div>
    </div>
      
      
    </>
  )
}

