from django.urls import path
from .views import *

urlpatterns = [ 
    path('', shopping_list),
    path('<int:pk>/', update_list),
   
    
 
    path("addtocart/",AddtoCartView.as_view(),name="addtocart"),
    path("updatecartproduct/",UpdateCartProduct.as_view(),name="updatecartproduct"),
    path("editcartproduct/",EditCartProduct.as_view(),name="editcartproduct"),
    path("deletecartproduct/",Deletecartproduct.as_view(),name="deletecartproduct"),
    path("deletefullcart/",Deletefullcart.as_view(),name="deletefullcart"),

    
]