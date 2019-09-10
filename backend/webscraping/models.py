from django.db import models


# Create your models here.
class Keyword(models.Model):
    keyword = models.CharField(max_length=200)


class Result(models.Model):
    keyword = models.ForeignKey(Keyword, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    nb_sale = models.IntegerField(null=True)
