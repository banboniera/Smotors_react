# Generated by Django 2.2.13 on 2020-12-14 09:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('people', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='client',
            old_name='NIP',
            new_name='nip',
        ),
    ]
