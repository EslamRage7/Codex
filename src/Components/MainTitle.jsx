function MainTitle({ title }) {
  return (
    <h1
      className="main-title text-center my-5 pt-5 pb-3"
      data-aos="fade-up"
      data-aos-duration="650"
    >
      {title}
    </h1>
  );
}

export default MainTitle;
