# Generated by Django 5.1.5 on 2025-01-28 02:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('a_products', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='title',
            field=models.CharField(max_length=25),
        ),
    ]
