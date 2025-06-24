import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import './DashBoard.css'
const DashBoard = () => {

  const formRef = useRef(null)
  const [data, setData] = useState([]);

  const [editId, setEditId] = useState(null)
  const [upadatedData, setUpadatedData] = useState({
    img: "",
    name: "",
    modal: "",
    price: "",
    color: "",
    color_code: ""
  })
  const handleChanges = (e) => {
    const { name, value } = e.target
    setUpadatedData({ ...upadatedData, [name]: value })
  }
  const handleForm = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/datas/${editId}`, upadatedData)
    addNewHide()
    window.location.reload()
  }
  const addNewShow = () => {
    formRef.current.style.display = 'block'
  }
  const addNewHide = () => {
    formRef.current.style.display = 'none'
  }


  const getData = async () => {
    const responce = await axios.get('http://localhost:3000/datas')
    const final = responce.data
    setData(final)
  }

  const onEdit = (id) => {
    setEditId(id)
    const filterdData = data.find((val) => val.id == id)
    setUpadatedData(filterdData)
    addNewShow()
  }
  const onDelete = async (id) => {
    await axios.delete(`http://localhost:3000/datas/${id}`)
    window.location.reload()
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>


      {/* form foor update */}
      <div className="form-parent" id='updateForm' ref={formRef}>

        <form className="w-50 p-3 mx-auto shadow" onSubmit={handleForm}>

          <div className="mb-3 img-preview">
            <div className='img-link-form'>
              <label className="form-label">Image link</label>
              <input required type="text" className="form-control" value={upadatedData.img} name="img" onChange={handleChanges} />
            </div>
            <div className='img-preview-form'>
              <img src={upadatedData.img} alt={upadatedData.name} />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input required type="text" className="form-control" value={upadatedData.name} name="name" onChange={handleChanges} />
          </div>
          <div className="mb-3">
            <label className="form-label">Modal</label>
            <input required type="text" className="form-control" value={upadatedData.modal} name="modal" onChange={handleChanges} />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input required type="number" className="form-control" value={upadatedData.price} name="price" onChange={handleChanges} />
          </div>
          <div className="mb-3">
            <label className="form-label">Color</label>
            <input required type="text" className="form-control" value={upadatedData.color} name="color" onChange={handleChanges} />
          </div>
          <div className="mb-3">
            <label className="form-label">Color Code</label>
            <input required type="color" className="form-control" value={upadatedData.color_code} name="color_code" onChange={handleChanges} />
          </div>

          <div className="submit-close-btn-div">
            <button type="button" className="btn btn-secondary" onClick={addNewHide}>Close</button>
            <button type="submit" className="btn btn-primary">Update</button>
          </div>

        </form>
      </div>

      <div className="car-table-container">
        <table className="car-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Model</th>
              <th>Price (Million)</th>
              <th>Color</th>
              <th>Color Code</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((car, i) =>
              <tr key={car.id}>
                <td><img src={car.img} alt={car.name} className="table-img" /></td>
                <td>{car.name}</td>
                <td>{car.modal}</td>
                <td>{car.price}</td>
                <td>{car.color}</td>
                <td>
                  <div className="color-box" style={{ backgroundColor: car.color_code }}></div>
                </td>
                <td>
                  <button className="edit-btn" onClick={() => onEdit(car.id)}>Edit</button>
                  <button className="delete-btn" onClick={() => onDelete(car.id)}>Delete</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default DashBoard



