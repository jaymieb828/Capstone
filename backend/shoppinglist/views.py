

# Create your views here.
from operator import itemgetter
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import ShoppingList
from .serializers import ShoppingListSerializer


# Create your views here.
# Combined PUT and DELETE 

@api_view(['GET', 'POST'])
@permission_classes([AllowAny,IsAuthenticated])
def shopping_list(request):
    
    if request.method == 'GET':
        items_id = request.query_params.get('id')
        print (items_id)
        items = ShoppingList.objects.all()
        if items_id:
            items = request.filter(items_id__name=items_id)
        items = ShoppingList.objects.all()
        serializer = ShoppingListSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = ShoppingListSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
   

@api_view(['GET','PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def update_list(request, pk):
    item = get_object_or_404(ShoppingList, pk=pk)
    if request.method == 'GET':
        serializer = ShoppingListSerializer(item)
        return Response(serializer.data)
    elif request.method == 'PUT': 
        serializer = ShoppingListSerializer(item, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
