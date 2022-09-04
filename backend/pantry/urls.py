from django.urls import path
from . import views

urlpatterns = [ 
    path('', views.user_items),
    path('<int:pk>/', views.get_pantry_items),
]

