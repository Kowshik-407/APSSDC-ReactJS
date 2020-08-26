import React, {useState} from 'react'

export default function FunctionHooks() {
    let [count, setCount] = useState(0)
    return (
        <div>
            <h2> Its Hooks Concept. </h2>
            <h4> Value of Count </h4>
            <h2> { count } </h2>
            <button onClick = { () => setCount(count + 1)}> Click Me to Upgrade </button>
            <hr></hr><hr></hr>
            <button onClick = { () => setCount(count - 1)}> Click Me to Degrade </button>
        </div>
    )
}
