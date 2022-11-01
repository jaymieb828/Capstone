# Generated by Django 4.1.2 on 2022-10-22 06:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0001_initial'),
        ('pantry', '0002_pantry_price_alter_pantry_add_to_list_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pantry',
            name='category',
        ),
        migrations.AddField(
            model_name='pantry',
            name='categories',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='categories.categories'),
        ),
    ]