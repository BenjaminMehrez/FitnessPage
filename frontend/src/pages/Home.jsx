import AboutUs from "./Aboutus";
import CategoryCard from "../components/CategoryCard";
import Hero from "../components/Hero";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

// IMG
import imgprotein from "/prote.jpeg";
import preworkout from "/preworkout.jpg";
import imgminerals from "/minerales.jpg";
import whoimg1 from "/whoimg1.jpg";
import whoimg2 from "/whoimg2.jpg";
import whoimg3 from "/whoimg3.jpg";
import imgpesa from "/pesa.svg";
import imgarm from "/arm.svg";
import imgclock from "/clock.svg";

function Home() {

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Breve descriptión */}

      {/* Featured Products */}
      <section className="pt-20 pb-32 px-12 bg-gray-200">
        <div className="">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Products
          </h2>
          <p className="text-lg text-center">
            Carefully curated supplements for energy, strength, and daily
            health.
          </p>
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center mt-14 gap-10">
            <CategoryCard
              category={"Protein Powders"}
              description={"Fuel Your Workouts: Premium Vegan Protein Powder"}
              image={imgprotein}
            />
            <CategoryCard
              category={"Pre-Workout Supplements"}
              description={"Unleash Your Energy: Top Pre-Workout Supplement"}
              image={preworkout}
            />
            <CategoryCard
              category={"Vitamins and Minerals"}
              description={"Daily Wellness: Essential Multivitamins & Minerals"}
              image={imgminerals}
            />
          </div>
        </div>
      </section>

      {/* More information */}
      <section className="pt-20 pb-32 px-12">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-center mb-8">
            Why Choose Us?
          </h2>
          <p className="text-md text-center text-gray-600 mb-16">
            Because our mission is to help you reach your full potential. At
            FitZone, we offer more than just a gym; we provide a complete
            transformation experience.
          </p>
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-30">
            <div className="flex flex-col items-center text-center max-w-80 bg-gray-200" data-aos="zoom-out">
              <div className="py-10 px-8 pb-20">
                <h3 className="text-xl font-semibold mb-5">
                  High-Quality Equipment
                </h3>
                <p className="text-gray-600 text-base/7">
                  We offer the best brands and equipment for your workout.
                </p>
              </div>
              <div className="relative flex justify-center items-center">
                <img
                  src={whoimg1}
                  alt="whoimg1"
                  className="w-80 h-64 object-cover object-top"
                />

                <img
                  src={imgpesa}
                  alt="imgpesa"
                  className="absolute inset-0 mx-auto -top-10 w-24 background-primary p-5 rounded-full"
                />
              </div>
            </div>

            <div className="flex flex-col items-center text-center max-w-80 bg-gray-200" data-aos="zoom-out">
              <div className="py-10 px-8 pb-20">
                <h3 className="text-xl font-semibold mb-5">Flexible Hours</h3>
                <p className="text-gray-600 text-base/7">
                  Open 24/7 so you can train whenever it suits you best.
                </p>
              </div>
              <div className="relative flex justify-center items-center">
                <img
                  src={whoimg2}
                  alt="whoimg2"
                  className="w-80 h-64 object-cover object-top"
                />

                <img
                  src={imgclock}
                  alt="imgpesa"
                  className="absolute inset-0 mx-auto -top-10 w-20 background-primary p-5 rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col items-center text-center max-w-80 bg-gray-200" data-aos="zoom-out">
              <div className="py-10 px-8 pb-20">
                <h3 className="text-xl font-semibold mb-5">Expert Trainers</h3>
                <p className="text-gray-600 text-base/7">
                  Our certified team is ready to guide you.
                </p>
              </div>
              <div className="relative flex justify-center items-center">
                <img 
                  src={whoimg3}
                  alt="whoimg3"
                  className="w-80 h-64 object-cover object-top"
                />

                <img
                  src={imgarm}
                  alt="imgpesa"
                  className="absolute inset-0 mx-auto -top-10 w-24 background-primary p-5 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
