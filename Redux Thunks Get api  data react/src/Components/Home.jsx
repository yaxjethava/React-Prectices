import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/Action'
import './Home.css'

const Home = () => {

    const { loading, error, data } = useSelector((data) => data)
    const dispatch = useDispatch()
    const [selectedProduct, setSelectedProduct] = useState(null);
    useEffect(() => {
        console.log(loading);
        console.log(error);
        console.log(data);
        dispatch(getData)
    }, [])


    return loading ? <div className="loading-container">
                        <div className="spinner"></div>
                        <p>Loading products...</p>
                     </div>  
                   :  
             error ? <h1>{data}</h1> :
        (<>
            <div className="product-grid">

                {/* show all products */}
                {data.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.thumbnail} alt={product.title} className="thumbnail" />
                        <div className="content">
                            <h2>{product.title}</h2>
                            <p className="category">{product.category}</p>
                            <p className="price">${product.price} <span className="discount">(-{product.discountPercentage}%)</span></p>
                            <p className="brand">{product.brand}</p>
                            <div className="tags">
                                {product.tags.map((tag, index) => (
                                    <span key={index} className="tag">{tag}</span>
                                ))}
                            </div>
                            <span className={`stock ${product.stock > 0 ? 'in' : 'out'}`}>{product.availabilityStatus}</span>
                            <button className="details-btn" onClick={() => setSelectedProduct(product)}>View Details</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* show selected products details */}
            {selectedProduct && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setSelectedProduct(null)}>&times;</span>
                        <h2>{selectedProduct.title}</h2>
                        <img src={selectedProduct.images[0]} alt={selectedProduct.title} className="modal-img" />
                        <p>{selectedProduct.description}</p>
                        <p><strong>SKU:</strong> {selectedProduct.sku}</p>
                        <p><strong>Weight:</strong> {selectedProduct.weight}g</p>
                        <p><strong>Warranty:</strong> {selectedProduct.warrantyInformation}</p>
                        <p><strong>Shipping:</strong> {selectedProduct.shippingInformation}</p>
                        <p><strong>Return Policy:</strong> {selectedProduct.returnPolicy}</p>
                        <p><strong>Minimum Order:</strong> {selectedProduct.minimumOrderQuantity}</p>
                        <h4>Reviews:</h4>
                        {selectedProduct.reviews.map((review, index) => (
                            <div key={index} className="review">
                                <p><strong>{review.reviewerName}</strong> ({review.rating}/5)</p>
                                <p>{review.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>)
}

export default Home
