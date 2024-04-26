from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.response import Response
from api.serializers import ReviewSerializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.http import Http404
from ..models import Review


class ReviewsView(APIView):
    def get(self, request, id):
        reviews = Review.objects.filter(hotel_id=id)
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @method_decorator(csrf_exempt)
    def post(self, request):
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
def reviews_list(request, id):
    if request.method == 'GET':
        reviews = Review.objects.filter(hotel_id=id)
        serializer = ReviewSerializer(reviews, many=True)
        return JsonResponse(serializer.data, safe=False)
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ReviewSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    

class ReviewDetailView(APIView):
    def get_object(self, hotelId, id):
        try:
            return Review.objects.get(hotel_id=hotelId, pk=id)
        except Review.DoesNotExist:
            raise Http404

    def get(self, request, hotelId, id):
        review = self.get_object(hotelId, id)
        serializer = ReviewSerializer(review)
        return Response(serializer.data)

    @method_decorator(csrf_exempt)
    def put(self, request, hotelId, id):
        review = self.get_object(hotelId, id)
        serializer = ReviewSerializer(review, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @method_decorator(csrf_exempt)
    def delete(self, request, hotelId, id):
        review = self.get_object(hotelId, id)
        review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
