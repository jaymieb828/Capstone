from django.db import models
from categories.models import Categories
import datetime

from shoppinglist.models import ShoppingList


# Create your models here.
class Pantry(models.Model):
    item = models.CharField(max_length=255)
    quantity = models.IntegerField()
    category = models.ForeignKey(Categories, on_delete=models.CASCADE)
    expiration = models.DateField()
    add_to_list=models.CharField(max_length=255)
    comments = models.CharField(max_length=255)
    