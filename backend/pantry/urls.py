from django.urls import path
from . import views

urlpatterns = [ 
    path('', views.pantry_items),
    path('add-item/', views.add_new_item),
    path('<int:pk>/', views.update_item),
]

#GET url valid. Testing complete. Need to debug POST and PUT.