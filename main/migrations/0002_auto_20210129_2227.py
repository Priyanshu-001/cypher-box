# Generated by Django 3.1.5 on 2021-01-29 16:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tool',
            name='description',
            field=models.TextField(max_length=400, verbose_name='description'),
        ),
    ]
