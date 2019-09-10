import React, { useState } from 'react'
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import Loading from '../shared/Loading';
import Error from '../shared/Error';
import TodoItem from './TodoItem';
import { GET_TODO_BY_LIST, CREATE_TODO, DELETE_TODO } from './CRUD'

const Todo = ({ elem }) => {
  const [todoName, setTodoName] = useState("");

  // var : CREATE_TODO, extractname
  //create todo
  const [createTodo] = useMutation(CREATE_TODO, {
    update(cache, { data: { createTodo } }) {
      let extractName = "todoByList";
      const todoByList  = cache.readQuery({ query: GET_TODO_BY_LIST, variables: { todoListId: elem.id } })["todoByList"];
      console.log(todoByList["todoByList"]);
      cache.writeQuery({
        query: GET_TODO_BY_LIST,
        variables: { todoListId: elem.id },
        data: { todoByList: todoByList.concat([createTodo.todo]) },
      })
    }
  });
  //delete todo
  const [deleteTodo] = useMutation(DELETE_TODO, {
    update(cache, { data: { deleteTodo } }) {
      const { todoByList } = cache.readQuery({ query: GET_TODO_BY_LIST, variables: { todoListId: elem.id } });
      const newTodoByList = todoByList.filter(obj => obj.id !== deleteTodo.id.toString());
      cache.writeQuery({
        query: GET_TODO_BY_LIST,
        variables: { todoListId: elem.id },
        data: { todoByList: newTodoByList },
      })

    }
  });

  const handlePressCreateTodo = (e, todo_list_id) => {
    e.preventDefault();
    createTodo({ variables: { name: todoName, todo_list_id: todo_list_id } });
    setTodoName("");
  }
  const handlePressDeleteTodo = (e, id) => {
    console.log(id);
    e.preventDefault();
    deleteTodo({ variables: { todo_id: id } })
  }

  const { loading, error, data } = useQuery(GET_TODO_BY_LIST, {
    variables: {
      "todoListId": elem.id
    }
  });

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  else return (
    //create new todo
    <>
      <div>
        <input type="text" value={todoName} onChange={(e) => { setTodoName(e.target.value) }} />
        <button onClick={(e) => { handlePressCreateTodo(e, elem.id) }}>Add</button>
      </div>
      <div className="todoListContainer">
        {data.todoByList.map(elem => (
          <TodoItem elem={elem} key={elem.id} handlePressDeleteTodo={handlePressDeleteTodo} />
        ))}
      </div>
    </>
  )
}

export default Todo;

