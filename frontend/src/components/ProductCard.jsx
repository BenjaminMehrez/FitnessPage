import { useNavigate } from "react-router-dom";




export function ProductCard({product}) {
    
    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </div>
    )

}