import Navbar from "../Navbar";
import MainTitle from "../MainTitle";
import Footer from "../Footer";

import "../css/Services.css";

import featureImage from "../../assets/feature.png";

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
            data-aos-delay="50">
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
            data-aos-delay="100">
            <img className="img-fluid" src={featureImage} alt="Codex" />
          </div>
        </div>

        {/* Horizontal Timeline */}
        <MainTitle title="Horizontal Timeline" />

        <div className="features-slider" data-aos="fade-up">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}>
            {features.map((feature) => (
              <SwiperSlide key={feature.id}>
                <div className="feature-item">
                  <img src={feature.image} alt={feature.title} />
                  <h3 className="text-white text-capitalize">
                    {feature.title}
                  </h3>
                  <ul>
                    {feature.description.map((item, i) => (
                      <li key={i} className="text-white-50">
                        {item}
                      </li>
                    ))}
                  </ul>
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
