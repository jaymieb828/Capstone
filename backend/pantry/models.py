from email.policy import default
from unicodedata import category
from django.db import models
from categories.models import Categories
from django.db.models.signals import pre_save
from django.dispatch import receiver
import datetime

 


# Create your models here.
class Pantry(models.Model):
    item = models.CharField(max_length=255)
    product_id = models.CharField(max_length=255,default='')
    upc = models.CharField(max_length=255,default='')
    price = models.FloatField(default=0)
    expiration=models.DateField(null=True)
    comments = models.CharField(max_length=255, null=True)
    category = models.CharField(max_length=255, null=True)
    def __str__(self):
        return f'{self.item} - {self.category}'



 