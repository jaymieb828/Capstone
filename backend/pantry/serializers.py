

from dataclasses import fields
from rest_framework import serializers

from .models import Pantry

class PantrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Pantry
        fields = ('id','item', 'quantity', 'add_to_list', 'categories','price', 'expiration', 'comments' )
        depth = 1
