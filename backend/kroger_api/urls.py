from django.urls import path
from .views import *
from kroger_api import *

urlpatterns = [ 
    path('', kroger_call),
    path('fetchProducts/', fetchProducts),
    
    ]