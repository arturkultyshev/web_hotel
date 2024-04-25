from django.contrib import admin

from .models import Hotel, Review, Order

admin.site.register(Hotel)
admin.site.register(Review)
admin.site.register(Order)
