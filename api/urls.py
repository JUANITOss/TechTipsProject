from django.urls import path
from .views import homepage, chatbot_response, send_whatsapp_message, PostListCreate, PostDetail, delete_post

urlpatterns = [
    path('api/homepage/', homepage, name='homepage'),
    path('api/chatbot_response/', chatbot_response, name='chatbot_response'),
    path('api/chatbot_response/', send_whatsapp_message, name='send_whatsapp_message'),
    path('api/posts/', PostListCreate.as_view(), name='post_list_create'),
    path('api/posts/<int:post_id>/delete/', delete_post, name='delete_post'),
    path('api/posts/<int:pk>/', PostDetail.as_view(), name='post_detail')
]
