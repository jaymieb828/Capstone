from django.db import models
from categories.models import Categories
import datetime


# Create your models here.
class Pantry(models.Model):
    item = models.CharField(max_length=255)
    date_of_purchase = models.DateField
    category = models.ForeignKey(Categories, on_delete=models.CASCADE)
    comments = models.CharField(max_length=255)