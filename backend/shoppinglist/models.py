

# Create your models here.
from django.db import models
from authentication.models import User
from pantry.models import Pantry


# Create your models here.

     
     

class Cart(models.Model):
    customer = models.ForeignKey(User,on_delete=models.CASCADE, null=True)
    total = models.PositiveIntegerField(null=True)
    complit = models.BooleanField(default=False)
    date = models.DateField(auto_now_add=True)



class ShoppingList(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, null=True)
    item = models.ForeignKey(Pantry,on_delete=models.CASCADE, null=True)
    quantity = models.IntegerField(default=1)
    total = models.PositiveIntegerField(default=0, null=True)
    


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    cart = models.ForeignKey(Cart,on_delete=models.CASCADE, null=True, )
    
    subtotal = models.PositiveIntegerField(null=True)
    def __str__(self):
        return f" Order:{self.id} "
    
    
    
    