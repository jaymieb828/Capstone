
from unicodedata import category
from django.db import models
from categories.models import Categories
import datetime

 


# Create your models here.
class Pantry(models.Model):
    item = models.CharField(max_length=255)
    quantity = models.IntegerField()
    price = models.IntegerField(default=0)
    add_to_list=models.CharField(max_length=255, null=True, blank=True)
    expiration=models.DateField(null=True)
    comments = models.CharField(max_length=255, null=True)
    categories = models.ForeignKey(Categories, on_delete=models.CASCADE, null=True)