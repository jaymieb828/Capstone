
from django.db import models
import datetime

 


# Create your models here.
class Pantry(models.Model):
    item = models.CharField(max_length=255)
    quantity = models.IntegerField()
    price = models.IntegerField(default=0)
    add_to_list=models.CharField(max_length=255, null=True, blank=True)
    expiration=models.DateField(null=True)
    comments = models.CharField(max_length=255, null=True)
    category = models.CharField(max_length=500, null=True)