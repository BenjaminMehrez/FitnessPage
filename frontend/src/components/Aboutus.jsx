import imgaboutus from "/imgabout.jpg";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function AboutUs() {
  return (
    <div className="max-w-7xl m-auto flex flex-col justify-evenly px-12 h-200 lg:flex-row items-center lg:justify-between" data-aos="fade-left"
    data-aos-anchor="#example-anchor"
    data-aos-offset="500"
    data-aos-duration="500">
      {/* Texto (lado izquierdo en pantallas grandes) */}
      <div className="lg:w-1/2 text-center lg:text-left lg:pr-20">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          We are a fitness store dedicated to providing high-quality products to
          help you achieve your health and wellness goals. Our mission is to
          empower you with the tools and knowledge needed for a healthier,
          happier life.
        </p>
      </div>

      {/* Imagen (lado derecho en pantallas grandes) */}
      <div
        className="lg:w-1/2  max-w-130 overflow-hidden rounded-lg"
      >
        <img src={imgaboutus} alt="About us" className="rounded-lg duration-300  hover:scale-105" />
      </div>
    </div>
  );
}

export default AboutUs;
