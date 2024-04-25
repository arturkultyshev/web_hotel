from rest_framework_simplejwt.views import TokenObtainPairView
from ..serializers import CustomTokenObtainPairSerializer
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt


@method_decorator(csrf_exempt, name='dispatch')
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer