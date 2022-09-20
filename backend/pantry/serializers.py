from dataclasses import fields
from rest_framework import serializers

from .models import Pantry

class PantrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Pantry
        fields = ('id','item', 'quantity', 'add_to_list', 'category', 'expiration', 'comments' )
        depth = 1

category_id = serializers.IntegerField(write_only = True)