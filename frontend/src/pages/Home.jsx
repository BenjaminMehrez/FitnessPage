import AboutUs from "../components/Aboutus";
import Hero from "../components/Hero";
import { useEffect, useState } from "react"
import { getAllProducts } from "../api/products.api"
import { ProductCard } from "../components/ProductCard";




function Home() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await getAllProducts();
                setProducts(response);
            } catch (error) {
                setError('Error al cargar los productos');
                console.error('Error fetching products:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);


    return (
        <div>
            {/* Hero Section */}
            <Hero />

            {/* Breve descriptión */}
            <AboutUs />

            {/* Featured Products */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
                    <div className="flex mt-20 gap-20">
                        {isLoading ? (
                            <div>Loading products...</div>
                        ) : error ? (
                            <div>Error loading products: {error}</div>
                        ) : products.length === 0 ? (
                            <div>No products available</div>
                        ) : (
                            products.map(product => (
                                <ProductCard key={product.pid} product={product} />
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* More information */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-8">Why Choose Us?</h2>
                    <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
                        Because our mission is to help you reach your full potential. At FitZone, we offer more than just a gym; we provide a complete transformation experience.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-xl font-semibold mb-2">High-Quality Equipment</h3>
                            <p className="text-gray-600">We offer the best brands and equipment for your workout.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
                            <p className="text-gray-600">Open 24/7 so you can train whenever it suits you best.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-xl font-semibold mb-2">Expert Trainers</h3>
                            <p className="text-gray-600">Our certified team is ready to guide you.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-xl font-semibold mb-2">Motivating Community</h3>
                            <p className="text-gray-600">Join a fitness family that will inspire you every day.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
