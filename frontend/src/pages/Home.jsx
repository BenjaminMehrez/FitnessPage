import AboutUs from "../components/Aboutus";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Breve descripción */}
      <AboutUs />

      {/* Productos destacados */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">Productos Destacados</h2>
        <div className="mt-8 flex justify-center gap-8">
          {/* Producto 1 */}
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h3 className="font-bold">Dumbbells</h3>
            <p>Perfectos para ejercicios de fuerza.</p>
          </div>
          {/* Producto 2 */}
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h3 className="font-bold">Yoga Mat</h3>
            <p>Ideal para tus sesiones de yoga.</p>
          </div>
        </div>
      </section>

      {/* Más información */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold">¿Por qué elegirnos?</h2>
        <p className="mt-4 text-lg">
          Porque nuestra misión es ayudarte a alcanzar tu mejor versión.
        </p>
      </section>
    </div>
  );
}

export default Home;
