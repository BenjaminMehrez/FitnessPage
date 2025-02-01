import "animate.css";
import { Link } from "react-router-dom";
import imghouse from "/imghouse.svg";

function HeroContact() {
  return (
    <section className="heroAbout relative bg-cover bg-center text-white py-20">
      <div className="container xl:max-w-7xl mx-auto flex flex-col text-center items-center gap-6 lg:items-start animate__animated animate__fadeIn animate__delay-0.8s">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          PRODUCTS
        </h1>
        <div className="inline-block text-lg font-medium">
          <ol className="flex items-center space-x-2">
            <li>
              <Link
                className="flex items-center text-white hover:text-gray-300"
                to="/"
              >
                <img className="w-5 h-5 mr-2 mb-1" src={imghouse} alt="Home Icon" />
                Home
              </Link>
            </li>
            <li>
              <span className="mx-1 color-primary">●</span>
            </li>
            <li className="color-primary">Products</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default HeroContact;
