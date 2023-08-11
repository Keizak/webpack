import React from "react"
import "./test.scss"
export const TestContainer = (props:any) => {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}
