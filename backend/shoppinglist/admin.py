from django.contrib import admin

from shoppinglist.models import ShoppingList

# Register your models here.

admin.site.register(ShoppingList)

admin.site.register(Cart)

admin.site.register(CartProduct)
