from django.contrib import admin

from shoppinglist.models import *

# Register your models here.

admin.site.register(ShoppingList)

admin.site.register(Cart)

admin.site.register(Order)