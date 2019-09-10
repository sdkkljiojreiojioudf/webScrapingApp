import React from 'react'

const TodoItem = ({ elem, handlePressDeleteTodo }) => {
    
    
    return (
        <div key={elem.id} className="todoItem">
            <div className="centeredLeft">{elem.name}</div>
            <div className="deleteButton"  onClick={(e) => {  handlePressDeleteTodo(e, elem.id) }}>Delete</div>
        </div>
    )
}

export default TodoItem
