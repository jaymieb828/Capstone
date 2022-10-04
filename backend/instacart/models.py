from django.db import models

# Create your models here.
# from django.contrib.postgres.fields import ArrayField
 

from decimal import Decimal
from pantry.models import Pantry

# Create your models here.

from authentication.models import User

class ShippingDetails(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE, null=True, blank=True)
    address = models.CharField(max_length=1000, null=True, blank=True)
    zip_code = models.CharField(max_length=1000, null=True, blank=True)
    phone_number = models.CharField(max_length=1000, null=True, blank=True)
    
    
    
class Orders(models.Model):
    order_id = models.CharField(max_length=1000, null=True, blank=True)
    owner = models.ForeignKey(User,null=True, blank=True, related_name='owner', on_delete=models.CASCADE)
    order_url = models.CharField(max_length=1000, null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    products = models.CharField(max_length=50, default=[])
    quantities = models.PositiveIntegerField(default=[])
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=Decimal('0.00'))
    delivery_method = models.CharField(max_length=30, default='')
    payment_method = models.CharField(max_length=30, default='')

    def __str__(self):
        return self.owner