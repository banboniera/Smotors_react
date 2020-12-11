from rest_framework import serializers

from ..models import Client


class ClientSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'
