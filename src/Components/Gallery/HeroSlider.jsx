import React from "react";
import GalleryHeader from "./GalleryHeader";

import { slidercontent } from "../Gallery/SiderContent";

import "swiper/css";
import "swiper/css/bundle";
import "./styles.css"; 

import { Navigation, Pagination, Scrollbar} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


function HeroSlider() {
  return (
    <>
      <GalleryHeader />
      <div className="flex justify-center items-center px-10 md:px-32 xl:px-50 py-10 bg-white">
        <div className="max-w-[1050px] w-full h-[540px]">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
          >
            {slidercontent.events.map((event) => (
              <SwiperSlide key={event.id} className="bg-black">
                <div
                  className="bg-cover bg-center h-[540px] w-full flex justify-center xl:justify-start items-center  xl:px-14"
                  style={{
                    backgroundImage: `url(${event.img})`,
                  }}
                >
                  <div className="bg-[#0000009f] p-10 text-center w-[90%] md:w-[60%] xl:w-[40%] min-h-[80%] h-auto rounded-2xl">
                    <h3 className="text-[28px] md:text-[32px] text-white mb-[20px]">
                      {event.title}
                    </h3>
                    <p className="text-[14px] md:text-[17px] text-white text-start">{event.content}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default HeroSlider;
