import Navbar from "../Navbar";
import MainTitle from "../MainTitle";
import Footer from "../Footer";

import "../css/Services.css";

import featureImage from "../../assets/feature.png";
import servicesImage from "../../assets/services-image.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const features = [
  {
    id: 1,
    image: featureImage,
    title: "Custom Software & Mobile App Development",
    description: [
      "Enterprise Web Applications",
      "Native & Hybrid Mobile Apps",
      "API Development & Integration",
      "Cloud Architecture & DevOps",
    ],
  },
  {
    id: 2,
    image: featureImage,
    title: "UI/UX & Product Design",
    description: [
      "User Research & Wireframing",
      "Interactive Prototyping",
      "Design Systems Architecture",
      "Usability Testing",
    ],
  },
  {
    id: 3,
    image: featureImage,
    title: "Premium Brand Identity System",
    description: [
      "Brand Strategy & Positioning",
      "Logo & Visual Guidelines",
      "Corporate Collaterals",
      "Motion Graphics & 3D Assets",
    ],
  },
];

function Services() {
  return (
    <div className="services">
      <div className="container">
        <Navbar />

        {/* landing */}
        <div className="row landing align-items-center g-4 text-lg-start text-md-center text-center landing-row">
          <div
            className="col-12 col-lg-6 order-2 order-lg-1"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <h1 className="text-capitalize text-white mb-4 ms-lg-5">
              Our Expertise
            </h1>

            <h3 className="text-capitalize text-white-50 ms-lg-5 ps-lg-3">
              Transforming Ideas Into Scalable Digital Realities. From
              enterprise software engineering to award-winning brand identities.
              We provide end-to-end solutions that drive real business growth.
            </h3>
          </div>
          <div
            className="col-12 col-lg-6 order-1 order-lg-2 landing-image text-center"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <img className="img-fluid" src={servicesImage} alt="Codex" />
          </div>
        </div>

        {/* Horizontal Timeline */}
        <MainTitle title="Horizontal Timeline" />

        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              576: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
            }}
            className="features-slider"
          >
            {features.map((feature) => (
              <SwiperSlide key={feature.id}>
                <div className="feature">
                  <div className="row align-items-center g-4">
                    <h3 className="text-white text-center text-capitalize">
                      {feature.title}
                    </h3>
                    <div className="col-12 col-lg-7 col-md-6 order-2 order-lg-1 order-md-1">
                      <ul>
                        {feature.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-white text-lg-start text-md-start text-center"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-12 col-lg-5 col-md-6 order-1 order-lg-2 order-md-2 text-lg-end text-md-end text-center">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;
