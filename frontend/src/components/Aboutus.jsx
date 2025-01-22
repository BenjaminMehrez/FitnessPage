import imgaboutus from '/imgabout.jpg'


function AboutUs() {
    return (
        <div className="max-w-7xl m-auto py-20 px-8 flex flex-col lg:flex-row items-center gap-8">
            {/* Texto (lado izquierdo en pantallas grandes) */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg">
                    We are a fitness store dedicated to providing high-quality products to
                    help you achieve your health and wellness goals. Our mission is to
                    empower you with the tools and knowledge needed for a healthier,
                    happier life.
                </p>
            </div>

            {/* Imagen (lado derecho en pantallas grandes) */}
            <div className="lg:w-1/2 flex justify-center">
                <img
                    src={imgaboutus}
                    alt="About us"
                    className="rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
}

export default AboutUs;

