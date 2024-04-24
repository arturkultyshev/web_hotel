from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from api.serializers import ReviewSerializer

from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

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


class ReviewDetailView(APIView):
    def get_object(self, pk=None):
        try:
            review = Review.objects.get(pk=pk)
            return review
        except Review.DoesNotExist as err:
            return Response({'error': str(err)}, status=status.HTTP_404_NOT_FOUND)

    def get(self, request, id):
        review = self.get_object(pk=id)
        serializer = ReviewSerializer(review)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @method_decorator(csrf_exempt)
    def put(self, request, id):
        review = self.get_object(pk=id)
        serializer = ReviewSerializer(review, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @method_decorator(csrf_exempt)
    def delete(self, request, id):
        review = self.get_object(pk=id)
        review.delete()
        return Response({'deleted': True}, status=status.HTTP_204_NO_CONTENT)
