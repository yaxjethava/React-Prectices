import { useEffect, useState } from 'react'
import './Home.css'
import { db } from './Firebase'
import { collection, getDocs } from 'firebase/firestore/lite';

const Home = () => {

    // set api old data
    const [data, setData] = useState([])

    async function getCars() {
        const arrayData = []
        const carsSnapshot = await getDocs(collection(db, 'Cars'));
        carsSnapshot.docs.map((val) => {
            arrayData.push(val.data())
        })
        console.log(arrayData)
        setData(arrayData)
    }
    // default run when browser is run
    useEffect(() => {
        getCars()
    }, [])
    return (

        <>
            <div className='row'>
                {data.map((val, i) => {

                    return <div className="car-card" key={i}>
                        <div className="car-image">
                            <img src={val.img} alt={`${val.company} ${val.modal}`} />
                        </div>
                        <div className="car-details">
                            <h2>{val.company} <span className="modal">{val.modal}</span></h2>
                            <p><strong>Price:</strong> ₹{val.price} Lakh</p>
                            <p><strong>Color:</strong> {val.color}</p>
                            <button className="view-btn">View Details</button>
                        </div>
                    </div>
                })}
            </div>

        </>
    )
}

export default Home
