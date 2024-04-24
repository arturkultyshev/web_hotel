from django.urls import path

from api.views.hotel_views import HotelsView, HotelDetailView
# from api.views.user_views import UsersView, UserDetailView
from api.views.review_views import ReviewsView, ReviewDetailView
from api.views.order_views import OrdersView, OrderDetailView


urlpatterns = [  
    path('hotels/', HotelsView.as_view(), name='hotels'),
    path('hotels/<int:id>/', HotelDetailView.as_view(), name='hotel detail'),
    path('hotels/<int:id>/reviews/', ReviewsView.as_view(), name='reviews'),
    path('hotels/<int:hotelId>/reviews/<int:id>/', ReviewDetailView.as_view(), name='review detail'),
    # path('users/', UsersView.as_view(), name='users'),
    # path('users/<int:id>/', UserDetailView.as_view(), name='user detail'),
    path('orders/', OrdersView.as_view(), name='orders'),
    path('orders/<int:id>/', OrderDetailView.as_view(), name='order detail'),
]
