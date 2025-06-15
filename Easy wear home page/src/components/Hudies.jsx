import React, { useState } from 'react'
import './Hudies.css'

//             props
const Hudies = (data) => {
    const [count, setCount] = useState(0);

    const updateCart = () => {
        console.log(count);
        setCount(count + 1);
    }
console.log(data.dataObj)
    return (
        <>
            <div className="container">
                <h1>Trending now</h1>
                <br />
                <br />

                <div className="row">
                    {data.dataObj.map((val, index) => {

                        return <div key={index} className="col-xl-3 col-lg-4 col-sm-6 col-12 card-main-box">
                            <div className="dress-card">
                                <div className="dress-card-head">
                                    {/* image url */}
                                    <img
                                        className="dress-card-img-top"
                                        src={val.img}
                                        alt=""
                                    />
                                    <div className="surprise-bubble">
                                        <span className="dress-card-heart">
                                            <i className="fas fa-heart" />
                                        </span>
                                        <a href="#">
                                            <span>More</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="dress-card-body">
                                    <h4 className="dress-card-title">{val.title}
                                    </h4>
                                    <p className="dress-card-para">{val.description}</p>
                                    <p className="dress-card-para">
                                        <span className="dress-card-price">{val.price}  </span>
                                        <span className="dress-card-crossed">{val.s_price}</span>
                                        <span className="dress-card-off">{val.offer}</span>
                                    </p>
                                    <div className="row">
                                        <div className="col-md-6 card-button">
                                            <div className="card-button-inner bag-button" onClick={updateCart}>Add to Bag</div>
                                        </div>
                                        <div className="col-md-6 card-button">
                                            <a href="">
                                                <div className="card-button-inner wish-button">Whishlist</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}

                    <div className="cart-fixed-icon">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span>{count}</span>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Hudies
