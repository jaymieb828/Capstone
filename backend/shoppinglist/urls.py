from django.urls import path
from . import views

urlpatterns = [ 
    path('', views.shopping_list),
    path('<int:pk>/', views.update_list),
]