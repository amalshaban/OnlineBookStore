import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import  sliderImg from '../../../../assets/imgs/E-raamatud ja audioraamatud sisselogimata 1.png'
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';
import categoriesImgs from '../../../../assets/imgs/rectangle.png'
import styles from './Slider.module.css'




export default function Slider() {

  let requestCategories:string = 'https://upskilling-egypt.com:3007/api/category';


  let [allCategories, setAllCategories] = useState([]);
  const getAllCategories = async(request:any)=>{
     let response = await axios.get(request,{headers:{ Authorization: `Bearer ${localStorage.getItem("userToken")}`}});
     setAllCategories(response.data);
     console.log(response.data);
     
  }
  useEffect(() => {
    getAllCategories(requestCategories);
  }, []);
  return (
    <>
     <Swiper 
    
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        nextEl: '.custom-next-arrow', 
        prevEl: '.custom-prev-arrow'  
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <div className="custom-prev-arrow" 
      style={{
        background:'white',borderRadius:'50%',textAlign:'center', border:'1px solid red', color: 'red',
         width:30 , height:30, position:'absolute', top:100, left:50
        }}>&lt;
      </div>
  <div className="custom-next-arrow" style={{ 
      background:'white',borderRadius:'50%',textAlign:'center', border:'1px solid red', color: 'red',
      width:30 , height:30, position:'absolute', top:100, right:50
  }}>&gt;</div>
 
      <SwiperSlide className={`${styles.firstSwipper}`}>
      <Container>
        <div  className='row'>
          <div className="col-md-7 pt-5">
            <h1>ipsum dolor si</h1>
            <p className='pt-5 pb-5 pe-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</p>
            <button className='btn btn-outline-info p-3'>Read More </button>
          </div>
          <div className="col-md-5">
            <img className='img-fluid' src={sliderImg} alt='sliderImg'/>
          </div>
        </div>
        </Container>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
     
    
    </Swiper>
    
    
    <Swiper
    
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
    <h6>ــCategories</h6>
    <h3>Explore our Top Categories</h3>
    
    {
   allCategories.map((category:any)=>(
    <SwiperSlide>
      
      <img src={categoriesImgs} alt="" /><h3>{category.title}</h3>
    
      </SwiperSlide>
     
   ))
 }
   
    <button className='btn btn-outline-info p-3'>View More</button>
      
    
    </Swiper>
    </>
   
  );
}
