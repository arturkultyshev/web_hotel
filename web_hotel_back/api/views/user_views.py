from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from api.serializers import UserSerializer

from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

from ..models import User

class UsersView(APIView):
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @method_decorator(csrf_exempt)
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UserDetailView(APIView):
    def get_object(self, pk=None):
        try:
            user = User.objects.get(pk=pk)
            return user
        except User.DoesNotExist as err:
            return Response({'error': str(err)}, status=status.HTTP_404_NOT_FOUND)
    
    def get(self, request, id):
        user = self.get_object(pk=id)
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @method_decorator(csrf_exempt)
    def put(self, request, id):
        user = self.get_object(pk=id)
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @method_decorator(csrf_exempt)
    def delete(self, request, id):
        user = self.get_object(pk=id)
        user.delete()
        return Response({'deleted': True}, status=status.HTTP_204_NO_CONTENT)