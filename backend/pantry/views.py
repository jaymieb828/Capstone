from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Pantry
from .serializers import PantrySerializer


# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_pantry_items(request):
    items = Pantry.objects.all()
    serializer = PantrySerializer(items, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_items(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = PantrySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        items = Pantry.objects.filter(user_id=request.user.id)
        serializer = PantrySerializer(cars, many=True)
        return Response(serializer.data)


# @api_view(['PUT'])
# @permission_classes([IsAuthenticated])
# def update_item(request, pk):
#     item = get_object_or_404(Pantry, pk=pk)
#     serializer = PantrySerializer(item, data=request.data)
#     if serializer.is_valid():
#         serializer.save(user=request.user)
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   

