from django.urls import path
from .views import homepage

urlpatterns = [
    path('api/homepage/', homepage, name='homepage'),
]
