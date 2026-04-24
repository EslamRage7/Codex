import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Alert,
  Box,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import Navbar from "../Navbar";
import MainTitle from "../MainTitle";
import Footer from "../Footer";

import "../css/Contact.css";

import contactImage from "../../assets/contact-image.png";
import callImage from "../../assets/call.png";
import map from "../../assets/map.png";
import { useLanguage } from "../../context/LanguageContext";

const initialFormData = {
  fullName: "",
  email: "",
  service: "",
  companyName: "",
  phone: "",
  message: "",
  privacyAccepted: false,
};

const serviceValues = [
  "Graphic Design",
  "Web Development",
  "App Development",
  "Digital Marketing",
  "SEO",
];

function Contact() {
  const { t } = useLanguage();
  const form = useRef(null);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const social = [
    {
      id: 1,
      image: callImage,
      title: t.contact.social[0].title,
      description: t.contact.social[0].description,
      show: t.contact.social[0].show,
      link: "#",
    },
    {
      id: 2,
      image: callImage,
      title: t.contact.social[1].title,
      description: t.contact.social[1].description,
      show: t.contact.social[1].show,
      link: "mailto:info@codex.com",
    },
    {
      id: 3,
      image: callImage,
      title: t.contact.social[2].title,
      description: t.contact.social[2].description,
      show: t.contact.social[2].show,
      link: "https://wa.me/+20 10 10225976",
    },
  ];

  const inputSx = (fieldName) => ({
    "& .MuiOutlinedInput-root": {
      color: "#fff",
      "& fieldset": {
        borderColor: errors[fieldName]
          ? "rgba(248, 113, 113, 0.9)"
          : "rgba(255, 255, 255, 0.3)",
      },
      "&:hover fieldset": {
        borderColor: errors[fieldName]
          ? "rgba(248, 113, 113, 1)"
          : "rgba(255, 255, 255, 0.5)",
      },
      "&.Mui-focused fieldset": {
        borderColor: errors[fieldName] ? "#f87171" : "#a78bfa",
      },
    },
    "& .MuiOutlinedInput-input": {
      color: "#fff",
    },
    "& .MuiOutlinedInput-input::placeholder": {
      color: "rgba(255, 255, 255, 0.5)",
      opacity: 1,
    },
    "& label": {
      color: errors[fieldName] ? "#fca5a5" : "rgba(255, 255, 255, 0.7)",
    },
    "& label.Mui-focused": {
      color: errors[fieldName] ? "#fca5a5" : "#fff",
    },
    "& .MuiFormHelperText-root": {
      color: "#fecaca",
      marginLeft: 0,
    },
  });

  const selectSx = (fieldName) => ({
    color: "#fff",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: errors[fieldName]
        ? "rgba(248, 113, 113, 0.9)"
        : "rgba(255, 255, 255, 0.3)",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: errors[fieldName]
        ? "rgba(248, 113, 113, 1)"
        : "rgba(255, 255, 255, 0.5)",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: errors[fieldName] ? "#f87171" : "#a78bfa",
    },
    "& .MuiSvgIcon-root": {
      color: "#fff",
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const nextValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: nextValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = t.contact.validation.fullName;
    }

    if (!formData.email.trim()) {
      nextErrors.email = t.contact.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = t.contact.validation.emailInvalid;
    }

    if (!formData.service) {
      nextErrors.service = t.contact.validation.service;
    }

    if (!formData.companyName.trim()) {
      nextErrors.companyName = t.contact.validation.companyName;
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = t.contact.validation.phone;
    }

    if (!formData.message.trim()) {
      nextErrors.message = t.contact.validation.message;
    }

    if (!formData.privacyAccepted) {
      nextErrors.privacyAccepted = t.contact.validation.privacyAccepted;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    if (!validateForm()) {
      setStatus({
        type: "error",
        message: t.contact.validation.required,
      });
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_a3yh0na",
        "template_c0g3zzm",
        form.current,
        "_H2QCMHGnE9jMi9ji",
      )
      .then(
        () => {
          setStatus({
            type: "success",
            message: t.contact.validation.success,
          });
          setFormData(initialFormData);
          setErrors({});
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus({
            type: "error",
            message: t.contact.validation.failure,
          });
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleStatusClose = (_, reason) => {
    if (reason === "clickaway") return;
    setStatus({ type: "", message: "" });
  };

  return (
    <div className="contact">
      <div className="container">
        <Navbar />
        <div className="row mx-lg-4 mx-md-4 mx-sm-3 mx-0 landing align-items-center g-4 landing-row">
          <div
            className="col-12 col-lg-6 order-2 order-lg-1 home-content"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <h1 className="text-capitalize text-white mb-4">
              {t.contact.landing.title}
            </h1>
            <p className="text-capitalize text-white-50">
              {t.contact.landing.description}
            </p>
            <div className="btns-home">
              <a href="#" className="btn btn-one px-3">
                {t.contact.landing.primaryButton}
              </a>

              <a href="#" className="btn btn-two px-3">
                {t.contact.landing.secondaryButton}
              </a>
            </div>
          </div>
          <div
            className="col-12 col-lg-6 order-1 order-lg-2 landing-image text-center"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <img className="img-fluid" src={contactImage} alt="Codex" />
          </div>
        </div>

        <MainTitle title={t.contact.getInTouchTitle} />
        <div className="row mx-lg-4 mx-md-4 mx-sm-3 mx-0 g-4 mb-5">
          {social.map((item, index) => (
            <div key={item.id} className="col-12 col-md-4">
              <div
                className="service-card-wrapper"
                data-aos="fade-up"
                data-aos-delay={index * 150}
                data-aos-duration="700"
              >
                <div className="social-card text-center p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid mb-3"
                  />
                  <h3 className="text-capitalize text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white mb-3">{item.description}</p>
                  <div className="btns-home text-center m-auto">
                    <a
                      href={item.link}
                      className="btn text-center m-auto btn-one px-3"
                    >
                      {item.show}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <MainTitle title={t.contact.formTitle} />
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mx-lg-4 mx-md-4 mx-sm-3 mx-0 py-5"
          noValidate
        >
          <Snackbar
            open={Boolean(status.message)}
            autoHideDuration={4000}
            onClose={handleStatusClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={handleStatusClose}
              severity={status.type || "info"}
              variant="filled"
              className="contact-alert"
            >
              {status.message}
            </Alert>
          </Snackbar>

          <div className="row">
            <div
              className="col-lg-6 col-md-6 col-12"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  name="fullName"
                  label={t.contact.form.name}
                  value={formData.fullName}
                  onChange={handleChange}
                  error={Boolean(errors.fullName)}
                  helperText={errors.fullName}
                  sx={inputSx("fullName")}
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="email"
                  name="email"
                  label={t.contact.form.email}
                  value={formData.email}
                  onChange={handleChange}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                  sx={inputSx("email")}
                />
              </Box>
            </div>

            <div
              className="col-lg-6 col-md-6 col-12"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  name="companyName"
                  label={t.contact.form.company}
                  value={formData.companyName}
                  onChange={handleChange}
                  error={Boolean(errors.companyName)}
                  helperText={errors.companyName}
                  sx={inputSx("companyName")}
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="tel"
                  name="phone"
                  label={t.contact.form.phone}
                  value={formData.phone}
                  onChange={handleChange}
                  error={Boolean(errors.phone)}
                  helperText={errors.phone}
                  sx={inputSx("phone")}
                />
              </Box>
            </div>

            <div
              className="col-lg-12"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <Box sx={{ mb: 2 }}>
                <Select
                  fullWidth
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  displayEmpty
                  error={Boolean(errors.service)}
                  sx={selectSx("service")}
                >
                  <MenuItem value="">{t.contact.form.servicePlaceholder}</MenuItem>
                  {serviceValues.map((value, index) => (
                    <MenuItem key={value} value={value}>
                      {t.contact.form.services[index]}
                    </MenuItem>
                  ))}
                </Select>
              </Box>

              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="message"
                  label={t.contact.form.message}
                  multiline
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  error={Boolean(errors.message)}
                  helperText={errors.message}
                  sx={inputSx("message")}
                />
              </Box>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="privacyAccepted"
                  checked={formData.privacyAccepted}
                  onChange={handleChange}
                  id="checkDefault"
                />
                <label
                  className="form-check-label text-white"
                  htmlFor="checkDefault"
                >
                  {t.contact.form.privacy}
                </label>
              </div>

              <button
                type="submit"
                className="text-white mt-4 px-5 py-2 m-auto d-block btn-form"
                disabled={isSubmitting}
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
              </button>
            </div>
          </div>
        </form>

        <MainTitle title={t.contact.nextTitle} />
        <div className="row mx-lg-4 mx-md-4 mx-sm-3 mx-0">
          <div className="col-12">
            <div className="row">
              <div className="col-12 next d-flex justify-content-center">
                <ul
                  className="text-white"
                  data-aos="fade-up"
                  data-aos-duration="650"
                >
                  {t.contact.nextSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="map mx-lg-4 mx-md-4 mx-sm-3 mx-0 my-5">
          <div className="row">
            <div className="col-12">
              <img
                className="img-fluid w-100 h-100 "
                data-aos="fade-up"
                data-aos-duration="750"
                src={map}
                alt="map"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

