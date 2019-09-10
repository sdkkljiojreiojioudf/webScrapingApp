import graphene

from graphene_django.types import DjangoObjectType

from todo.models import Todo, TodoList


class TodoListType(DjangoObjectType):
    """
        Represent TodoList type
    """
    class Meta:
        model = TodoList


class TodoType(DjangoObjectType):
    """
        Represent Todo type
    """
    class Meta:
        model = Todo


class Query(object):
    """
        Query todo models
    """
    all_todo = graphene.List(TodoType)
    all_todo_list = graphene.List(TodoListType)
    todo_by_list = graphene.List(TodoType, todo_list_id=graphene.Int())

    def resolve_all_todo_list(self, info, **kwargs):
        return TodoList.objects.all()

    def resolve_all_todo(self, info, **kwargs):
        return Todo.objects.all()

    def resolve_todo_by_list(self, info, **kwargs):
        if kwargs.get('todo_list_id'):
            return Todo.objects.filter(todo_list_id=kwargs.get('todo_list_id'))
        else:
            return None


class CreateTodoList(graphene.Mutation):
    """
        Create TodoList
    """
    class Arguments:
        """
            Arguments to create a new todo list
        """
        name = graphene.String()
    
    todo_list = graphene.Field(TodoListType)
    
    def mutate(self, info, name):
        # CREATE
        if name:
            todo_list = TodoList(name=name, user_id=1)
            todo_list.save()
        else:
            todo_list = None

        return CreateTodoList(todo_list=todo_list)


class CreateTodo(graphene.Mutation):
    """
        Create a todo item
    """
    class Arguments:
        """
            Arguments to create a new todo item
        """
        name = graphene.String()
        todo_list_id = graphene.Int()

    todo = graphene.Field(TodoType)
    
    def mutate(self, info, name, todo_list_id):
        # CREATE
        todo = Todo(name=name, todo_list_id=todo_list_id)
        todo.save()
        return CreateTodo(todo=todo)



class DeleteTodo(graphene.Mutation):
    """
        Delete a todo item
    """
    class Arguments:
        """
            Arguments to delete a todo item
        """
        todo_id = graphene.Int(required = True)
    
    id = graphene.Int()
    
    def mutate(self, info, todo_id):
        # DELETE
        todo = Todo.objects.get(id = todo_id)
        todo.delete()
        return DeleteTodo(id=todo_id)


class DeleteTodoList(graphene.Mutation):
    """
        Delete a todoLIST item
    """
    class Arguments:
        """
            Arguments to delete a Todolist
        """
        todo_list_id = graphene.Int(required = True)
    
    id = graphene.Int()
    
    def mutate(self, info, todo_list_id):
        # DELETE
        todo_list = TodoList.objects.get(id = todo_list_id)
        todo_list.delete()
        return DeleteTodoList(id=todo_list_id)










class Mutation(graphene.ObjectType):
    create_todo_list = CreateTodoList.Field()
    create_todo = CreateTodo.Field()
    delete_todo =  DeleteTodo.Field()
    delete_todo_list =  DeleteTodoList.Field()
    




