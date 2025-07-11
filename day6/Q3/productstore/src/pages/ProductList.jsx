import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filterCategory, setFilterCategory] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                const uniqueCategories = [...new Set(data.products.map(p => p.category))];
                setCategories(uniqueCategories);
            });
    }, []);

    let displayed = [...products];

    if (filterCategory) {
        displayed = displayed.filter(p => p.category === filterCategory);
    }

    if (sortOrder === 'low') {
        displayed.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high') {
        displayed.sort((a, b) => b.price - a.price);
    }

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Product Store</h1>

            <div style={{ marginBottom: '1rem' }}>
                <label>Filter by Category: </label>
                <select onChange={e => setFilterCategory(e.target.value)}>
                    <option value="">All</option>
                    {categories.map((cat, idx) => (
                        <option key={idx} value={cat}>{cat}</option>
                    ))}
                </select>

                <label style={{ marginLeft: '1rem' }}>Sort by Price: </label>
                <select onChange={e => setSortOrder(e.target.value)}>
                    <option value="">None</option>
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                </select>
            </div>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {displayed.map(product => (
                    <li key={product.id} style={{ marginBottom: '1rem' }}>
                        <Link to={`/product/${product.id}`}>
                            {product.title} - ₹{product.price}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
