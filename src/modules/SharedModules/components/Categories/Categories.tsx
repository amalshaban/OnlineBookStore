import axios from 'axios';
import { useState, useEffect } from 'react';
import categoriesImgs from '../../../../assets/imgs/rectangle.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Scrollbar, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import './Categories.module.css'

export default function Categories() {
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
    <div className='secondSection'>
    
    <h6>ــــ Categories</h6>
    <h3>Explore our Top Categories</h3>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={150}
      slidesPerView={3}
      // navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    
    {
   allCategories.map((category:any)=>(
      <SwiperSlide className='categorySlide'>
          <img src={categoriesImgs} alt="" /><h3>{category.title}</h3>
      </SwiperSlide> 
   ))
 }
 <div className= 'text-center'>
 <button className='btn btn-outline-info p-2 w-25'>View More</button>
 </div>
    </Swiper>
    </div>
  )
}
