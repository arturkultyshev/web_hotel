import django
from django.db import models
from django.conf import settings


class Hotel(models.Model):
    name = models.CharField(max_length=255, null=False,
                            blank=False, default='')
    country = models.CharField(
        max_length=255, null=False, blank=False, default='')
    city = models.CharField(max_length=255, null=False,
                            blank=False, default='')
    street = models.CharField(
        max_length=255, null=False, blank=False, default='')
    rating = models.FloatField(default=0)
    capacity = models.IntegerField(default=0)
    cost = models.IntegerField(default=0)
    photo_url = models.TextField()
    addition_info = models.TextField()

    def __str__(self):
        return self.name


class Order(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    created_at = models.DateField(default=django.utils.timezone.now)
    additional_info = models.TextField()

    def __str__(self):
        return f"""Order: {self.hotel} - {self.user}"""


class Review(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    rating = models.FloatField(default=0)
    publication_date = models.DateField()
    comment = models.TextField()

    def __str__(self):
        return f"""Review: {self.hotel} - {self.user}"""

# class User(models.Model):
#     username = models.CharField(max_length=255)
#     password = models.CharField(max_length=255)
#     first_name = models.CharField(max_length=255)
#     last_name = models.CharField(max_length=255)
#     phone_number = models.CharField(max_length=20)
#     email = models.CharField(max_length=255)
#     is_admin = models.BooleanField(default=False)

#     def __str__(self):
#         return self.username

