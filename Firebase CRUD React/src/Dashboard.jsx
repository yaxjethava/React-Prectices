import './Dashboard.css'
import { collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore/lite"
import { useEffect, useRef, useState } from "react"
import { db } from "./Firebase"

const Dashboard = () => {

    // take old data
    const [data, setData] = useState([])

    const styleRef = useRef(null)
    const [editId, setEditId] = useState(null)
    // set updated data
    const [newData, setNewData] = useState({
        img: "",
        company: "",
        modal: "",
        color: "",
        price: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewData({ ...newData, [name]: value });
    };
    // for taking data from server
    const getData = async () => {
        const responce = collection(db, 'Cars')
        const firebaseData = await getDocs(responce)
        const allData = firebaseData.docs.map(val => {
            let obj = { ...val.data(), ["id"]: val.id }
            return obj
        })
        setData(allData)
        console.log(allData);

    }

    // delete the data
    const handleDelete = async (id) => {
        await deleteDoc(doc(db, 'Cars', id))
        window.location.reload()
    }
    const handleEdit = async (id) => {
        setEditId(id)
        addNewShow()
        const editeOldData = data.find((val) => val.id == id)
        setNewData(editeOldData)
    }

    // set new data in state
    const handleSubmit = async (e) => {
        e.preventDefault()
        await updateDoc(doc(db, 'Cars', editId), newData);
        console.log(newData);
        hideForm()
        setNewData({
            img: "",
            company: "",
            modal: "",
            color: "",
            price: ""
        })
        setEditId(null)
        window.location.reload()
    }
    // for showing form
    const addNewShow = () => {
        styleRef.current.style.display = "flex"
    }
    // for hiding form
    const hideForm = () => {
        styleRef.current.style.display = "none"
    }
    useEffect(() => {
        getData()
    }, [])
    return (

        <div className="table-responsive shadow rounded">
            <table className="table table-bordered table-hover align-middle">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Company</th>
                        <th>Model</th>
                        <th>Color</th>
                        <th>Price (Lacs)</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((car, idx) => (
                        < tr key={idx} >
                            {console.log(car)}

                            <td>
                                <img
                                    src={car.img}
                                    alt={car.modal}
                                    className="car-img rounded"
                                />
                            </td>
                            <td>{car.company}</td>
                            <td>{car.modal}</td>
                            <td>{car.color}</td>
                            <td>{car.price}L</td>
                            <td>
                                <button
                                    onClick={() => handleEdit(car.id)}
                                    className="btn btn-primary btn-sm me-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(car.id)}
                                    className="btn btn-danger btn-sm"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* edit form data */}
            <div className="form-parent" ref={styleRef}>
                <form className="car-form" onSubmit={handleSubmit}>
                    <h2>Edit Collection</h2>

                    <input
                        type="text"
                        name="img"
                        placeholder="Car Image Link"
                        onChange={handleChange}
                        required
                        value={newData.img}
                    />

                    {/* 👇 Live Image Preview */}
                    {newData.img && (
                        <div className="preview-wrapper">
                            <img src={newData.img} alt="Preview" className="preview-img" />
                        </div>
                    )}

                    <input type="text" onChange={handleChange} value={newData.company} name="company" placeholder="Company Name" required />
                    <input type="text" onChange={handleChange} value={newData.modal} name="modal" placeholder="Modal Name" required />
                    <input type="text" onChange={handleChange} value={newData.color} name="color" placeholder="Color" required />
                    <input type="number" onChange={handleChange} value={newData.price} name="price" placeholder="Price" required />
                    <div className="btn-box">
                        <button className="btn-cancel" onClick={hideForm}>Cancel</button>
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        </div >

    )
}

export default Dashboard
