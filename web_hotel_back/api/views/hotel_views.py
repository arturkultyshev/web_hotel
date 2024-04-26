from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from api.serializers import HotelSerializer
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.http import Http404, JsonResponse
from ..models import Hotel


class HotelsView(APIView):
    def get(self, request):
        hotels = Hotel.objects.all()
        serializer = HotelSerializer(hotels, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @method_decorator(csrf_exempt)
    def post(self, request):
        serializer = HotelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
def hotels_list(request):
    if request.method == 'GET':
        hotels = Hotel.objects.all()
        serializer = HotelSerializer(hotels, many=True)
        return JsonResponse(serializer.data, safe=False)
    
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = HotelSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


class HotelDetailView(APIView):
    def get_object(self, pk=None):
        try:
            hotel = Hotel.objects.get(pk=pk)
            return hotel
        except Hotel.DoesNotExist as err:
            raise Http404('Hotel does not exist')

    def get(self, request, id):
        hotel = self.get_object(pk=id)
        serializer = HotelSerializer(hotel)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @method_decorator(csrf_exempt)
    def put(self, request, id):
        hotel = self.get_object(pk=id)
        serializer = HotelSerializer(hotel, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @method_decorator(csrf_exempt)
    def delete(self, request, id):
        hotel = self.get_object(pk=id)
        hotel.delete()
        return Response({'deleted': True}, status=status.HTTP_204_NO_CONTENT)
