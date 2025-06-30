import { Link, useNavigate } from "react-router-dom"
import './Navbar.css'
import { useRef, useState } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore/lite";
import { db } from "../Firebase";

const Navbar = () => {

    const navigate = useNavigate()
    const styleRef = useRef(null)

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

    // for showing form
    const addNewShow = () => {
        styleRef.current.style.display = "flex"
    }
    // for hiding form
    const hideForm = () => {
        styleRef.current.style.display = "none"
    }

    // set new data in state
    const handleSubmit = async (e) => {
        e.preventDefault()
        await addDoc(collection(db, 'Cars'), newData);
        console.log(newData);
        hideForm()
        setNewData({
            img: "",
            company: "",
            modal: "",
            color: "",
            price: ""
        })
        window.location.reload()
    }
  
    

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <a className="navbar-brand fw-bold" href="#">Car World</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Contact</a>
                            </li>
                        </ul>
                        <form className="d-flex mx-auto" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                        <div className='mx-5'>
                            <button className="btn mx-3" onClick={addNewShow} style={{ backgroundColor: "#001AAA", color: "white" }}>Add new</button>
                            <button className="btn" onClick={() => navigate('/dashboard')} style={{ backgroundColor: "#001AAA", color: "white" }} >Dhashboard</button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="form-parent" ref={styleRef}>
                <form className="car-form" onSubmit={handleSubmit}>
                    <h2>Add New Collection</h2>

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
        </>
    )
}

export default Navbar
