from rest_framework.generics import (CreateAPIView, DestroyAPIView,
                                     ListAPIView, RetrieveAPIView,
                                     UpdateAPIView)

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


class ClientCreateView(CreateAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerialzer


class ClientUpdateView(UpdateAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerialzer


class ClientDeleteView(DestroyAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerialzer
