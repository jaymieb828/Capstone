# Generated by Django 4.0.4 on 2022-09-17 02:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pantry', '0006_pantry_quantity'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pantry',
            name='add_to_list',
        ),
        migrations.RemoveField(
            model_name='pantry',
            name='category',
        ),
        migrations.RemoveField(
            model_name='pantry',
            name='comments',
        ),
        migrations.RemoveField(
            model_name='pantry',
            name='expiration',
        ),
    ]
