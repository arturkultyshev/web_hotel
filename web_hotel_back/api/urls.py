from django.urls import path

from api.views.hotel_views import *

urlpatterns = [
    path('hotels/', HotelsView.as_view(), name='hotels'),
    path('hotels/<int:id>/', HotelDetailView.as_view(), name='hotel detail'),
    # path('/<int:id>/reviews/', cbv.CompanyVacancies.as_view(), name='hotel reviews'),
    # path('/<int:id>/orders', cbv.VacanciesList.as_view(), name='hotel orders'),
]