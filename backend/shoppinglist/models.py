


# Create your models here.
from django.db import models
from authentication.models import User
from pantry.models import Pantry


# Create your models here.
class ShoppingList(models.Model):
    
    item = models.ForeignKey(Pantry,on_delete=models.CASCADE, null=True)
    quantity = models.IntegerField(default=0)
    
     
     

class Cart(models.Model):
    customer = models.ForeignKey(User,on_delete=models.CASCADE, null=True)
    total = models.PositiveIntegerField(null=True)
    complit = models.BooleanField(default=False)
    date = models.DateField(auto_now_add=True)

class CartProduct(models.Model):
    cart = models.ForeignKey(Cart,on_delete=models.CASCADE, null=True, )
    product = models.ManyToManyField(Pantry, null=True)
    price = models.PositiveIntegerField(null=True)
    quantity = models.PositiveIntegerField(null=True)
    subtotal = models.PositiveIntegerField(null=True)
    def __str__(self):
        return f"Cart=={self.cart.id}<==>CartProduct:{self.id}==Qualtity=={self.quantity}"