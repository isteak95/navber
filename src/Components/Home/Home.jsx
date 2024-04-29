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
import Reviews from "../CustomarReview/Reviews";
import Trinding from "../Trinding/Trinding";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addspot')
            .then((res) => res.json())
            .then((data) => setSpots(data))
            .catch((error) => console.error('Error fetching spots:', error));
    }, []);

 

    return (
        <div>
      
      <div className='h-90vh my-8'>
         <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}

         >

          <div className="h-[500px]">
          <SwiperSlide>
              <div className="">
              <img src="https://i.ibb.co/Jnff6Sy/kate-gu-1yk-Cswv9h5-A-unsplash.jpg" alt="" className='h-[400px] w-[100%] rounded-lg object-cover' />
              <h1 className="text-center my-2 font-bold">Bangkok</h1>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
              <img src="https://i.ibb.co/345prkM/premium-photo-1700955569575-439bed2d50f2.jpg" alt="" className='h-[400px] rounded-lg w-[100%]  object-cover' />
                <h1 className="text-center my-2 font-bold">Kuala lumpur</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
              <img src="https://i.ibb.co/MhqSCZT/aimee-bon-w-u-MJbs-Wu-NI-unsplash.jpg" alt="" className='h-[400px] rounded-lg w-[100%]  object-cover' />
                <h1 className="text-center my-2 font-bold">Kep</h1>
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



      

      <div>
            <h1 className="text-center text-4xl  text-teal-600 font-bold py-5">Tourists Spots Section</h1>
            <div className="flex justify-center pt-10">

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:mx-28 mx-6 my-10">
                {spots.map((spot) => (
                    <div key={spot._id} className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <img className="h-[300px] w-full object-cover mb-4" src={spot.image} alt={spot.tourists_spot_name} />
                            <h3 className="text-xl font-bold mb-2">{spot.tourists_spot_name}</h3>
                            <p className="text-lg font-semibold">Average Cost: ${spot.average_cost}</p>
                            <p className="text-lg font-semibold">Total Visitors Per Year: {spot.total_visitors_per_year}</p>
                            <p className="text-lg font-semibold">Travel Time: {spot.travel_time}</p>
                            <p className="text-lg font-semibold">Seasonality: {spot.seasonality}</p>
                            <Link to={`/view-details/${spot._id}`}>
                                <button className="btn btn-accent w-full mt-4">View Details</button>
                            </Link>
                        </div>
                    </div>
                ))} 
            </div>
        </div>







      {/* Exprole  */}


      <div className="my-24"> <Trinding></Trinding>
  </div>



              {/* Customer reviews  */}

      <div className="my-36">
      <Reviews></Reviews>
      </div>





   

        </div>
    );
};

export default Home;