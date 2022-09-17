from dataclasses import fields
from rest_framework import serializers

from .models import Pantry

class PantrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Pantry
        fields = ('id','item', 'quantity', 'category', 'expiration', 'add_to_list','comments' )
        depth = 1

