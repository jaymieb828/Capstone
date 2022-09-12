from dataclasses import fields
from rest_framework import serializers

from .models import Pantry

class PantrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Pantry
        fields = ('id','item', 'quantity', 'expiration', 'category', 'category_id', 'comments', 'add_to_list')
        depth = 1

    category_id = serializers.IntegerField(write_only = True)