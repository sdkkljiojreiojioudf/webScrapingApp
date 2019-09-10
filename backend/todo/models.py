from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class TodoList(models.Model):
    name = models.CharField(max_length = 200)
    user = models.ForeignKey(User, models.CASCADE)

class Todo(models.Model):
    name = models.CharField(max_length = 200)
    done = models.BooleanField(default=False)
    todo_list = models.ForeignKey(TodoList, models.CASCADE, null=True)   
