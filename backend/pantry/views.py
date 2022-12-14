from operator import itemgetter
from urllib import request
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

from shoppinglist.models import ShoppingList
from .models import Pantry
from categories.models import Categories
from categories.serializers import CategoriesSerializer
from .serializers import PantrySerializer
from rest_framework import views

from rest_framework.authentication import TokenAuthentication, BasicAuthentication
 
import datetime


# Create your views here.
# Combined PUT and DELETE 

 

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
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
        print(request.data)
        serializer = PantrySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)



class Category(views.APIView):
    permission_classes=[IsAuthenticated, ]
    def post(self,request):
        cats = Categories.objects.get(id = request.data['id'])
        serialzer = CategoriesSerializer(cats)
        return Response(serialzer.data, status=status.HTTP_200_OK)
    



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
# @permission_classes([IsAuthenticated])
def add_new_item(request):
    data = request.data 
    serializer = PantrySerializer(data=data)    

    if serializer.is_valid(): 
        serializer.save()  
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




# @api_view(['PUT','DELETE'])
# @permission_classes(IsAuthenticated)
# def update_item(request, pk):
#     item = get_object_or_404(Pantry, pk=pk)
#     if request.method == 'PUT':
#         serializer = PantrySerializer(item, data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
#     elif request.method == 'DELETE':
#         item.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)



class DelatefullPantry(views.APIView):
    permission_classes=[IsAuthenticated, ]
  
    def post(self,request):
        try:
            card_obj = Pantry.objects.get(id=request.data['id'])
             
            card_obj.delete()
            responsemessage = {"message":"Pantry Delated"}
        except:
            responsemessage = {"message":"Somthing wright"}
        return Response(responsemessage, status=status.HTTP_200_OK)