import gql from 'graphql-tag';

export const GET_TODO_BY_LIST = gql`
query($todoListId:Int!){
  todoByList(todoListId:$todoListId){
    id
    name
  }
}
`;

export const CREATE_TODO = gql`
mutation($name:String!, $todo_list_id:Int!){
  createTodo(name:$name, todoListId:$todo_list_id){
    todo{
      id
      name
    }
  }
}
`;

export const DELETE_TODO = gql`
mutation($todo_id:Int!){
  deleteTodo(todoId:$todo_id){
    id
  }
}
`;