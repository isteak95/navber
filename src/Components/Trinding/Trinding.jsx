import React from 'react';
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../Authprovider/Authprovider";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Trinding = () => {
    return (
        <div>
            <h1 className="text-4xl text-center my-20 text-teal-600  font-bold">Explore stays in trending destinations</h1>
      
      <div className='h-90vh my-8'>
         <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}

         >

          <div className="h-[500px]">
          <SwiperSlide>
              <div className="">
              <img src="https://i.ibb.co/M5W4KK1/motorboats-parked-water-by-water-with-sunset-city-visible.jpg" alt="" className='h-[400px] w-[100%] rounded-lg object-cover' />
              <h1 className="text-center my-2 font-bold">Saint Martin</h1>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
              <img src="https://i.ibb.co/LvdXz69/dugout-river.jpg" alt="" className='h-[400px] rounded-lg w-[100%]  object-cover' />
                <h1 className="text-center my-2 font-bold">Sunderban</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
              <img src="https://i.ibb.co/F0wXzcX/OIP.jpg" alt="" className='h-[400px] rounded-lg w-[100%]  object-cover' />
                <h1 className="text-center my-2 font-bold">Sylhet</h1>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" ">
              <img src="https://i.ibb.co/sFT7nbT/OIP-1.jpg" alt="" className='h-[400px] rounded-lg w-[100%]  object-cover' />
                <h1 className="text-center my-2 font-bold">Bagan temples</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
              <img src="https://i.ibb.co/drCc37V/Taj-Mahal-Getty-Images-485899645.webp" alt="" className='h-[400px] rounded-lg w-[100%]  object-cover' />
                  <h1 className="text-center my-2 font-bold">TAJ-Mahal</h1>
              </div>
            </SwiperSlide>
          </div>
            


         </Swiper>
      </div>
        </div>
    );
};

export default Trinding;