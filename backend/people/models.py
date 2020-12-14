from decimal import Decimal

from django.core.validators import MinValueValidator
from django.db import models


class Client(models.Model):
    name = models.CharField(max_length=50, blank=False, null=False)
    surname = models.CharField(max_length=50, blank=True, null=True)
    phone = models.DecimalField(max_digits=15, decimal_places=0, validators=[MinValueValidator(Decimal('0.0'))],
                                blank=False, null=False)
    nip = models.DecimalField(max_digits=17, decimal_places=0, validators=[MinValueValidator(Decimal('0.0'))],
                              blank=True, null=True)
    email = models.EmailField(max_length=320, blank=True, null=True)
    comment = models.CharField(max_length=500, blank=True, null=True)
