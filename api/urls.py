from django.urls import path
from .views import homepage, chatbot_response, send_whatsapp_message

urlpatterns = [
    path('api/homepage/', homepage, name='homepage'),
    path('api/chatbot_response/', chatbot_response, name='chatbot_response'),
    path('api/chatbot_response/', send_whatsapp_message, name='send_whatsapp_message')
]
