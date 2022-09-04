
from unicodedata import category
from django.shortcuts import get_object_or_404
from logging import raiseExceptions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PantrySerializer
from .models import Pantry
from pantry import serializers
from rest_framework import status

# Create your views here.

@api_view(['GET', 'POST'])
def pantry_list(request):
    
    if request.method == 'GET':
        
        category_name = request.query_params.get('categories')
        print(category_name)

        
        Pantry = Pantry.objects.all()

        if category_name:
            items = items.filter(cagtegory__name=category_name)

        serializer= PantrySerializer(Pantry, many=True)
        return Response(serializer.data)  
    elif request.method == 'POST':
        serializer = PantrySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
    
        return Response(serializer.errors, status = status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE'])
def pantry_detail(request, pk):
    Pantry = get_object_or_404(Pantry, pk=pk)
    if request.method == 'GET':
        serializer = PantrySerializer(Pantry)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = PantrySerializer(Pantry, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        Pantry.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        






   

