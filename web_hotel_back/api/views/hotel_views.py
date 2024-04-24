from django.http import JsonResponse
from django.views import View
from ..models import Hotel

class HotelsView(View):
    def get(self, request):
        hotels = Hotel.objects.all()
        json = {'hotels': [
            {
                'id': hotel.id,
                'name': hotel.name,
                'country': hotel.country,
                'city': hotel.city,
                'street': hotel.street,
                'rating': hotel.rating,
                'capacity': hotel.capacity,
                'cost': hotel.cost,
                'photo_url': hotel.photo_url,
                'addition_info': hotel.addition_info,
            }
            for hotel in hotels
        ]}

        return JsonResponse(json, json_dumps_params={'ensure_ascii': False})

class HotelDetailView(View):
    def get(self, request, id):
        hotel = Hotel.objects.get(id=id)
        json = {
                'id': hotel.id,
                'name': hotel.name,
                'country': hotel.country,
                'city': hotel.city,
                'street': hotel.street,
                'rating': hotel.rating,
                'capacity': hotel.capacity,
                'cost': hotel.cost,
                'photo_url': hotel.photo_url,
                'addition_info': hotel.addition_info,
            }
        return JsonResponse(json, json_dumps_params={'ensure_ascii': False})
