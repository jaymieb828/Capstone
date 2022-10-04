
from django.shortcuts import render
import requests
from .models import ShippingDetails
from .utils import id_generator

from operator import itemgetter
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from pantry.models import Pantry
from .serializers import OrderSerializer



@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def create_orders(request):
    
    if request.method == 'GET':
         
        return Response(status=status.HTTP_200_OK)
    elif request.method == 'POST':
        
        
        
        serializer = OrderSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)