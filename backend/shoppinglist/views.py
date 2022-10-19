# Create your views here.
from operator import itemgetter
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import *
from .serializers import ShoppingListSerializer
from rest_framework.response import Response
from rest_framework import views,viewsets,generics,mixins

from pantry.models import Pantry
from rest_framework.authentication import TokenAuthentication
 

# Create your views here.
# Combined PUT and DELETE 

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
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
        print(request.data)
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



 



class AddtoCartView(views.APIView):
    authentication_classes = [TokenAuthentication,]
    
    def post(self,request):
        product_id = request.data['id']
        product_obj = Pantry.objects.get(id=product_id)
        print(product_obj,"product_obj")  
        print(request.user)   
          
        
        cart_cart = Cart.objects.filter(customer=request.user).filter(complit=False).first()
        
        cart_product_obj = CartProduct.objects.filter(product__id=product_id).first()
        
        try:
            if cart_cart:
      
                this_product_in_cart = cart_cart.cartproduct_set.filter(product=product_obj)
                if this_product_in_cart.exists():
                    # print("OLD CART PRODUCT--OLD CART")
                    cartprod_uct = CartProduct.objects.filter(product=product_obj).filter(cart__complit=False).first()
                    cartprod_uct.quantity +=1
                    cartprod_uct.subtotal +=product_obj.selling_price
                    cartprod_uct.save()
                    cart_cart.total +=product_obj.selling_price
                    cart_cart.save()
                else:
                    # print("NEW CART PRODUCT CREATED--OLD CART")
                    cart_product_new=CartProduct.objects.create(
                        cart = cart_cart,
                        price  =product_obj.selling_price,
                        quantity = 1,
                        subtotal = product_obj.selling_price
                    )
                    cart_product_new.product.add(product_obj)
                    cart_cart.total +=product_obj.selling_price
                    cart_cart.save()
            else:
                # print(cart_cart)
                # print("NEW CART CREATED")
                Cart.objects.create(customer=request.user,total=0,complit=False)
                new_cart = Cart.objects.filter(customer=request.user).filter(complit=False).first()
                cart_product_new=CartProduct.objects.create(
                        cart = new_cart,
                        price  =product_obj.selling_price,
                        quantity = 1,
                        subtotal = product_obj.selling_price
                    )
                cart_product_new.product.add(product_obj)
                # print("NEW CART PRODUCT CREATED")    
                new_cart.total +=product_obj.selling_price
                new_cart.save()

            response_mesage = {'error':False,'message':"Product add to card successfully","productid":product_id}
        
        except:
            response_mesage = {'error':True,'message':"Product Not add!Somthing is Wromg"}

        return Response(response_mesage)




class UpdateCartProduct(views.APIView):
    permission_classes=[IsAuthenticated, ]
    authentication_classes=[TokenAuthentication, ]
    def post(self,request):
        cp_obj = CartProduct.objects.get(id=request.data["id"])
        cart_obj = cp_obj.cart

        cp_obj.quantity +=1
        cp_obj.subtotal += cp_obj.price
        cp_obj.save()

        cart_obj.total += cp_obj.price
        cart_obj.save()
        return Response({"message":"CartProduct Add Update","product":request.data['id']})

class EditCartProduct(views.APIView):
    permission_classes=[IsAuthenticated, ]
    authentication_classes=[TokenAuthentication, ]
    def post(self,request):
        cp_obj = CartProduct.objects.get(id=request.data["id"])
        cart_obj = cp_obj.cart

        cp_obj.quantity -=1
        cp_obj.subtotal -= cp_obj.price
        cp_obj.save()

        cart_obj.total -= cp_obj.price
        cart_obj.save()
        if(cp_obj.quantity==0):
            cp_obj.delete()   
        return Response({"message":"CartProduct Add Update","product":request.data['id']})



class Deletecartproduct(views.APIView):
    permission_classes=[IsAuthenticated, ]
    authentication_classes=[TokenAuthentication, ]
    def post(self,request):
        cp_obj = CartProduct.objects.get(id=request.data['id'])
        cp_obj.delete()        
        return Response({"message":"CartProduct Delated","product":request.data['id']})



class Deletefullcart(views.APIView):
    permission_classes=[IsAuthenticated, ]
    authentication_classes=[TokenAuthentication, ]
    def post(self,request):
        try:
            card_obj = Cart.objects.get(id=request.data['id'])
            card_obj.delete()
            responsemessage = {"message":"Cart Delated"}
        except:
            responsemessage = {"message":"Somthing wright"}
        return Response(responsemessage)