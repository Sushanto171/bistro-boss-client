import { Rating } from "@smastrom/react-rating";
import React, { useEffect, useState } from "react";

import "@smastrom/react-rating/style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const ClientsSays = () => {
  const axiosPublic = useAxiosPublic();
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchReviews();
  }, []);
  const fetchReviews = async () => {
    try {
      setLoading(true);
      const { data } = await axiosPublic("/reviews");
      setTestimonials(data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="my-8">
      <SectionTitle subTitle={"What our Clients say"} title={"testimonials"} />
      <div className="max-w-screen-md mx-auto">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
              <div className="swiper-zoom-container px-20 flex flex-col gap-4 ">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={testimonial.rating}
                  readOnly
                />
                <span className="text-6xl h-8">❝ </span>
                <p className="text-sm tracking-wider leading-relaxed">
                  {testimonial.details}
                </p>
                <h5 className="text-yellow-600 uppercase">
                  {testimonial.name}
                </h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientsSays;
