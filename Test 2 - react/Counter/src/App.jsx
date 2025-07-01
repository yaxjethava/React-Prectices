import { useDispatch, useSelector } from "react-redux"
import { dicrement, increment, reset } from "./Redux/Action"

const App = () => {
  const { count } = useSelector(data => data)
  const dispatch = useDispatch()


  return (
    <>
      {count}

      <button onClick={() => dispatch(increment)}>+</button>
      <button onClick={() => dispatch(reset)}>Reset</button>
      <button onClick={() => dispatch(dicrement)}>-</button>
    </>
  )
}

export default App
