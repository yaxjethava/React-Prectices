import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getServerData } from './Redux/Action'

const App = () => {

  const dipatch = useDispatch()

  const { loading, error, data } = useSelector(data => data)
  console.log(data);

  useEffect(() => {
    dipatch(getServerData)
  }, [])

  return (loading ? <h1>Loading...</h1> : error ? <h1>{data}</h1> :
    <>

      <table border={1}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Thubnaill</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {data.map((data, i) => {

            return <tr key={data.id}>
              <td>{data.id}</td>
              <td> {data.title}</td>
              <td> <img src={data.thumbnail} alt={data.title} /></td>
              <td> {data.price}</td>
            </tr>




          })}


        </tbody>
      </table>


    </>
  )
}

export default App
