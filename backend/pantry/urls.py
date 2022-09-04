from django.urls import path
from . import views

urlpatterns = [ 
    path('', views.pantry_list),
    path('<int:pk>/', views.pantry_detail),
]

