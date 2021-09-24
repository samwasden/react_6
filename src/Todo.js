import React from 'react'

function Todo(props) {
    let list = props.tasks.map(word => {
        return <h2>{word}</h2>
    })

    return <div>{list}</div>
}

export default Todo
