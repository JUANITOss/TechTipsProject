from django.shortcuts import render
from django.http import JsonResponse

def homepage(request):
    data = {
        'message': 'Hello from Django!'
    }
    return JsonResponse(data)
