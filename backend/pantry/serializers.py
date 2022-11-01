from dataclasses import fields
from rest_framework import serializers
from categories.models import Categories 

from .models import Pantry

class PantrySerializer(serializers.ModelSerializer): 

    class Meta:
        model = Pantry 
        fields = ('id','item','product_id','upc',  'category','price', 'expiration', 'comments' )
        depth = 1

 
