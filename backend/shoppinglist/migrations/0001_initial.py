# Generated by Django 4.1.2 on 2022-11-02 16:23

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('pantry', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total', models.PositiveIntegerField(null=True)),
                ('complit', models.BooleanField(default=False)),
                ('date', models.DateField(auto_now_add=True)),
                ('customer', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ShoppingList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField(default=1)),
                ('total', models.PositiveIntegerField(default=0, null=True)),
                ('cart', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='shoppinglist.cart')),
                ('item', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='pantry.pantry')),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subtotal', models.PositiveIntegerField(null=True)),
                ('cart', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='shoppinglist.cart')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
