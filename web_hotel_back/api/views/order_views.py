from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from api.serializers import OrderSerializer

from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from datetime import datetime

from ..models import Order

class OrdersView(APIView):
    def get(self, request):
        orders = Order.objects.all()
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    @method_decorator(csrf_exempt)
    def post(self, request):
        if 'start_date' not in request.data:
            return Response({'error': 'start_date is required'}, status=status.HTTP_400_BAD_REQUEST)
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrderDetailView(APIView):
    def get_object(self, pk=None):
        try:
            order = Order.objects.get(pk=pk)
            return order
        except Order.DoesNotExist as err:
            return Response({'error': str(err)}, status=status.HTTP_404_NOT_FOUND)

    def get(self, request, id):
        order = self.get_object(pk=id)
        serializer = OrderSerializer(order)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @method_decorator(csrf_exempt)
    def put(self, request, id):
        order = self.get_object(pk=id)
        serializer = OrderSerializer(order, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @method_decorator(csrf_exempt)
    def delete(self, request, id):
        order = self.get_object(pk=id)
        order.delele()
        return Response({'deleted': True}, status=status.HTTP_204_NO_CONTENT)
