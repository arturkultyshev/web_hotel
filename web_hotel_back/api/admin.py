from django.contrib import admin

from .models import Hotel, User, Review, Order

admin.site.register(Hotel)
admin.site.register(User)
admin.site.register(Review)
admin.site.register(Order)

