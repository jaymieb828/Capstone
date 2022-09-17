from rest_framework import serializers
from .models import Categories
from django.db import models


class CategoriesSerializer(models.Model):
    class Meta:
        model = Categories
        fields = ['id', 'type']
        depth = 1