import { memo } from "react"

const Todo = ({ todoList, setTodo, incre }) => {

    console.log('re rednded')
    return (
        <>
            <button onClick={incre}>Increment</button>
            <button onClick={setTodo}>Add task</button>

            {todoList.map((val, i) => {
                return <h3 key={i}>{val}</h3>
            })}

        </>
    )
}

export default memo(Todo)
