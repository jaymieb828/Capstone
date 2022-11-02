 
from rest_framework import serializers

from .models import ShippingDetails, Orders

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = ('order_id','owner', 'order_url', 'products', 'total_price')
         

     