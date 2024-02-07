import "./Testimonials.css";
// import Swipercore and required modules
// import { Pagination } from "swiper";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper style
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container tests-container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="test">
          <div className="client-avatar">
            <img src="" alt="" />
          </div>
          <h5 className="client-name">Ernest Achiever</h5>
          <small className="client-review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            error voluptatibus modi possimus quidem maiores?
          </small>
        </SwiperSlide>
        <SwiperSlide className="test">
          <div className="client-avatar">
            <img src="" alt="" />
          </div>
          <h5 className="client-name">Ernest Achiever</h5>
          <small className="client-review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            error voluptatibus modi possimus quidem maiores?
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
