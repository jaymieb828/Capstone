from operator import itemgetter
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Pantry
from .serializers import PantrySerializer


# Create your views here.
# Combined PUT and DELETE 
 

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def pantry_items(request):
    
    if request.method == 'GET':
        category_id = request.query_params.get('category')
        print (category_id)
        items = Pantry.objects.all()
        if category_id:
            items = request.filter(items_id__name=category_id)
        items = Pantry.objects.all()
        serializer = PantrySerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = PantrySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
   

@api_view(['GET','PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def update_item(request, pk):
    item = get_object_or_404(Pantry, pk=pk)
    if request.method == 'GET':
        serializer = PantrySerializer(item)
        return Response(serializer.data)
    elif request.method == 'PUT': 
        serializer = PantrySerializer(item, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#create request in views.py insided of Shoppinglist


@api_view(['POST'])
@permission_classes([AllowAny])
def add_new_item(request):
    print("enter", request.data)
    serializer = PantrySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        print("saved")
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
