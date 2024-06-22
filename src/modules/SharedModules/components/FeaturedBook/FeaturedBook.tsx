import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import bookImg from '../../../../assets/imgs/book.png';


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
        <h6>Some quality items</h6>
        <h1>New Release Books</h1>
        <Swiper
    
    
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={100}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
  {
 book.map((b:any)=>(
    <SwiperSlide key={b._id}>
       <img src={bookImg} alt="" /><h3>{b.name}</h3>
    </SwiperSlide> 
 ))
}
 
  <button className='btn btn-outline-info p-3'>View More</button>
    
  
  </Swiper>
    </>
  )
}

