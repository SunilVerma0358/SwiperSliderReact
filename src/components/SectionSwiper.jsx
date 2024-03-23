import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";

const SectionSwiper = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="container mx-auto px-3">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
        >
          <SwiperSlide>
            <div className="bg-yellow-400 rounded-3xl px-6 py-5 border-2 border-blue-600 ">
              <h2 className="text-center font-bold ">hello world</h2>
              <p className="text-blue-800 text-center font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                cupiditate voluptatum nobis nisi quia, non dicta placeat
                incidunt accusantium quam illum magni, libero consequatur dolor
                unde cum ex, omnis fugiat corrupti sunt. Ad, doloribus. Aperiam,
                sit. Accusamus earum, provident laudantium esse dolorum ea,
                facilis minima, qui iste nam sunt iusto.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-pink-400 rounded-3xl px-6 py-5 border-2 border-blue-600 ">
              <h2 className="text-center font-bold ">hello world</h2>
              <p className="text-blue-800 text-center font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                cupiditate voluptatum nobis nisi quia, non dicta placeat
                incidunt accusantium quam illum magni, libero consequatur dolor
                unde cum ex, omnis fugiat corrupti sunt. Ad, doloribus. Aperiam,
                sit. Accusamus earum, provident laudantium esse dolorum ea,
                facilis minima, qui iste nam sunt iusto.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-blue-400 rounded-3xl px-6 py-5 border-2 border-blue-600 ">
              <h2 className="text-center font-bold ">hello world</h2>
              <p className="text-white-800 text-center font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                cupiditate voluptatum nobis nisi quia, non dicta placeat
                incidunt accusantium quam illum magni, libero consequatur dolor
                unde cum ex, omnis fugiat corrupti sunt. Ad, doloribus. Aperiam,
                sit. Accusamus earum, provident laudantium esse dolorum ea,
                facilis minima, qui iste nam sunt iusto.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-yellow-400 rounded-3xl px-6 py-5 border-2 border-blue-600 ">
              <h2 className="text-center font-bold ">hello world</h2>
              <p className="text-blue-800 text-center font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                cupiditate voluptatum nobis nisi quia, non dicta placeat
                incidunt accusantium quam illum magni, libero consequatur dolor
                unde cum ex, omnis fugiat corrupti sunt. Ad, doloribus. Aperiam,
                sit. Accusamus earum, provident laudantium esse dolorum ea,
                facilis minima, qui iste nam sunt iusto.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-400 rounded-3xl px-6 py-5 border-2 border-blue-600 ">
              <h2 className="text-center font-bold ">hello world</h2>
              <p className="text-blue-800 text-center font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                cupiditate voluptatum nobis nisi quia, non dicta placeat
                incidunt accusantium quam illum magni, libero consequatur dolor
                unde cum ex, omnis fugiat corrupti sunt. Ad, doloribus. Aperiam,
                sit. Accusamus earum, provident laudantium esse dolorum ea,
                facilis minima, qui iste nam sunt iusto.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-green-400 rounded-3xl px-6 py-5 border-2 border-blue-600 ">
              <h2 className="text-center font-bold ">hello world</h2>
              <p className="text-blue-800 text-center font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                cupiditate voluptatum nobis nisi quia, non dicta placeat
                incidunt accusantium quam illum magni, libero consequatur dolor
                unde cum ex, omnis fugiat corrupti sunt. Ad, doloribus. Aperiam,
                sit. Accusamus earum, provident laudantium esse dolorum ea,
                facilis minima, qui iste nam sunt iusto.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <button className="swiper-button-prev"></button>
        <button className="swiper-button-next"></button>
      </div>
    </div>
  );
};

export default SectionSwiper;
