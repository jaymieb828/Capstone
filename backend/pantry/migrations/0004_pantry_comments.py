# Generated by Django 4.0.4 on 2022-09-12 18:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pantry', '0003_remove_pantry_comments_pantry_add_to_list'),
    ]

    operations = [
        migrations.AddField(
            model_name='pantry',
            name='comments',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
    ]
