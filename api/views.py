from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from nltk.chat.util import Chat, reflections
from twilio.rest import Client

def homepage(request):
    data = {
        'message': 'Hello from Django!'
    }
    return JsonResponse(data)


# Credenciales de Twilio
TWILIO_ACCOUNT_SID = 'tu_account_sid'
TWILIO_AUTH_TOKEN = 'tu_auth_token'
TWILIO_PHONE_NUMBER = 'tu_numero_de_twilio'

client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

# Definir patrones y respuestas 
pairs = [
    (r'cómo ingresar a (.*)', ['Para ingresar a %1, simplemente abre tu navegador y escribe %1 en la barra de direcciones.']),
    (r'cómo crear una cuenta en (.*)', ['Para crear una cuenta en %1, visita su sitio web oficial y busca la opción de registro o crear cuenta.']),
    (r'cómo enviar imágenes por whatsapp', ['Abre la conversación en WhatsApp, selecciona el ícono de adjuntar y luego elige la opción de enviar imagen.']),
    (r'cómo (llamar|videollamar) por whatsapp', ['Para %1 por WhatsApp, abre la conversación de la persona, presiona el ícono de teléfono para llamar o el ícono de cámara para videollamar.']),
    (r'cómo usar (Facebook|Instagram)', ['Para usar %1, descarga la aplicación desde la tienda de aplicaciones, crea una cuenta o inicia sesión si ya tienes una y comienza a explorar las funciones disponibles.']),
    (r'(.*) (ayuda|tutorial)', ['Te recomiendo buscar tutoriales en línea sobre %1.']),
    (r'(.*) (recomienda|recomendación)', ['Te recomendaría %1.']),
    (r'(.*) (diferencia entre|comparación entre) (.*) y (.*)', ['La diferencia principal entre %3 y %4 es ...']),
    (r'(.*) (mejor|óptimo) (.*)', ['La mejor opción para %3 es ...']),
    (r'(.*) (beneficios de|ventajas de) (.*)', ['Algunos beneficios de %3 son ...']),
    (r'(.*) (problema|error) al (.*)', ['Es posible que estés experimentando problemas debido a ...']),
    (r'(hola|Hola|buenos días|Buenos días|buenas tardes|Buenas tardes|buenas noches|Buenas noches)', ['¡Hola! ¿En qué puedo ayudarte?']),
]

chatbot = Chat(pairs, reflections)

@api_view(['POST'])
def chatbot_response(request):
    user_input = request.data.get('message')
    response = chatbot.respond(user_input)
    return Response({'response': response})

@api_view(['POST'])
def send_whatsapp_message(request):
    message = request.data.get('message')
    recipient = request.data.get('recipient')
    try:
        client.messages.create(
            body=message,
            from_='whatsapp:' + TWILIO_PHONE_NUMBER,
            to='whatsapp:' + recipient
        )
        return Response({'status': 'Mensaje enviado'})
    except Exception as e:
        return Response({'status': 'Error al enviar mensaje', 'error': str(e)})

