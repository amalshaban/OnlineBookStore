
import 'swiper/css/bundle';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import sliderImg from '../../../../assets/imgs/E-raamatud ja audioraamatud sisselogimata 1.png';
import './Slider.module.css';
import simg from '../../../../assets/imgs/Group 305.png'
import simg2 from '../../../../assets/imgs/4.png'




export default function Slider() {

 
  return (

    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={100}
    slidesPerView={1}
    navigation
    // pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    
    <SwiperSlide className='firstSlide'>
    
    <div  className='row p-3'>
      <div className="col-md-6 p-3">
        <h1>ipsum dolor si</h1>
        <p className='pt-4 pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</p>
        <button className='btn btn-outline-info w-30 d-block'>Read More </button>
        <img className='w-20 pt-5' src={simg}/>
      </div>
      <div className="col-md-6">
        <img className='img-fluid' src={sliderImg} alt='sliderImg'/>
      </div>
    </div>
    
  </SwiperSlide>

  
   
    <SwiperSlide className='secondSlide'>

    <div  className='row p-3'>
      <div className="col-md-6 p-3">
        <h1>ipsum dolor si</h1>
        <p className='pt-4 pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</p>
        <button className='btn btn-outline-info w-30 d-block'>Read More </button>
        <img className='w-20 pt-5' src={simg}/>
      </div>
      <div className="col-md-6">
        <img className='img-fluid' src={simg2} alt='sliderImg'/>
      </div>
    </div>
    </SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
   
  
  </Swiper>
   
   
  );
}
