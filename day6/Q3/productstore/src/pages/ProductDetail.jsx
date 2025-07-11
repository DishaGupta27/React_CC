import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    if (!product) return <p style={{ padding: '2rem' }}>Loading...</p>;

    return (
        <div style={{ padding: '2rem' }}>
            <Link to="/">🔙 Back to Products</Link>
            <h2>{product.title}</h2>
            <p>₹{product.price}</p>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <img src={product.thumbnail} alt={product.title} width="200" />
        </div>
    );
}

export default ProductDetail;
