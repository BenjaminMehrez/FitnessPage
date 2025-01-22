import { useEffect, useState } from "react"
import { getAllProducts } from "../api/products.api"
import { ProductCard } from "./ProductCard"



export function ProductsList() {
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
        <div className="flex mt-20 gap-20">
            {isLoading ? (
                <div>Cargando productos...</div>
            ) : error ? (
                <div>Error al cargar los productos: {error}</div>
            ) : products.length === 0 ? (
                <div>No hay productos disponibles</div>
            ) : (
                products.map(product => (
                    <ProductCard key={product.pid} product={product} />
                ))
            )}
        </div>
    );
}