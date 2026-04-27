import Navbar from "../Navbar";
import MainTitle from "../MainTitle";
import Numbers from "../Numbers";
import Footer from "../Footer";

import "../css/About.css";

import aboutImage from "../../assets/about.png";
import missionImage from "../../assets/mission.png";
import visionImage from "../../assets/vision.png";
import standImage from "../../assets/stand.png";
import teamImage from "../../assets/team.png";
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";

function About() {
  const { t } = useLanguage();

  const missionImages = {
    1: missionImage,
    2: visionImage,
  };

  const clientImages = {
    1: client1,
    2: client3,
    3: client2,
    4: client1,
  };

  const mission = t.about.mission.map((item) => ({
    ...item,
    image: missionImages[item.id],
  }));

  const standFor = t.about.standFor.map((item) => ({
    ...item,
    image: standImage,
  }));

  const team = t.about.team.map((member) => ({
    ...member,
    image: teamImage,
  }));

  const clients = t.about.clients.map((client) => ({
    ...client,
    image: clientImages[client.id],
  }));

  return (
    <div className="about">
      <div className="container">
        <Navbar />

        {/* landing */}
        <div className="row mx-lg-4 mx-md-4 mx-sm-3 mx-0 landing align-items-center g-4 text-lg-start text-md-center text-center landing-row">
          <div
            className="col-12 col-lg-6 order-2 order-lg-1"
            data-aos="fade-right"
            data-aos-delay="50">
            <h1 className="text-capitalize text-white mb-5 mb-lg-0">
              <span>{t.about.landingSubTitle}</span>
              {t.about.landingTitle}
            </h1>
          </div>
          <div
            className="col-12 col-lg-6 order-1 order-lg-2 landing-image text-center"
            data-aos="fade-left"
            data-aos-delay="100">
            <img className="img-fluid" src={aboutImage} alt="Codex" />
          </div>
        </div>
        <div
          className="btns-home text-center mb-5"
          data-aos="fade-up"
          data-aos-delay="200">
          <Link to="/contact" className="btn btn-one px-3 me-3">
            {t.about.consultationButton}
          </Link>
          <a href="#team" className="btn btn-two me-3 px-3">
            {t.about.viewButton}
          </a>
        </div>

        {/* mission */}
        <div className="row mx-lg-4 mx-md-4 mx-sm-3 mx-0 justify-content-center g-4 mt-5">
          {mission.map((item, index) => (
            <div
              key={item.id}
              className="col-lg-4 col-md-6 col-12 d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}>
              <div className="mission-box">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                  <h3 className="text-capitalize text-white m-0">
                    {item.title}
                  </h3>
                  <img
                    className="img-fluid mission-img"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <p className="text-white-50 mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* numbers */}
        <MainTitle title={t.about.numbersTitle} />
        <Numbers />

        {/* timeline */}
        <MainTitle title={t.about.storyTitle} />
        <div className="timeline-section mb-5">
          <div className="timeline-line"></div>
          {t.about.timeline.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-item timeline-${item.side}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}>
              <div className="timeline-spacer"></div>
              <div className="timeline-dot"></div>
              <div className="timeline-arrow">→</div>
              <div className="timeline-content">
                <h3 className="timeline-year">{item.year}</h3>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* stand for */}
        <MainTitle title={t.about.standForTitle} />
        <div className="row mx-lg-4 mx-md-4 mx-sm-3 mx-0 g-4 mb-5 pb-5">
          {standFor.map((item, index) => (
            <div
              key={item.id}
              className="col-lg-4 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay={index * 100}>
              <div className="reason-card text-lg-start text-md-start text-center text-sm-center d-flex align-items-center justify-content-between">
                <div className="info">
                  <h3 className="text-white text-capitalize mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white-50">{item.description}</p>
                </div>
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          ))}
        </div>

        {/* team */}
        <MainTitle title={t.about.teamTitle} />
        <div
          className="row mx-lg-4 mx-md-4 mx-sm-3 mx-0 g-4 mb-5 pb-5"
          id="team">
          {team.map((member, index) => (
            <div
              key={member.id}
              className="col-lg-4 col-md-6 col-12 m-auto my-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}>
              <div className="team-card text-center">
                <img
                  className="img-fluid mb-lg-3 mb-md-2 mb-sm-1 mb-0"
                  src={member.image}
                  alt={member.name}
                />

                <h3 className="text-white text-capitalize my-3">
                  {member.name}
                </h3>
                <p className="text-white-50 text-capitalize mb-0">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* What Clients Say */}
        <MainTitle title={t.about.clientsTitle} />
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
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
          }}
          className="clients-slider mb-5">
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="client-card" data-aos="fade-up">
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid client-img me-3"
                    src={client.image}
                    alt={client.title}
                  />
                  <h3 className="text-white text-capitalize my-3">
                    {client.title}
                  </h3>
                </div>
                <p className="text-white-50 mt-4 mb-0">{client.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Ready to build something exceptional? */}
        <div className="row align-items-center justify-content-between g-4 my-5 sub-client text-white">
          <div className="col-lg-7 col-md-7 col-12 text-center text-lg-start">
            <Link to="/contact" className="text-decoration-none text-white">
              <p className="mb-2">{t.about.cta.title}</p>
              <p className="mb-0">{t.about.cta.description}</p>
            </Link>
          </div>
          <div className="col-lg-5 col-md-5 col-12 text-center text-lg-end">
            <Link to="/contact" className="btn text-white px-4">
              {t.about.cta.button}
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
