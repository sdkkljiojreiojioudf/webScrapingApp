import React from 'react'
import TodoList from '../todo/TodoList'

const TodoListItem = ({ elem, handlePressTodoListDelete }) => {
    return (
        <div className="todoListItem" key={elem.id}>
            <div className="todoListHeader">
                <div>{elem.name}</div>
                <div
                    className="deleteButton white"
                    onClick={(e) => { handlePressTodoListDelete(e, elem.id) }}
                >
                    Delete
                    </div>
            </div>
            <TodoList elem={elem} />
        </div>
    )
}

export default TodoListItem
