from rest_framework import serializers
from .models import ShoppingList, Cart


class ShoppingListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingList
        fields = ['id', 'item','quantity','total']
    
    




class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ['id','total']