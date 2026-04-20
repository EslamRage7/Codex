import Navbar from "../Navbar";
import MainTitle from "../MainTitle";
import Numbers from "../Numbers";

import "../css/About.css";

import aboutImage from "../../assets/about.png";
import missionImage from "../../assets/mission.png";
import visionImage from "../../assets/vision.png";
import standImage from "../../assets/stand.png";
import teamImage from "../../assets/team.png";
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";

import Footer from "../Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function About() {
  const mission = [
    {
      id: 1,
      image: missionImage,
      title: "Mission",
      description:
        "To build digital products that are fast, scalable, and beautifully designed — helping our clients grow with confidence.",
    },
    {
      id: 2,
      image: visionImage,
      title: "Vision",
      description:
        "To become the most trusted partner for premium software and digital experiences in the region.",
    },
  ];

  const timeline = [
    {
      id: 1,
      year: "2022",
      side: "right",
      description:
        "Started As A Specialized Product Design & Development Team.",
    },

    {
      id: 2,
      year: "2023",
      side: "left",
      description: "Delivered Multi-Industry Web Platforms And Mobile Apps.",
    },

    {
      id: 3,
      year: "2024",
      side: "right",
      description:
        "Expanded Services To Full Brand Systems & Go-To-Market Support.",
    },

    {
      id: 4,
      year: "2026",
      side: "left",
      description:
        "Building Scalable Digital Ecosystems For Ambitious Businesses In KSA & Egypt.",
    },
  ];

  const standFor = [
    {
      id: 1,
      image: standImage,
      title: "Clarity First",
      description: "We simplify complexity and keep communication transparent.",
    },
    {
      id: 2,
      image: standImage,
      title: "Ownership",
      description: "We treat every project like it’s our own product.",
    },
    {
      id: 3,
      image: standImage,
      title: "Craft & Quality",
      description: "Details matter — from UX to performance.",
    },
    {
      id: 4,
      image: standImage,
      title: "Speed with Discipline",
      description: "We simplify complexity and keep communication transparent.",
    },
    {
      id: 5,
      image: standImage,
      title: "Partnership Mindset",
      description: "We build long-term relationships, not one-off projects.",
    },
    {
      id: 6,
      image: standImage,
      title: "Results-Driven",
      description: "We measure success by impact, not effort.",
    },
  ];

  const team = [
    {
      id: 1,
      name: "almhmdy ibrahim",
      title: "Project Manager",
      image: teamImage,
    },
    {
      id: 2,
      name: "almhmdy ibrahim",
      title: "SEO",
      image: teamImage,
    },
    {
      id: 3,
      name: "almhmdy ibrahim",
      title: "SEO",
      image: teamImage,
    },
  ];

  const clients = [
    {
      id: 1,
      title: "abd elghafor",
      image: client1,
      description:
        "Codex delivered beyond expectations. Clear communication, fast execution, and a premium final product.",
    },
    {
      id: 2,
      title: "sardina",
      image: client3,
      description:
        "Codex delivered beyond expectations. Clear communication, fast execution, and a premium final product.",
    },

    {
      id: 3,
      title: "Fatma koshary",
      image: client2,
      description:
        "Codex delivered beyond expectations. Clear communication, fast execution, and a premium final product.",
    },
    {
      id: 4,
      title: "ebn abd elghafor",
      image: client1,
      description:
        "Codex delivered beyond expectations. Clear communication, fast execution, and a premium final product.",
    },
  ];

  return (
    <div className="about">
      <div className="container">
        <Navbar />

        {/* landing */}
        <div className="row landing align-items-center g-4 text-lg-start text-md-center text-center landing-row">
          <div
            className="col-12 col-lg-6 order-2 order-lg-1"
            data-aos="fade-right"
            data-aos-delay="50">
            <h1 className="text-capitalize text-white mb-5 mb-lg-0 ms-lg-5 ">
              <span>Codex</span> is a premium software and digital agency
              serving ambitious businesses in KSA & Egypt combining engineering,
              design, and strategy under one roof.
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
          <a href="#" className="btn btn-one px-3 me-3">
            Book a Free Consultation
          </a>
          <a href="#" className="btn btn-two px-3">
            View
          </a>
        </div>

        {/* vission & mission */}
        <div className="row justify-content-center g-4 mt-5">
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
        <MainTitle title="our numbers" />
        <Numbers />

        {/*Timeline */}
        <MainTitle title="our story" />
        <div className="timeline-section mb-5">
          <div className="timeline-line"></div>
          {timeline.map((item, index) => (
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

        {/* What We Stand For */}
        <MainTitle title="What We Stand For" />
        <div className="row g-4 mb-5 pb-5">
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
        <MainTitle title="Meet the head" />
        <div className="row g-4 mb-5 pb-5">
          {team.map((member, index) => (
            <div
              key={member.id}
              className="col-lg-4 col-md-6 col-12 m-auto my-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}>
              <div className="team-card text-center">
                <img
                  className="img-fluid mb-3"
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

        {/* clients */}
        <MainTitle title="What Clients Say" />
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

        <div className="row align-items-center justify-content-between g-4 my-5 sub-client text-white">
          <div className="col-lg-7 col-md-7 col-12 text-center text-lg-start">
            <p className="mb-2">Ready to build something exceptional?</p>
            <p className="mb-0">
              Let’s discuss your goals and create a clear plan for launch and
              growth.
            </p>
          </div>
          <div className="col-lg-5 col-md-5 col-12 text-center text-lg-end">
            <a href="#" className="btn text-white px-4">
              Request a Free Proposal ➔
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
