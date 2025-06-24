import axios from 'axios'
import './CarCollaction.css'
import React, { useEffect, useState } from 'react'

const CarCollaction = () => {

    const [datas, setDatas] = useState([])

    const show = async () => {

        const responce = await axios.get("http://localhost:3000/datas")
        const finalData = responce.data
        console.log(finalData)
        setDatas(finalData)
    }

    useEffect(() => {
        show()
    }, [])

    return (
        <>
            <h1>Luxury Collection</h1>
            <div className="row">
                {datas.map((val, i) => {

                    return <div className="car-card" key={i}>
                        <img src={val.img} alt={val.name} className="car-image" />

                        <div className="car-content">
                            <h2 className="car-title">{val.name} </h2>
                            <span className='car-modal'>{val.modal}</span>
                            <p className="car-price">₹ {val.price} M</p>

                            <div className="car-color">
                                <span className="color-dot" style={{ backgroundColor: val.color_code }}></span>
                                <span>{val.color}</span>
                            </div>

                        </div>
                    </div>
                })}
            </div>

        </>
    )
}

export default CarCollaction
