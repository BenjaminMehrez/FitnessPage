



export function ProductCard({product}) {
    
    return (
        <div class="product">
            <img src={product.image} alt={product.title} class="product-image" />
            <div class="product-info">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Precio: <span class="product-price">${product.price}</span></p>
                <button class="product-button">Agregar al carrito</button>
            </div>
        </div>
    )

}