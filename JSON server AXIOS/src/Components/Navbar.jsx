import { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const formRef = useRef(null)
    const [data, setData] = useState({
        img: "",
        name: "",
        modal: "",
        price: "",
        color: "",
        color_code: ""
    })

    const handleChanges = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const handleForm = (e) => {
        e.preventDefault();
        setFormData();
        addNewHide();
        window.location.reload()
        showData()
    }
    const addNewShow = () => {
        formRef.current.style.display = 'block'
    }
    const addNewHide = () => {
        formRef.current.style.display = 'none'
    }

    const setFormData = async () => {
        await axios.post("http://localhost:3000/datas", data)
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
                                <a className="nav-link" aria-current="page" href="#">Collections</a>
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
                            <button className="btn" onClick={navigate('/dashboard')}style={{ backgroundColor: "#001AAA", color: "white" }} >Dhashboard</button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* form foor update */}
            <div className="form-parent" id='updateForm' ref={formRef}>

                <form className="w-50 p-3 mx-auto shadow" onSubmit={handleForm}>
                    <div className="mb-3">
                        <label className="form-label">Image link</label>
                        <input required type="text" className="form-control" value={data.img} name="img" onChange={handleChanges} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input required type="text" className="form-control" value={data.name} name="name" onChange={handleChanges} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Modal</label>
                        <input required type="text" className="form-control" value={data.modal} name="modal" onChange={handleChanges} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input required type="number" className="form-control" value={data.price} name="price" onChange={handleChanges} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Color</label>
                        <input required type="text" className="form-control" value={data.color} name="color" onChange={handleChanges} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Color Code</label>
                        <input required type="color" className="form-control" value={data.color_code} name="color_code" onChange={handleChanges} />
                    </div>

                    <div className="submit-close-btn-div">
                        <button type="button" className="btn btn-secondary" onClick={addNewHide}>Close</button>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Navbar
