from django.shortcuts import render
from django.http import HttpResponse

from .apis_func import *
# Create your views here.

def kroger_call(request):
    access_token()
    return HttpResponse("Success")