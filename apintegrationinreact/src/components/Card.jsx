function Card({products}){
    return (<>
    <div className="product-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">Price: ${product.price}</p>
            <button className="product-price buy" > Buy Now </button>
          
          </div>
        ))}
      </div>
    </>)
}

export default Card