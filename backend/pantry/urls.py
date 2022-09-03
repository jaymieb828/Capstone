from django.urls import path
from . import views

urlpatterns = [ 
    path('', views.items_list),
    path('<int:pk>/', views.items_detail),
]

