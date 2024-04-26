from django.urls import path

from api.views.hotel_views import HotelsView, HotelDetailView, hotels_list
from api.views.review_views import ReviewsView, ReviewDetailView, reviews_list
from api.views.order_views import OrderDetailOneView, OrdersView, OrderDetailView

from api.views.auth_view import RegisterView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='hotels'),
    path('hotels/', hotels_list, name='hotels'),
    path('hotels/<int:id>/', HotelDetailView.as_view(), name='hotel detail'),
    path('hotels/<int:id>/reviews/', reviews_list, name='reviews'),
    path('hotels/<int:hotelId>/reviews/<int:id>/', ReviewDetailView.as_view(), name='review detail'),
    path('orders/', OrdersView.as_view(), name='orders'),
        path('orders/<int:id>/', OrderDetailOneView.as_view(), name='one order detail'),
    path('orders/user/<int:id>/', OrderDetailView.as_view(), name='order detail'),
]
