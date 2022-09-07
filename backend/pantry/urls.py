from django.urls import path
from . import views

urlpatterns = [ 
    path('<str:id>/', views.add_new_item),
    path('', views.get_pantry_items),
    path('int:pk/update/', views.update_item),
]

