# Generated by Django 3.1.5 on 2021-02-15 15:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_resources_variations'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='resources',
            name='obj',
        ),
        migrations.RemoveField(
            model_name='variations',
            name='obj',
        ),
        migrations.AddField(
            model_name='tool',
            name='resoucres',
            field=models.ManyToManyField(to='main.resources'),
        ),
        migrations.AddField(
            model_name='tool',
            name='variations',
            field=models.ManyToManyField(to='main.variations'),
        ),
    ]
