from rest_framework import serializers
from .models import ShoppingList


class ShoppinglstSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingList
        fields = ['id', 'item', 'qty']
        depth = 1