import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, addProduct } from './productSlice';
import { useEffect, useState } from 'react';



const ProductDisplay = () => {

    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.productReducer);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const nextId = products?.length > 0 ? Math.max(...products.map(p => parseInt(p?.id))) + 1 : 1;

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && price) {
            dispatch(addProduct({ id: nextId, title, price: parseFloat(price)  }))
                .unwrap()
                .then(() => {
                setSuccessMessage('Product added successfully!');
                setTitle('');
                setPrice('');
                setTimeout(() => setSuccessMessage(''), 3000);
            })
            .catch((err) => console.error(err));
        }
    }


    return (
        <div className="container my-4">
            <h1>Products</h1>

            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">Add New Product</h5>
                    <form onSubmit={handleSubmit} className="add-product-form">
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Product Title</label>
                            <input  type="text" 
                                    id="title" 
                                    className="form-control" 
                                    value={title} 
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price ($)</label>
                            <input  type="number" 
                                    className="form-control"
                                    id="price"
                                    value={price} 
                                    onChange={(e) => setPrice(e.target.value)}
                                    step="0.01"
                                    min="0"
                                    required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Add Product</button>
                    </form>
                    {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
                </div>
            </div>


            { loading && <div className="alert alert-info">Loading products...</div> }
            { error && <div className="alert alert-danger"></div> }
            <div className="row">
                { products.map(product => (
                    product?.id && (
                        <div key={product.id} className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">${product.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    )
}

export default ProductDisplay
