import gql from 'graphql-tag';

export const GET_ALL_TODOLIST = gql`
{
  allTodoList{
    id
    name
  }
}
`;

export const CREATE_TODOLIST = gql`
mutation($name:String!){
  createTodoList(name:$name){
    todoList{
      id
      name
    }
  }
}
`;

export const DELETE_TODOLIST = gql`
mutation($todo_list_id:Int!){
  deleteTodoList(todoListId:$todo_list_id){
    id
  }
}
`;