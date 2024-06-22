import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import booksImg from '../../../../assets/imgs/Group 298.png';


export default function NewReleaseBooks() {
    let requestBooks:string = 'https://upskilling-egypt.com:3007/api/book';


    let [allBooks, setAllBooks] = useState([]);
    const getAllBooks = async(request:any)=>{
       let response = await axios.get(request,
        {headers:{ Authorization: `Bearer ${localStorage.getItem("userToken")}`}});
       setAllBooks(response.data.data);
       console.log(response.data.data);
       
    }
    useEffect(() => {
        getAllBooks(requestBooks);
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

 allBooks.map((books:any)=>(
  <SwiperSlide key={books._id}>
    
    <img src={booksImg} alt="" /><h3>{books.name}</h3>
  
    </SwiperSlide>
   
 ))
}
 
  <button className='btn btn-outline-info p-3'>View More</button>
    
  
  </Swiper>
    </>
  )
}
