from rest_framework.generics import ListAPIView, RetrieveAPIView

from ..models import Client
from .serializers import ClientSerialzer


class ClientListView(ListAPIView):
    queryset = Client.objects.all()
    # permission_classes = [
    #     permissions.AllowAny,
    # ]
    serializer_class = ClientSerialzer

class ClientDetailView(RetrieveAPIView):
    queryset = Client.objects.all() 
    serializer_class = ClientSerialzer
