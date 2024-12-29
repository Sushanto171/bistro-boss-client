import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle";

const CategorySwiper = () => {
  return (
    <section className="my-10 pb-5">
      <SectionTitle subTitle="From 11:00am to 10:00pm" title="Order online" />
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img src={img1} alt="" />
            <p
              className="-mt-16 text-white font-semibold text-xl font-Cinzel "
              style={{ textShadow: "2px 2px 2px black" }}
            >
              Salads
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img2} alt="" />
            <p
              className="-mt-16 text-white font-semibold text-xl font-Cinzel "
              style={{ textShadow: "2px 2px 2px black" }}
            >
              Soups
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img3} alt="" />
            <p
              className="-mt-16 text-white font-semibold text-xl font-Cinzel "
              style={{ textShadow: "2px 2px 2px black" }}
            >
              Pizzas
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img4} alt="" />
            <p
              className="-mt-16 text-white font-semibold text-xl font-Cinzel "
              style={{ textShadow: "2px 2px 2px black" }}
            >
              Desserts
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img5} alt="" />
            <p
              className="-mt-16 text-white font-semibold text-xl font-Cinzel "
              style={{ textShadow: "2px 2px 2px black" }}
            >
              Salads
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CategorySwiper;
