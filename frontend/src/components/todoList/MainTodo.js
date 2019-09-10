import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks';
import Loading from '../shared/Loading';
import Error from '../shared/Error';
import TodoListItem from './TodoListItem';
import { GET_ALL_TODOLIST, CREATE_TODOLIST, DELETE_TODOLIST } from './CRUD.js'




const MainTodo=()=>{
  const [todoListName, setTodoListName] = useState("");
  const { loading, error, data } = useQuery(GET_ALL_TODOLIST);

  const [createTodoList] = useMutation(CREATE_TODOLIST, {
    update(cache, { data: { createTodoList } }) {
      const { allTodoList } = cache.readQuery({ query: GET_ALL_TODOLIST });
      cache.writeQuery({
        query: GET_ALL_TODOLIST,
        data: { allTodoList: allTodoList.concat([createTodoList.todoList]) },
      })
    }
  });

  //delete todo
  const [deleteTodoList] = useMutation(DELETE_TODOLIST, {
    update(cache, { data: { deleteTodoList } }) {
      const { allTodoList } = cache.readQuery({ query: GET_ALL_TODOLIST });
      const newList = allTodoList.filter(obj => obj.id !== deleteTodoList.id.toString());
      cache.writeQuery({
        query: GET_ALL_TODOLIST,
        data: { allTodoList: newList },
      })

    }
  });

  const handlePressCreateTodoList = (e) => {
    e.preventDefault();
    createTodoList({ variables: { name: todoListName } });
    setTodoListName("");
  }

  const handlePressTodoListDelete = (e, id) => {
    console.log(id);
    e.preventDefault();
    deleteTodoList({ variables: { todo_list_id: id } })
  }

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  else return (
    <>
      <div className="todoListListContainer">
        <div><h5>Create a new todoList</h5></div>
        <div>
          <input type="text" value={todoListName} onChange={(e) => { setTodoListName(e.target.value) }} />
          <button onClick={(e) => { handlePressCreateTodoList(e) }}>Create</button>
        </div>
        {data.allTodoList.map(elem => (
          <TodoListItem key={elem.id} elem={elem} handlePressTodoListDelete={handlePressTodoListDelete} />
        ))}
      </div>
    </>
  )
}

export default MainTodo;
