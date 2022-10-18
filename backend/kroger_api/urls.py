
from os import access
from django.urls import path
from .views import *
from kroger_api import *

urlpatterns = [ 
    path('', kroger_call),
    
    ]