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
import { useLanguage } from "../../context/LanguageContext";

function Services() {
  const { t } = useLanguage();

  const features = t.services.features.map((feature) => ({
    ...feature,
    image: featureImage,
  }));

  return (
    <div className="services">
      <div className="container">
        <Navbar />

        {/* landing */}
        <div className="row mx-lg-4 mx-md-4 mx-sm-3 mx-0 landing align-items-center g-4 text-lg-start text-md-center text-center landing-row">
          <div
            className="col-12 col-lg-6 order-2 order-lg-1  text-lg-start text-center"
            data-aos="fade-right"
            data-aos-delay="50">
            <h1 className="text-capitalize text-white mb-4">
              {t.services.landing.title}
            </h1>

            <h3 className="text-capitalize text-white-50 ps-lg-3">
              {t.services.landing.description}
            </h3>
          </div>

          <div
            className="col-12 col-lg-6 order-1 order-lg-2 landing-image text-center"
            data-aos="fade-left"
            data-aos-delay="100">
            <img className="img-fluid" src={servicesImage} alt="Codex" />
          </div>
        </div>

        {/* timeline */}
        <MainTitle title={t.services.timelineTitle} />
        <div className="row mx-lg-4 mx-md-4 mx-sm-3 mx-0 g-4 mb-4 text-center timeline-grid">
          {t.services.firstTimeline.map((card, index) => (
            <div
              key={card.id}
              className="col-lg-3 col-12 text-capitalize timeline-card">
              <div className="item">
                <h3 className="text-white mb-4">{card.title}</h3>
                <p className="text-white-50">{card.description}</p>
              </div>

              {index !== t.services.firstTimeline.length - 1 ? (
                <div className="line text-white"></div>
              ) : (
                <div className="line-bot text-white"></div>
              )}
            </div>
          ))}
        </div>

        {/* services */}
        <div className="row mx-lg-4 mx-md-4 mx-sm-3 mx-0 g-4 mb-5 pb-5 flex-row-reverse text-center timeline-grid">
          {t.services.secondTimeline.map((card, index) => (
            <div
              key={card.id}
              className="col-lg-3 col-12 text-capitalize timeline-card">
              <div className="item">
                <h3 className="text-white mb-4">{card.title}</h3>
                <p className="text-white-50">{card.description}</p>
              </div>

              {index !== t.services.firstTimeline.length - 1 && (
                <div className="second-line text-white"></div>
              )}
            </div>
          ))}
        </div>

        {/* slider */}
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
            className="features-slider">
            {features.map((feature) => (
              <SwiperSlide key={feature.id}>
                <div className="feature">
                  <div className="row mx-lg-4 mx-md-4 mx-sm-3 mx-0 align-items-center g-4 ">
                    <h3 className="text-white text-center text-capitalize">
                      {feature.title}
                    </h3>
                    <div className="col-12 col-lg-6 col-md-6 order-2 order-lg-1 order-md-1">
                      <ul>
                        {feature.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-white text-lg-start text-md-start text-center">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 order-1 order-lg-2 order-md-2 text-lg-end text-md-end text-center">
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
