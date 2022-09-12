from django.db import models

# Create your models here.
from django.db import models


# Create your models here.
class ShoppingList(models.Model):
    item = models.CharField(max_length=255)
    qty = models.IntegerField

