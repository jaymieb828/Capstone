from django.urls import path
from . import views

urlpatterns = [ 
    path('', views.pantry_items),
    path('add-item/', views.add_new_item),
    path('<int:pk>/', views.update_item),
    path('delete/', views.DelatefullPantry.as_view(), name="delete"),
    path('category/', views.Category.as_view(), name="category"),
    
    
]

#GET url valid. Testing complete. Need to debug POST and PUT.