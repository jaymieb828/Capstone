from rest_framework import serializers
from .models import Categories
from django.db import models
from rest_framework import serializers 


class CategoriesSerializer(serializers.Serializer): 
    class Meta:
        model = Categories
        fields = ['id', 'type','item']
        depth = 1